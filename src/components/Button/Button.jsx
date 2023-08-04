import clsx from "clsx"
import s from "./Button.module.css"
export default function Button( { children, type="primary", onClick, className } ) {
  return 
    <button onClick={onClick} className={clsx(className, s.button , {[s.primary]: type === "primary", [s.blue]: type === "blue"})}></button>
  ;
}
