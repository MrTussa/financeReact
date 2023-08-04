import s from "./Form.module.css"
import  Card  from "../Card"
export default function Form( { onClick } ) {
  return (
    <Card>
    <form className={s.form}>
      <label htmlFor="date" className={s.label}>
        date
        <input type="date" name="date"/>
      </label>
    </form>
    </Card>
  )
}
