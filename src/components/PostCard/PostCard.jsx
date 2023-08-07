import s from "./PostCard.module.css";
import clsx from "clsx";

function PostCard({ title, date, price, className, type = "expenses", key }) {
  console.log(key);
  return (
    <div key={key}
      className={clsx(className, s.card, {
        [s.expenses]: type === "expenses",
        [s.income]: type === "income",
      })}
    >
      <div className={s.title}>{title}</div>
      <div className={s.footer}>
        <div className={s.date}>{date}</div>
        <div className={s.price}>{price}$</div>
      </div>
    </div>
  );
}

export default PostCard;
