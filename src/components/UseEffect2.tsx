import { useState, useEffect } from "react";


export const SetTimeoutExample = () => {
    const[fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")


    //useEffect c setTimeout
    useEffect(() => {
        console.log("setTimeout");
        setTimeout(() => {
        document.title = counter.toString();
    }, 1000)
    }, [counter])
    //может быть зависимость от пропсов, тогда записываем так [props.counter]


    return (
        <div>
        counter: {counter}  fake: {fake}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        </div>
    
    )
}