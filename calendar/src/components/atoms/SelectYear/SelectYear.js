import React from 'react';
import { Wrapper } from './SelectYear.styles';
import { date } from 'data/date';

const SelectYear = (props) => {
  return (
    <Wrapper>
      <label htmlFor="year" />
      <select data-testid="Year" {...props} defaultValue={date.year}>
        {date.displayArrayOfYears().map((year) => (
          <option data-testid="select-option" key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default SelectYear;
