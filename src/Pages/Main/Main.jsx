import { Card } from "../../components";
import s from "./Main.module.css";
export default function Main() {
  return (
    <>
      <div className={s.container}>
        <div className={s.sidebar}>
          <Card className={s.cardWidth}>
            <form className={s.form}>
              <label htmlFor="date" className={s.label}>
                date
                <input type="date" name="date" />
              </label>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
