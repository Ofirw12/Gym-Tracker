import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Row from "./Row";

function Session(props){
    return <div className="container fluid">
    <button type="button" class="btn btn-secondary btn-lg exit-session" onClick={props.endSession}>
    <i class="fa-solid fa-left-long"></i>
    </button>
    
        <Row
            name="Squat"
            key={1}
            startTimer={props.startTimer}
        />
        <Row
            name="Deadlift"
            key={2}
            startTimer={props.startTimer}
        />
        <Row
            name="Bench Press"
            key={3}
            startTimer={props.startTimer}
        />
        <Row
            name="Dumbbell Press"
            key={4}
            startTimer={props.startTimer}
        />
        </div>
        
    
    
}

export default Session;