import s from "./PostCard.module.css";
import clsx from "clsx";

function PostCard({ title, date, price, className, type = "blue" }) {
  return (
    <div
      className={clsx(className, s.card, {
        [s.blue]: type === "salary",
        [s.yellow]: type === "food",
        [s.orange]: type === "orange",
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
