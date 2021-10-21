import React from "react";
import styled from "styled-components";

const FilterYear = ({ onChangeFilterYear, selectedYear }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilterYear(e.target.value);
  };

  return (
    <StyledExpenseFilter>
      <FilterControl>
        <label>Filter by Year</label>
        <select value={selectedYear} onChange={dropdownChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </FilterControl>
    </StyledExpenseFilter>
  );
};

const StyledExpenseFilter = styled.div`
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
export default FilterYear;
