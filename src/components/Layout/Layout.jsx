import { Link, Outlet } from "react-router-dom"
import s from "./Layout.module.css"
export default function Layout() {
  return (
      <>
    <header className={s.header}>
      <div > <Link className={s.link}> Budget Traker </Link></div>
    </header>
    <Outlet/>
    </>
  );
}
