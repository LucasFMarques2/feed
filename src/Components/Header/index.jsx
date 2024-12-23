import styles from './index.module.css'
import logo from '../../assets/logo.svg'

export function Header(){
    return(
        <div className={styles.header}>
            <img src={logo} alt='Logo ignite' />
            <h1>Ignite Feed</h1>
        </div>
    )
}