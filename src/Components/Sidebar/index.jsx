import style from './index.module.css'
import imagem from '../../assets/background.svg'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} src={imagem} />

            <div className={style.profile}>
                <img className={style.avatar} src="https://avatars.githubusercontent.com/u/117478158?v=4" alt="avatar" />
                <strong>Lucas Freitas</strong>
                <span>Web Develope</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine className={style.editButton}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}