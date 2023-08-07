import { Button, Card, PostCard } from "../../components"
import { useState } from "react";
import Select from "react-select";
import s from "./Main.module.css";

const arrayPost = [{ title: "salary", date: "213", price: 250 }];
const options = [
  { value: "salary", label: "salary" },
  { value: "food", label: "food" },
  { value: "deposit", label: "deposit" },
];

export default function Main() {
  const [type, setType] = useState("chocolate");
  const [data, setData] = useState(arrayPost);
  const getDate = () => {
    const currentDate = new Date();
    return `${currentDate.getDate()}.${currentDate.getMonth()}.
    ${currentDate.getFullYear()}`;
  };

  const changeSelectHandler = (choise) => {
    setType(choise.value);
  };

  const saveHandler = () => {
    const newItem = {
      title: type,
      date: getDate(),
      price: 250,
    };
    setData([...data, newItem]);
  };
  console.log();
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <Card title="Income">
          <div className={s.containerForm}>Date:{getDate()}</div>
          <Select options={options} onChange={changeSelectHandler} />
          <div className={s.footerForm}>
            <Button type="gray">Clear</Button>
            <Button type="blue" onClick={saveHandler}>
              Save
            </Button>
          </div>
        </Card>

        <Card>
          {data.map(({ title, price, date }) => {
            return (
              <PostCard title={title} price={price} date={date} type={title}>
                data
              </PostCard>
            );
          })}
        </Card>
      </div>
    </div>
  );
}