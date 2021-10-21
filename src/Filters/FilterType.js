import React from "react";
import styled from "styled-components";

const FilterType = ({ selectedType, onChangeFilterType }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilterType(e.target.value);
  };
  return (
    <StyledFilter>
      <FilterControl>
        <label>Filter by Workout</label>
        <select value={selectedType} onChange={dropdownChangeHandler}>
          <option value="Weight Training">Weight Training</option>
          <option value="Cardio">Cardio</option>
          <option value="Yoga">Yoga</option>
          <option value="Core">Core</option>
          <option value="Other">Other</option>
        </select>
      </FilterControl>
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  color: #fff;
  padding: 0 1rem;
`;
const FilterControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;

  label {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  select {
    font: inherit;
    padding: 0.5rem 2rem;
    font-weight: bold;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
    }
  }
`;

export default FilterType;
