import React from "react";
import Button from "../button";

const Books = ({ onAccept }) => {
  const [value, setValue] = React.useState({
    firstAuthor: "",
    secondAuthor: "",
    thirdAuthor: "",
    name: "",
    type: "",
    city: "",
    year: "",
    s: "",
  });

  const onChange = (e) => {
    const target = e.target;

    const newValue = { ...value };

    newValue[target.name] = target.value;

    setValue({ ...newValue });
  };

  const onAcceptAction = () => {
    const {
      firstAuthor,
      secondAuthor,
      thirdAuthor,
      name,
      type,
      city,
      year,
      s,
    } = value;

    const ans = `${firstAuthor}${secondAuthor ? `, ${secondAuthor}` : ""}${
      thirdAuthor ? `, ${thirdAuthor}` : ""
    } ${name} : ${type}. ${city}, ${year}. C. ${s} `;

    onAccept(ans);

    setValue({
      firstAuthor: "",
      secondAuthor: "",
      thirdAuthor: "",
      name: "",
      type: "",
      city: "",
      year: "",
      s: "",
    });
  };

  return (
    <div className="group-container">
      <h3 className="group-header">Книги до 3х авторов</h3>
      <div className="group-body">
        <div className="group-item">
          <p className="group-item_text">Автор 1 Фамилия И.О.</p>
          <input
            className="group-item_input"
            name={"firstAuthor"}
            value={value.firstAuthor}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Автор 2 Фамилия И.О.</p>
          <input
            className="group-item_input"
            name={"secondAuthor"}
            value={value.secondAuthor}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Автор 3 Фамилия И.О. </p>
          <input
            className="group-item_input"
            name={"thirdAuthor"}
            value={value.thirdAuthor}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Название книги </p>
          <input
            className="group-item_input"
            name={"name"}
            value={value.name}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Тип книги </p>
          <input
            className="group-item_input"
            name={"type"}
            value={value.type}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Город и издвательство </p>
          <input
            className="group-item_input"
            name={"city"}
            value={value.city}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Год </p>
          <input
            className="group-item_input"
            name={"year"}
            value={value.year}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Страница </p>
          <input
            className="group-item_input"
            name={"s"}
            value={value.s}
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

export default Books;
