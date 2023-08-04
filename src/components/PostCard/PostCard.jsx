import clsx from "clsx"
import s from "./Card.module.css"
export default function PostCard( { title, date, price, className, type="blue" } ) {
  return(
    <div className={s.card, className}>
      {title && <div className={s.title}>{title}</div>}
      {children}
    </div>
  )
  ;
}
