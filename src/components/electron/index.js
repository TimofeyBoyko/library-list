import React from "react";
import Button from "../button";

const Electron = ({ onAccept }) => {
  const [value, setValue] = React.useState({
    name: "",
    web: "",
    url: "",
    date: "",
  });

  const onChange = (e) => {
    const target = e.target;

    const newValue = { ...value };

    newValue[target.name] = target.value;

    setValue({ ...newValue });
  };

  const onAcceptAction = () => {
    const { name, web, url, date } = value;

    const ans = `${name} [Электронный ресус]// ${web} URL: ${url} (дата обращения: ${date})`;

    onAccept(ans);

    setValue({
      name: "",
      web: "",
      url: "",
      date: "",
    });
  };

  return (
    <div className="group-container">
      <h3 className="group-header">Ссылки на электронные ресурсы</h3>
      <div className="group-body">
        <div className="group-item">
          <p className="group-item_text">Название страницы</p>
          <input
            className="group-item_input"
            name={"name"}
            value={value.name}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Название сайта</p>
          <input
            className="group-item_input"
            name={"web"}
            value={value.web}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">URL </p>
          <input
            className="group-item_input"
            name={"url"}
            value={value.url}
            onChange={onChange}
          ></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Дата обращения (дд.мм.гггг) </p>
          <input
            className="group-item_input"
            name={"date"}
            value={value.date}
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

export default Electron;
