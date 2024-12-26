import style from './index.module.css'
import imagem from '../../assets/background.svg'
import {PencilLine} from 'phosphor-react'
import { Avatar } from '../Avatar'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} src={imagem} />

            <div className={style.profile}>
               <Avatar  foto="https://github.com/LucasFMarques2.png"/>
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