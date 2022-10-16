import React from "react";
import Button from "../button";

const Library = ({}) => {
  return (
    <div className="group-container">
      <h3 className="group-header">
        Источники из электронной библиотечной системы
      </h3>
      <div className="group-body">
        <div className="group-item">
          <p className="group-item_text">Название источника</p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Тип источника</p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Авторы (И.О. Фамилия, ....) </p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Город и издвательство </p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Год издания </p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Страница </p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">ISBN книги </p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Название библиотеки (если есть) </p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">URL </p>
          <input className="group-item_input"></input>
        </div>
        <div className="group-item">
          <p className="group-item_text">Дата обращения (дд.мм.гггг) </p>
          <input className="group-item_input"></input>
        </div>
      </div>
      <div className="group-footer">
        <Button title={"Принять"} />
      </div>
    </div>
  );
};

export default Library;
