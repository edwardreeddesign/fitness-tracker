import React, { useState } from "react";
import GlobalStyle from "./GlobalStyles";

// Components
import Header from "./Components/Header";
import Workouts from "./Components/Workouts/Workouts";
import NewWorkout from "./Components/WorkoutForm/NewWorkout";

const DUMMY_WORKOUTS = [
  {
    id: "w1",
    type: "Cardio",
    duration: "1hr 30mins",
    workout: "Treadmill",
    notes: "Speed set at 3.5.",
    date: new Date(2021, 10, 15),
  },
  {
    id: "w2",
    type: "Weight Training",
    durationHr: "1.5",
    durationMin: "30",
    workout: "Free weights",
    notes:
      "Back and Shoulders.Shoulder Press Alternating Front raise Bent over side raise Upright Raise, Face Pulls superset Side Raise Shrugs Back and Shoulders.Shoulder Press Alternating Front raise Bent over side raise Upright Raise, Face Pulls superset Side Raise Shrugs ",
    date: new Date(2021, 11, 17),
    // date: {
    //   year: "2020",
    //   month: "May",
    //   date: "22",
    // },
  },
  {
    id: "w3",
    type: "Weight Training",
    durationHr: "1.5",
    durationMin: "30",
    workout: "Free weights",
    notes: "Chest",
    date: new Date(2021, 10, 18),
  },
  {
    id: "w4",
    type: "Cardio",
    durationHr: "1.5",
    durationMin: "30",
    workout: "Free weights",
    notes: "Biceps and Triceps.",
    date: new Date(2021, 10, 19),
  },
];

function App() {
  const [workouts, setWorkouts] = useState(DUMMY_WORKOUTS);

  const addWorkoutHandler = (workout) => {
    setWorkouts((prevWorkouts) => {
      return [workout, ...prevWorkouts];
    });
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <NewWorkout onAddWorkout={addWorkoutHandler} />
      <Workouts items={workouts} />
    </div>
  );
}

export default App;
