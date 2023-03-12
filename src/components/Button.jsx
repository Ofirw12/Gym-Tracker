import React, { useState } from "react";
import {startTimer} from "./Timer"

const sets = [8,8,8,8,8];

function Button(props){
    const [reps,setReps]=useState(8)
    function ChangeReps(){
        
        if (reps==0)
            setReps(8)
        else setReps((prepValue) => {return prepValue-1})
        startTimer()
    }
    return <button
        className="btn btn-danger"
        onClick={ChangeReps}
        id={props.index}
        key={props.index}
        >
        {reps}
        </button>
        }
        
export default Button;
