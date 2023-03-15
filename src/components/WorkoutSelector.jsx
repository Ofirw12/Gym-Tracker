import React from "react";
import Card from "./Card";

function WorkoutSelector(props){

return <div className="container">
<h4> Select Workout</h4>
<div className="card-group">
<Card title="A" cardClick={props.cardClick}></Card>
<Card title="B" cardClick={props.cardClick}></Card>
<Card title="C" cardClick={props.cardClick}></Card>
</div>
</div>

}

export default WorkoutSelector

