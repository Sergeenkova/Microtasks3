import { useParams } from "react-router-dom";
import { adidasArr, AdidasItem } from "./Adidas";
import { pumaArr, PumaItem } from "./Puma";


//типизация для объекта с массивами
type CrossModel = {
  [key: string]: AdidasItem[] | PumaItem[];
};

//создаем объект с массивами данных, где ключом выступает по сути model, а значением - соответствующий массив 
const crossModels: CrossModel = {
  adidas: adidasArr,
  puma: pumaArr,
};

//useParams — это специальный хук из библиотеки React Router (используется в React для навигации).
//Он нужен для того, чтобы читать динамические параметры из URL-адреса страницы.
//Проще говоря: если в адресе сайта есть меняющаяся часть (например, ID пользователя или название товара),
//useParams позволяет легко достать это значение прямо в коде компонента.

export const Model = () => {
  //const params = useParams();
  //деструктуризируем useParams, чтобы достать из адресной строки не только id, но и model.
  //не забываем указать :model и :id в app.tsx в Route path={"/:model/:id"}
  const { model, id } = useParams();

  const currentModel = model 
  //ищем в объекте с массивами данных по ключу нужный массив, а в нем методом find по id нужный объект(el)
  ? crossModels[model].find((el) => el.id === Number(id))
  : null
  //тернарный оператор для проверки, что model не undefined
  return (
    <div style={{ textAlign: "center" }}>
      {currentModel ? (
        <div>
          <h2>{currentModel.model}</h2>
          <h3>{currentModel.collection}</h3>
          <h4>{currentModel.price}</h4>
          <img
            src={currentModel.picture}
            alt={currentModel.model}
            style={{ width: "200px", height: "auto", marginRight: "10px" }}
          />
        </div>
      ) : (
        <h2>Модель не существует</h2>
      )}
    </div>
  );
};
