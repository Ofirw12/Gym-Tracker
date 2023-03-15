import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Timer from "./Timer";
import Session from "./Session";
import WorkoutSelector from "./WorkoutSelector";




function App() {
    //Timer functions
    const [showTimer,setShowTimer] = useState(false)
    function startTimer(){
        setShowTimer(true)
    }
    function stopTimer(){
        setShowTimer(false)
    }
    //Timer functions

    //Session Control//
    const [inSession,setInSession]=useState(false)
    function startSession(){
        setInSession(true)
    }
    function endSession(){
        setInSession(false)
        setStartButton(true)
        stopTimer()
    }

    //Session Control//

    //Buttons Control//
    const [startButton,setStartButton]=useState(true)
    function handleClick(){
        setSelectorVisibility(true)
        setStartButton(false)
    }
    //Buttons Control//

    //Selector Control//
    const [selectorVisibility,setSelectorVisibility]=useState(false)
    function selectWorkout(){
        //figure how to select specific routine
        startSession()
        setSelectorVisibility(false)
    }
    //Selector Control//


    return <div>
        <Header />
        {startButton && <button type="button" className="btn btn-outline-danger" onClick={handleClick}>Start</button>}
        {selectorVisibility && <WorkoutSelector cardClick={selectWorkout}></WorkoutSelector>}
        {inSession && <Session endSession={endSession} startTimer={startTimer}></Session>}
        {showTimer && <Timer stopTimer={stopTimer}/>}
        <Footer />
    </div>
}

export default App;