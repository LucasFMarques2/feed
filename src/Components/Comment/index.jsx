import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import style from './index.module.css'

export function Comment(){
    return(
        <div className={style.comment}>
            <Avatar foto='https://github.com/LucasFMarques2.png'/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Diego Matos</strong>
                            <time title='11 de maio 08:13h' dateTime="2022-05-11">Públicado há 1h</time>
                        </div>
                        <button title='deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom palmas</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}