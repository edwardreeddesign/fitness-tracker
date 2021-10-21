import React from "react";
import styled from "styled-components";
import WorkoutItem from "./WorkoutItem";

const WorkoutList = ({ items }) => {
  if (items.length === 0) {
    return <Fallback>Found no Workouts.</Fallback>;
  }
  return (
    <StyledList>
      {items.map((workout) => (
        <WorkoutItem
          key={workout.id}
          title={workout.type}
          durationHr={workout.durationHr}
          durationMin={workout.durationMin}
          type={workout.workout}
          notes={workout.notes}
          date={workout.date}
        />
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-column-gap: 1rem; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  color: var(--clr-light);
  min-height: 40rem;
`;

const Fallback = styled.div`
  color: var(--clr-light);
  text-align: center;
  font-size: var(--fontMed);
`;

export default WorkoutList;
