import clsx from "clsx"
import s from "./Input.module.css"
export default function Input( { type="text", onChange, className } ) {
  return(
    <input type={type} onChange={onChange} className={clsx({className}, {[s.text]: text, [s.radio]: radio, [s.date]: date}) }/>
  )
  
}
