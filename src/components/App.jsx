import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Row from "./Row";
import Timer from "./Timer";



function App() {
    //Timer functions
    const [showTimer,setShowTimer] = useState(false)
    function startTimer(){
        setShowTimer(true)
    }
    function stopTimer(){
        setShowTimer(false)
    }


    return <div>
        <Header />

        <Row
            name="Squat"
            key={1}
            startTimer={startTimer}
        />
        <Row
            name="Deadlift"
            key={2}
            startTimer={startTimer}
        />
        <Row
            name="Bench Press"
            key={3}
            startTimer={startTimer}
        />
        <Row
            name="Dumbbell Press"
            key={4}
            startTimer={startTimer}
        />
        {showTimer && <Timer stopTimer={stopTimer}/>}
        <Footer />
    </div>
}

export default App;