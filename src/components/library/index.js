import React from "react";
import Button from "../button";

const Library = ({onAccept}) => { 
  const [value, setValue] = React.useState({
    name: '',
    type: '',
    authors: '',
    city: '',
    year: '',
    s: '',
    isbn: '',
    libraryName: '',
    url: '',
    date: ''
  })

  const onChange = (e) => {
    const target = e.target;

    const newValue = { ...value };

    newValue[target.name] = target.value;

    setValue({ ...newValue });
  };

  const onAcceptAction = () => {
    const {  
      name,
      type,
      authors,
      city,
      year,
      s,
      isbn,
      libraryName,
      url,
      date 
    } = value;

    const ans = `${name} : ${type} / ${authors}. ${city} : ${year}. ${s} c. ISBN ${isbn} Текст : Электронный // ${libraryName}. URL: ${url} (дата обращения: ${date})`;

    onAccept(ans);

    setValue({
      name: '',
      type: '',
      authors: '',
      city: '',
      year: '',
      s: '',
      isbn: '',
      libraryName: '',
      url: '',
      date: ''
    });
  };


  return (
    <div className="group-container">
      <h3 className="group-header">
        Источники из электронной библиотечной системы
      </h3>
      <div className="group-body">
        <div className="group-item">
          <p className="group-item_text">Название источника</p>
          <input 
            className="group-item_input"  
            name={"name"}
            value={value.name}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">Тип источника</p>
          <input 
            className="group-item_input"  
            name={"type"}
            value={value.type}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">Авторы (И.О. Фамилия, ....) </p>
          <input 
            className="group-item_input"  
            name={"authors"}
            value={value.authors}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">Город и издвательство </p>
          <input 
            className="group-item_input"  
            name={"city"}
            value={value.city}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">Год издания </p>
          <input 
            className="group-item_input"  
            name={"year"}
            value={value.year}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">Страница </p>
          <input 
            className="group-item_input"  
            name={"s"}
            value={value.s}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">ISBN книги </p>
          <input 
            className="group-item_input"  
            name={"isbn"}
            value={value.isbn}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">Название библиотеки (если есть) </p>
          <input 
            className="group-item_input"  
            name={"libraryName"}
            value={value.libraryName}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">URL </p>
          <input 
            className="group-item_input"  
            name={"url"}
            value={value.url}
            onChange={onChange}/>
        </div>
        <div className="group-item">
          <p className="group-item_text">Дата обращения (дд.мм.гггг) </p>
          <input 
            className="group-item_input"  
            name={"date"}
            value={value.date}
            onChange={onChange}/>
        </div>
      </div>
      <div className="group-footer" onClick={onAcceptAction}>
        <Button title={"Принять"} />
      </div>
    </div>
  );
};

export default Library;
