import { Button, Card, PostCard } from "../../components";
import { useState } from "react";
import Select from "react-select"; // Селектор
import DatePicker from "react-datepicker"; // Селектор для дат
import "react-datepicker/dist/react-datepicker.css";
import s from "./Main.module.css";
import clsx from "clsx";
import ReactECharts from "echarts-for-react";

const arrayPost = [
  { title: "salary", type: "income", date: "date", price: 250 },
];
const options = [
  { value: "income", label: "income" },
  { value: "expenses", label: "expenses" },
];
const formCategory = [
  { value: "salary", label: "salary" },
  { value: "food", label: "food" },
  { value: "deposit", label: "deposit" },
];

export default function Main() {
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("food");
  const [price, setPrice] = useState();
  const [data, setData] = useState(arrayPost);
  const [startDate, setStartDate] = useState(new Date());

  const changeSelectHandler = (choise) => {
    setType(choise.value);
  };
  const changeCategoryHandler = (choise) => {
    setCategory(choise.value);
  };
  const changePriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const saveHandler = () => {
    const date = startDate.toLocaleDateString();
    const newItem = {
      title: type,
      type: category,
      date: date,
      price: price,
    };
    if (price) {
      setData([...data, newItem]);
    } else {
      alert("Enter price!");
    }
  };
  const filterIncome = data
    .filter((item) => item.type === "income")
    .map((item) => {
      return { value: item.price, name: item.title };
    });
  console.log(filterIncome);
  console.log();
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <Card title="Income">
          <div className={s.form}>
            <div className={s.formColumn}>
              <span>Date</span>
              {
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className={clsx(s.date)}
                />
              }
            </div>
            <div className={s.formColumn}>
              <span>Type</span>
              <Select
                options={formCategory}
                onChange={changeSelectHandler}
                className={s.formSize}
              />
            </div>
            <div className={s.formColumn}>
              <span>Category</span>
              <Select
                options={options}
                onChange={changeCategoryHandler}
                className={s.formSize}
              />
            </div>
            <div className={s.formColumn}>
              <span>Value</span>
              <input
                type="number"
                onChange={changePriceHandler}
                className={clsx(s.date, s.formSize)}
              />
            </div>
            <div className={s.footerForm}>
              <Button type="gray">Clear</Button>
              <Button type="blue" onClick={saveHandler}>
                Save
              </Button>
            </div>
          </div>
        </Card>

        <Card className={s.postCardContainer}>
          {data.map(({ title, price, date, type }) => {
            return (
              <PostCard title={title} price={price} date={date} type={type}>
                data
              </PostCard>
            );
          })}
        </Card>
      </div>
      <div className="pieChartContainer">
        <ReactECharts
          option={{
            tooltip: {
              trigger: "item",
            },
            legend: {
              top: "5%",
              left: "center",
            },
            series: [
              {
                name: "Access From",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: "center",
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: "bold",
                  },
                },
                labelLine: {
                  show: false,
                },
                data: filterIncome,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
