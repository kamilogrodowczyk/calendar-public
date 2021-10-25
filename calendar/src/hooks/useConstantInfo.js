import { useState } from 'react';
import { date } from 'data/date';

export const useConstantInfo = (initialConstant) => {
  const [constantInfo, setConstantInfo] = useState(initialConstant);

  const handleShowConstantInfo = (day, company, activeUser) => {
    const seconds = new Date().getSeconds();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const creationDay = date.date < 10 ? `0${date.date}` : `${date.date}`;
    const creationMonth = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;
    const creationYear = year;
    const creationHour = hour < 10 ? `0${hour}` : `${hour}`;
    const creationMinute = minutes < 10 ? `0${minutes}` : `${minutes}`;

    setConstantInfo({
      eventDate: `${day} ${date.remoldedMonthName[date.month]} ${date.year}`,
      formattedDateToSort: `${date.year}${date.month + 1}${day}${date.hour}${date.minutes}${seconds}`,
      creationDate: `${creationDay}.${creationMonth}.${creationYear}`,
      creationHour: `${creationHour}:${creationMinute}`,
      company,
      day,
      activeUser,
    });
  };

  const clearConstant = () => {
    setConstantInfo(initialConstant);
  };

  return {
    constantInfo,
    handleShowConstantInfo,
    clearConstant,
  };
};
