import style from './index.module.css'

export function Avatar({foto}){
    return(
        <img className={style.avatar} src={foto}/>
    )
}