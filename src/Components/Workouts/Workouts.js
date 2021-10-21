import React, { useState } from "react";
import styled from "styled-components";

import WorkoutList from "./WorkoutList";
import WorkoutFilter from "./WorkoutFilter";

const Workouts = ({ items }) => {
  const [filteredMonth, setFilteredMonth] = useState("October");
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredType, setFilteredType] = useState("Cardio");

  const filterMonthWorkoutHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filterYearWorkoutHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterTypeWorkoutHandler = (selectedType) => {
    setFilteredType(selectedType);
  };

  const filteredMonthWorkouts = items.filter((workout) => {
    return (
      workout.date.toLocaleString("en-US", { month: "long" }) ===
        filteredMonth &&
      workout.date.getFullYear().toString() === filteredYear &&
      workout.type === filteredType
    );
  });

  const filteredYearWorkouts = items.filter((workout) => {
    return workout.date.getFullYear().toString() === filteredYear;
  });

  const filteredTypeWorkouts = items.filter((workout) => {
    return workout.type === filteredType;
  });

  return (
    <StyledWorkouts>
      <WorkoutFilter
        selected={filteredMonth}
        selectedYear={filteredYear}
        onChangeFilter={filterMonthWorkoutHandler}
        onChangeFilterYear={filterYearWorkoutHandler}
        selectedType={filteredType}
        onChangeFilterType={filterTypeWorkoutHandler}
      />
      <WorkoutList
        items={filteredMonthWorkouts}
        itemYear={filteredYearWorkouts}
        itemType={filteredTypeWorkouts}
      />
    </StyledWorkouts>
  );
};

const StyledWorkouts = styled.div`
  padding: 1rem;
  background-color: var(--clr-dark);
  margin: 5rem auto;
  width: 90rem;
  max-width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  border-radius: 0.9rem;
`;

export default Workouts;
