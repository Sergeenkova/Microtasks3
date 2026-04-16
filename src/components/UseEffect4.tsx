import { useState, useEffect } from "react";


export const DateTimer = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

    const intervalId = setInterval(() => {
    setDate(new Date());
    }, 1000)

    return () => {
        clearInterval(intervalId)
    }

    }, [])


    const formatTime = (num: number) => num < 10 ? `0${num}` : num;
    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    
return (
        <div>
        {hours}:{minutes}:{seconds}
        </div>
    )
}