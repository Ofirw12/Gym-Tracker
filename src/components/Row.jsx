import React from "react";
import Button from "./Button"
const sets = [8,8,8,8,8];




function Row(props){
    return <div className="container Row">
    <h3> {props.name}</h3>
    {sets.map( (set,index) =>
        {return <Button
        index={index}
        key={index}
        startTimer={props.startTimer}
        >
        {set}
        
        </Button>}
        )}
    
    </div>

}



export default Row;