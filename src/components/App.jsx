import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Row from "./Row";
import Timer,{startTimer} from "./Timer";



function App() {


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
        <Timer />
        <Footer />
    </div>
}

export default App;