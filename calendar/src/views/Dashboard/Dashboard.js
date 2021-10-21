import React from 'react';
import Calendar from 'components/organisms/Calendar/Calendar';
import Leftbar from 'components/organisms/Leftbar/Leftbar';
import Rightbar from 'components/organisms/Rightbar/Rightbar';
import CalendarProvider from 'providers/CalendarProvider';
import MainWrapper from 'components/templates/MainTemplate';

const Dashboard = () => {
  return (
    <CalendarProvider>
      <MainWrapper>
        <Leftbar />
        <Calendar />
        <Rightbar />
      </MainWrapper>
    </CalendarProvider>
  );
};

export default Dashboard;
