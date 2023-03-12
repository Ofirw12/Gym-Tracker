import React, { useState, useEffect } from 'react';


function Timer(props) {
    const [time, setTime] = useState('01:30')
    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(30)
    const [visibility,setVisibility] = useState(false)
    function changeTime() {
        if (minutes === 0 && seconds === 0) {
            setVisibility(false)
            //console.log("we did good");
        }
        if (minutes >= 0 && seconds > 0) {
            setSeconds((prevValue) => { return prevValue - 1 })
        }
        if (minutes > 0 && seconds === 0) {
            setMinutes((prevValue) => { return prevValue - 1 })
            setSeconds(59)
        }
        setTime(
            () => {
                let j,k
                if (minutes < 10)
                    j = '0' + minutes
                else j = minutes
                if (seconds < 10)
                    k = '0' + seconds
                else k=seconds
                return j + ':' + k
            })
    }
    
    
    
    useEffect(() => {
        const interval = setInterval(() => changeTime(), 1000);
        return () => clearInterval(interval);
    });

    return <div className="timer">
    {visibility && <p onClick={changeTime}> {time} left </p> } 
    </div>


}
function startTimer(){
    setTime('1:30')
    setMinutes(1)
    setSeconds(30)
    setVisibility(true)

}

export {Timer as default, startTimer}



