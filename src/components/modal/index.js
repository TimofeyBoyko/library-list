import React from "react";
import Button from "../button";

import "./modal.css";

const Modal = ({ onClose }) => {
  return (
    <>
      <div className="modal-dialog_backdrop"></div>
      <div className="modal-dialog">
        <h1 className="modal-dialog_header">Любимой жене!</h1>
        <div className="modal-dialog_body">
          <p className="modal-dialog_text">
            Небольшой сайт в помощь тебе для составления списка литературы по
            ГОСТу!:)
          </p>

          <p className="modal-dialog_text-header">Инструкция:</p>
          <p className="modal-dialog_text">
            Выбираешь нужный тебе тип, вводишь данные и жмёшь 'Принять'.
            Копируешь готовый вариант оформления.
          </p>

          <p className="modal-dialog_text-header">
            P.S. дизайн потом доработаю)
          </p>
        </div>
        <div className="modal-dialog_footer">
          <Button title={"Закрыть"} onClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default Modal;
