import React, { useState } from "react";


const sets = [8,8,8,8,8];

function Button(props){
    const [reps,setReps]=useState(8)
    function ChangeReps(){
        
        if (reps===0)
            setReps(8)
        else setReps((prepValue) => {return prepValue-1})
        props.startTimer()
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
