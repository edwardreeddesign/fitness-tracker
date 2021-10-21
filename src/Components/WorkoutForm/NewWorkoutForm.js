import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const NewWorkoutForm = ({ onSaveWorkoutData, onCancel }) => {
  const [enteredWorkoutType, setEnteredWorkoutType] = useState("");
  const [enteredTimeHr, setEnteredTimeHr] = useState("");
  const [enteredTimeMin, setEnteredTimeMin] = useState("");
  const [enteredWorkout, setEnteredWorkout] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredNotes, setEnteredNotes] = useState("");

  const workoutTypeChangeHandler = (e) => {
    setEnteredWorkoutType(e.target.value);
  };

  const timeHrChangeHandler = (e) => {
    setEnteredTimeHr(e.target.value);
  };

  const timeMinChangeHandler = (e) => {
    setEnteredTimeMin(e.target.value);
  };

  const workoutChangeHandler = (e) => {
    setEnteredWorkout(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const noteChangeHandler = (e) => {
    setEnteredNotes(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const workoutData = {
      type: enteredWorkoutType,
      durationHr: enteredTimeHr,
      durationMin: enteredTimeMin,
      workout: enteredWorkout,
      date: new Date(enteredDate),
      notes: enteredNotes,
    };

    onSaveWorkoutData(workoutData);
    setEnteredWorkoutType("");
    setEnteredTimeHr("");
    setEnteredTimeMin("");
    setEnteredWorkout("");
    setEnteredDate("");
    setEnteredNotes("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Controls>
        <Control>
          <label>Workout Type</label>
          <select
            onChange={workoutTypeChangeHandler}
            value={enteredWorkoutType}
          >
            <option value="Weight Training">Weight Training</option>
            <option value="Cardio">Cardio</option>
            <option value="Yoga">Yoga</option>
            <option value="Core">Core</option>
            <option value="Other">Other</option>
          </select>
        </Control>
        <Control>
          <div className="column">
            <label>Duration</label>
            <input
              type="number"
              step=".5"
              placeholder="Enter Hour(s)"
              onChange={timeHrChangeHandler}
              value={enteredTimeHr}
            />
            <input
              type="number"
              step="5"
              placeholder="Enter Minutes"
              onChange={timeMinChangeHandler}
              value={enteredTimeMin}
            />
          </div>
        </Control>
        <Control>
          <label>Workout</label>
          <input
            type="text"
            placeholder="Enter Workout"
            onChange={workoutChangeHandler}
            value={enteredWorkout}
          />
        </Control>
        <Control>
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2050-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </Control>
      </Controls>
      <Notes>
        <label>Notes/Routine</label>
        <textarea
          cols="30"
          rows="10"
          onChange={noteChangeHandler}
          value={enteredNotes}
        ></textarea>
      </Notes>
      <StyledButtons>
        <Button outline onClick={onCancel}>
          Cancel
        </Button>
        <Button secondary>Add Workout</Button>
      </StyledButtons>
    </form>
  );
};

const Controls = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const Control = styled.div`
  label {
    font-weight: 700;
    font-size: var(--fontSmall);
    margin-bottom: 0.5rem;
    display: block;
    color: var(--clr-light);
  }

  small {
    margin: 0.5rem;
  }

  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
    margin-bottom: 0.5rem;

    &:focus {
      outline: none;
    }
  }

  select {
    font: inherit;
    padding: 0.5rem 1rem;
    font-weight: 700;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
  }
`;

const Notes = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  color: var(--clr-light);
  font-size: var(--fontSmall);

  textarea {
    font-size: var(--fontMed);
    padding: 1rem;
    height: 10rem;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default NewWorkoutForm;
