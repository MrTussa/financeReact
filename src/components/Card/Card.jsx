import clsx from "clsx"
import s from "./Card.module.css"
export default function Card( { children, title, className } ) {
  return(
    <div className={clsx(className, s.card)}>
      {title && <div className={s.title}>{title}</div>}
      {children}
    </div>
  )
  ;
}
