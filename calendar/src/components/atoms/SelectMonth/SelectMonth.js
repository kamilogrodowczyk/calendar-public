import React from 'react';
import { Wrapper } from './SelectMonth.styles';
import { date } from 'data/date';

const SelectMonth = (props) => (
  <Wrapper>
    <label htmlFor="month" />
    <select data-testid="Month" {...props} name="month" defaultValue={date.monthName[date.month]}>
      {date.monthName.map((month) => (
        <option data-testid="select-option" key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  </Wrapper>
);

export default SelectMonth;
