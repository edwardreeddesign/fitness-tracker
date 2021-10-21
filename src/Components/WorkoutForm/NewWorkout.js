import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import NewWorkoutForm from "./NewWorkoutForm";

const NewWorkout = ({ onAddWorkout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      id: Math.random().toString(),
    };
    onAddWorkout(workoutData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  return (
    <StyledWorkout>
      {!isEditing && (
        <Button secondary onClick={startEditingHandler}>
          Add Workout
        </Button>
      )}
      {isEditing && (
        <NewWorkoutForm
          onCancel={stopEditingHandler}
          onSaveWorkoutData={saveWorkoutDataHandler}
        />
      )}
    </StyledWorkout>
  );
};

const StyledWorkout = styled.div`
  background: var(--clr-accent);
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 0.9rem;
  text-align: center;
  width: 90rem;
  max-width: 95%;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
`;

export default NewWorkout;
