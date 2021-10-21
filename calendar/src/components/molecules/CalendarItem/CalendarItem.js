import React from 'react';
import PropTypes from 'prop-types';
import PastDays from 'components/atoms/PastDays/PastDays';
import NextDays from 'components/atoms/NextDays/NextDays';
import RecentDays from 'components/atoms/RecentDays/RecentDays';

const CalendarItem = () => {
  return (
    <>
      <PastDays />
      <RecentDays />
      <NextDays />
    </>
  );
};

CalendarItem.propTypes = {
  dayEvent: PropTypes.func,
  handleAddEvent: PropTypes.func,
};

export default CalendarItem;
