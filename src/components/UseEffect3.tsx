import { useState, useEffect } from "react";


export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalExample")


//useEffect c setInterval
    useEffect(() => {

        setInterval(() => {
        setCounter(state => state + 1);
    }, 1000)

    }, [])
    //[] - useEffect отрабатывает один раз при вмонтировании компонента (первом рендере компонента)
    //для того, чтобы setCounter в setInterval брал актуальное значение, а не 1 из замыкания, пишем логику изменения стейта:
    //state => state + 1 

    //ЗАМЫКАНИЕ: почему setCounter(counter => counter + 1) не сработает? useEffect вызывается только один раз при первом рендере ([]), setInterval 
    //(соответственно и callback setCounter) запускаются каждую секунду. При первом и единственном запуске useEffect переменная counter берется из 
    //области видимости компонента - на момент первого рендера counter = 1. Поскольку useEffect больше не перезапускается, setCounter внутри setInterval 
    //"запоминает" (замыкает в себе) именно ту самую первую переменную counter, значение которой — 1, и setInterval бесконечно будет выполнять
    //setCounter(1 + 1)
    
return (
        <div>
        counter: {counter} 
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </div>
    
    )
}