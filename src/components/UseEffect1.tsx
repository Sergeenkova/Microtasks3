import { useState, useEffect } from "react";


export const SimpleExample = () => {
    const[fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    //useEffect СРАБАТЫВАЕТ ТОЛЬКО ПОЛСЕ ТОГО, КАК РАЗМЕТКА ОТОБРАЗИЛАСЬ НА СТРАНИЦЕ!!


    //useEffect отрабатывает при каждой перерисовке компонента, если нет зависимости (нет [] после запятой), 
    //даже в том случае, если эффект просто повторяется и ничего в нем не меняется:
    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })


    //если передаем пустой массив (пустой [] после запятой), useEffect сработает один раз при вмонтировании компонента:
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount");
        document.title = counter.toString();
    }, [])  


    //если в [] кладем зависимость, которая меняется, то useEffect будет отрабатывать каждый раз при изменениях в зависимости
    //если в [] кладем зависимость, которая не меняется, то useEffect отрабатывать не будет (вызовется только в первый раз 
    //при первой отрисовке)
    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])

    return (
        <div>
        counter: {counter} fake: {fake}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        </div>
    
    )
}