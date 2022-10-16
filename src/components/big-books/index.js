import React from "react";
import Button from "../button";

const BigBooks = ({ onAccept }) => {
  const [value, setValue] = React.useState({
    authors: "",
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
    const { authors, name, type, city, year, s } = value;

    const ans = `${name} : ${type}./${authors}. ${city}, ${year}. ${s} c. `;

    onAccept(ans);

    setValue({
      authors: "",
      name: "",
      type: "",
      city: "",
      year: "",
      s: "",
    });
  };
  return (
    <div className="group-container">
      <h3 className="group-header">Книги более 3х авторов</h3>
      <div className="group-body">
        <div className="group-item">
          <p className="group-item_text">
            Авторы (И.О. Фамилия, И.О. Фамилия, ...)
          </p>
          <input
            className="group-item_input"
            name={"authors"}
            value={value.authors}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Название книги</p>
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

export default BigBooks;
