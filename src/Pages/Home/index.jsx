import { Header } from "../../Components/Header"
import { Post } from "../../Components/Post"
import { Sidebar } from "../../Components/Sidebar"
import style from './index.module.css'

export function Home() {

  return (
    <div>
      <Header/>    
      <div className={style.wrapper}>
          <Sidebar/>
          <main>
            <Post/>
            <Post/>
          </main>
      </div>
    </div>
  )
}


