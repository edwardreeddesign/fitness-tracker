import React from "react";
import styled from "styled-components";

import FilterYear from "../../Filters/FilterYear";
import FilterMonth from "../../Filters/FilterMonth";
import FilterType from "../../Filters/FilterType";

const WorkoutFilter = ({
  selected,
  onChangeFilter,
  selectedYear,
  onChangeFilterYear,
  onChangeFilterType,
  selectedType,
}) => {
  return (
    <StyledExpenseFilter>
      <FilterYear
        selectedYear={selectedYear}
        onChangeFilterYear={onChangeFilterYear}
      />
      <FilterMonth selected={selected} onChangeFilter={onChangeFilter} />
      <FilterType
        selectedType={selectedType}
        onChangeFilterType={onChangeFilterType}
      />
    </StyledExpenseFilter>
  );
};

const StyledExpenseFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default WorkoutFilter;
