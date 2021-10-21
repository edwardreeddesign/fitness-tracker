import React from "react";
import styled from "styled-components";

import WorkoutDate from "./WorkoutDate";
import WorkoutNotes from "./WorkoutNotes";

const WorkoutItem = ({ title, durationHr, durationMin, date, type, notes }) => {
  return (
    <StyledItem>
      <Title>
        <WorkoutDate date={date} />
        <h2>{title}</h2>
      </Title>
      <ItemDescription>
        <Container>
          <Time>
            <h2>Duration - </h2>
            <h3>{durationHr}Hr</h3>
            <h3>{durationMin}Min</h3>
          </Time>
          <Time>
            <h2>Workout - </h2>
            <h3>{type}</h3>
          </Time>
        </Container>
      </ItemDescription>
      <WorkoutNotes notes={notes} />
    </StyledItem>
  );
};

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 1rem;
  margin: 1rem 0;
  width: 30rem;
  max-width: 50%;
  background-color: #2a2a2a;
  box-shadow: 0 2px 8xp rgba(0, 0, 0, 0.35);
  border-radius: 0.9rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;

  h2 {
    font-size: var(--fontMed);
  }
`;

const ItemDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
`;

const Time = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-around;
  flex: 1;
  gap: 0.5rem;

  h2 {
    font-size: var(--fontSmall);
    flex: 1;
    margin: 1rem 1rem;
    color: #fff;
  }

  h3 {
    font-size: var(--fontSmall);
  }
`;
export default WorkoutItem;
