import React from "react";

import "./App.css";

import Laws from "./components/laws";
import BigBooks from "./components/big-books";
import Books from "./components/books";
import Electron from "./components/electron";
import Library from "./components/library";
import Magazine from "./components/magazine";

import Modal from "./components/modal";

function App() {
  const [modalVisible, setModalVisible] = React.useState(true);
  const [answers, setAnswers] = React.useState([]);

  const onAccept = (value) => {
    const newAnswers = [...answers];
    newAnswers.unshift(value);

    setAnswers([...newAnswers]);
  };

  return (
    <div className="App">
      {modalVisible && <Modal onClose={() => setModalVisible(false)} />}
      <div className="container">
        <Laws onAccept={onAccept} />
        <Books onAccept={onAccept} />
        <BigBooks onAccept={onAccept} />
        <Magazine onAccept={onAccept} />
        <Electron onAccept={onAccept} />
        <Library onAccept={onAccept} />
      </div>
      <div className="container-answer">
        <h2>Результаты:</h2>

        {answers.map((x) => (
          <div key={x} className="answer-container">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
