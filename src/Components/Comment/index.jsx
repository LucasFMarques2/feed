import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import style from './index.module.css'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} foto='https://github.com/LucasFMarques2.png'/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Diego Matos</strong>
                            <time title='11 de maio 08:13h' dateTime="2022-05-11">Públicado há 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title='deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={()=>{setLikeCount(likeCount + 1)}}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}