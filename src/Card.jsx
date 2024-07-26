import style from "./Card.module.css"
import Sinopse from './Components/Sinopse/Sinopse'

export default function Card() {
  return (
    <div className={style.card}>
      <img className={style.foto} src="./../public/Foto_do_filme.jpg" alt="" />
      <Sinopse />
    </div>
  )
}