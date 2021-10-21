import React from "react";
import styled from "styled-components";

const WorkoutNotes = ({ notes }) => {
  return (
    <StyledNotes>
      <li>{notes}</li>
    </StyledNotes>
  );
};

const StyledNotes = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 15rem;
  border: 1px solid var(--clr-accent);
  border-radius: 0.9rem;
  padding: 1rem;
  margin-top: 1rem;
  background-color: var(--clr-light);
  color: var(--clr-dark);
  font-size: var(--fontMed);
  overflow-x: scroll;

  li {
    list-style-type: none;
    word-wrap: break-word;
  }
`;

export default WorkoutNotes;
