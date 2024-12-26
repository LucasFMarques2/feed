import style from './index.module.css'

export function Avatar({foto, hasBorder=true}){
    return(
        <img 
           className={ hasBorder ? style.avatarWithBorder : style.avatar} 
           src={foto}
        />
    )
}