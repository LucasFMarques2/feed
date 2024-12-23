import { Avatar } from '../Avatar'
import style from './index.module.css'
import { Comment } from '../Comment'

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                   <Avatar foto='https://github.com/LucasFMarques2.png'/>
                    <div className={style.authorInfo}>
                        <strong>Lucas Freitas</strong>
                        <span>Web Develope</span>
                    </div>
                </div>
                <time title='11 de maio 08:13h' dateTime="2022-05-11">Públicado há 1h</time>
            </header>
            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
            <form className={style.commentForm}>
                <strong>Deixe eu feedback</strong>

                <textarea placeholder='Deixe seu comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}