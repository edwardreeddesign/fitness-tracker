import React from "react";
import styled from "styled-components";

const WorkoutDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <StyledDate>
      <div className="month">{month}</div>
      <div className="day">{day}</div>
      <div className="year">{year}</div>
    </StyledDate>
  );
};

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-dark);
  border-radius: 0.9rem;
  border: 1px solid var(--clr-accent);
  padding: 0.5rem;
  color: var(--clr-light);
  width: 6rem;
  height: 6rem;

  .month,
  .day {
    font-weight: 700;
  }

  .month,
  .year {
    font-size: 0.75rem;
  }

  .day {
    font-size: 1.5rem;
  }
`;

export default WorkoutDate;
