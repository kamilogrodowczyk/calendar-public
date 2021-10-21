import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { date } from 'data/date';
import { Paragraph, Heading, Wrapper } from './CalendarHeading.styles';
import SelectMonth from 'components/atoms/SelectMonth/SelectMonth';
import SelectYear from 'components/atoms/SelectYear/SelectYear';
import { Button } from 'components/atoms/Button.styles';
import { CalendarContext } from 'providers/CalendarProvider';

const CalendarHeading = ({ selectedCompany }) => {
  const { selectDate } = useContext(CalendarContext);
  const changeDate = (e) => {
    const yearArray = date.displayArrayOfYears();
    if (e.target.length === date.monthName.length) {
      date.month = date.monthName.indexOf(e.target.value);
    } else if (e.target.length === yearArray.length) {
      date.year = parseInt(e.target.value);
    }
  };

  const clickDate = () => {
    selectDate();
  };

  return (
    <>
      <Paragraph>
        Klienci/
        <span>{selectedCompany}</span>
      </Paragraph>
      <Heading>Kalendarz</Heading>
      <Wrapper as="form" onClick={(e) => e.preventDefault()}>
        <SelectMonth data-testid="Month" onChange={changeDate} />
        <SelectYear data-testid="Year" onChange={changeDate} />
        <Button onClick={clickDate}>idź</Button>
      </Wrapper>
    </>
  );
};

CalendarHeading.propTypes = {
  selectedCompany: PropTypes.string,
  clickDate: PropTypes.func,
};

export default CalendarHeading;
