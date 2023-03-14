import React, { useState, useEffect } from 'react';


function Timer(props) {
    const [time, setTime] = useState('01:30')
    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(30)
    function changeTime() {
        if (minutes === 0 && seconds === 0) {
            props.stopTimer()
            resetTimer()
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
    function resetTimer(){
        console.log('in resetTimer');
        setTime('1:30')
        setMinutes(1)
        setSeconds(30)
    
    }
    
    
    useEffect(() => {
        const interval = setInterval(() => changeTime(), 1000);
        return () => clearInterval(interval);
    });
    

    return <div className="timer">
    <p onClick={changeTime}> {time} left </p> 
    </div>


}

export default Timer;



