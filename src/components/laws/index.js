import React from "react";
import Button from "../button";

const Laws = ({ onAccept }) => {
  const [value, setValue] = React.useState({
    name: "",
    type: "",
    date: "",
    number: "",
    from: "",
    year: "",
  });

  const onChange = (e) => {
    const target = e.target;

    const newValue = { ...value };

    newValue[target.name] = target.value;

    setValue({ ...newValue });
  };

  const onAcceptAction = () => {
    const { name, type, date, number, from, year } = value;

    const ans = `${name} : ${type} от ${date} г. № ${number} // ${from} ${year} `;

    onAccept(ans);

    setValue({
      name: "",
      type: "",
      date: "",
      number: "",
      from: "",
      year: "",
    });
  };

  return (
    <div className="group-container">
      <h3 className="group-header">Законы, постановления, приказы, ГОСТы</h3>
      <div className="group-body">
        <div className="group-item">
          <p className="group-item_text">Название</p>
          <input
            className="group-item_input"
            name={"name"}
            value={value.name}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Тип</p>
          <input
            className="group-item_input"
            name={"type"}
            value={value.type}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Дата (пример 16 октября 2022)</p>
          <input
            className="group-item_input"
            name={"date"}
            value={value.date}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Номер </p>
          <input
            className="group-item_input"
            name={"number"}
            value={value.number}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Кем принят </p>
          <input
            className="group-item_input"
            name={"from"}
            value={value.from}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Год </p>
          <input
            className="group-item_input"
            name={"year"}
            value={value.yaer}
            onChange={onChange}
          ></input>
        </div>
      </div>
      <div className="group-footer">
        <Button title={"Принять"} onClick={onAcceptAction} />
      </div>
    </div>
  );
};

export default Laws;
