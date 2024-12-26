import { Avatar } from '../Avatar'
import style from './index.module.css'
import { Comment } from '../Comment'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreaeteNewComment(event) {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        event.target.comment.value = ''
    }

    function handleNewCommentChange(event){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }
    
    function handleNewCommentInvalid(event){
        event.target.setCustomValidity('Faltou escrever aqui ó')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                   <Avatar foto={author.avatarUrl}/>
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={style.content}>
                {content.map(item =>{
                    if (item.type === 'paragraph'){
                        return <p key={item.content}>{item.content}</p>
                    }else if (item.type === 'link'){
                        return <p key={item.content}><a href="">{item.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreaeteNewComment} className={style.commentForm}>
                <strong>Deixe eu feedback</strong>

                <textarea 
                   name='comment' 
                   placeholder='Deixe seu comentário' 
                   onChange={handleNewCommentChange}
                   onInvalid={handleNewCommentInvalid}
                   required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={style.commentList}>
               {comments.map(item=>{
                    return (
                        <Comment 
                          key={item} 
                          content={item}
                          onDeleteComment={deleteComment}
                        />
                    )
               })}
            </div>
        </article>
    )
}