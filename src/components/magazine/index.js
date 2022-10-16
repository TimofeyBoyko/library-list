import React from "react";
import Button from "../button";

const Magazine = ({ onAccept }) => {
  const [value, setValue] = React.useState({
    authors: "",
    name: "",
    magazine: "",
    number: "",
    url: "",

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
    const { authors, name, magazine, number, url, year, s } = value;

    const ans = `${name}${
      authors ? ` / ${authors}` : ""
    } // ${magazine}. ${year}. № ${number}. C. ${s}. ${
      url ? `URL: ${url}` : ""
    } `;

    onAccept(ans);

    setValue({
      authors: "",
      name: "",
      magazine: "",
      number: "",
      url: "",

      year: "",
      s: "",
    });
  };
  return (
    <div className="group-container">
      <h3 className="group-header">Статьи из журналов</h3>
      <div className="group-body">
        <div className="group-item">
          <p className="group-item_text">Название статьи</p>
          <input
            className="group-item_input"
            name={"name"}
            value={value.name}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">
            Авторы (И.О. Фамилия, И.О. Фамилия, ...) если есть
          </p>
          <input
            className="group-item_input"
            name={"authors"}
            value={value.authors}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Название журнала </p>
          <input
            className="group-item_input"
            name={"magazine"}
            value={value.magazine}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Год выпуска </p>
          <input
            className="group-item_input"
            name={"year"}
            value={value.year}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Номер журнала (если есть) </p>
          <input
            className="group-item_input"
            name={"number"}
            value={value.number}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Страницы статьи </p>
          <input
            className="group-item_input"
            name={"s"}
            value={value.s}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">URL (если есть) </p>
          <input
            className="group-item_input"
            name={"url"}
            value={value.url}
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

export default Magazine;
