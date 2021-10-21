import React from "react";
import styled from "styled-components";

const FilterMonth = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <StyledFilter>
      <FilterControl>
        <label>Filter by Month</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
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

export default FilterMonth;
