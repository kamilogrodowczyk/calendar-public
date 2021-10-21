import { useState } from 'react';
import { date } from 'data/date';

export const useConstantInfo = (initialConstant) => {
  const [constantInfo, setConstantInfo] = useState(initialConstant);

  const handleShowConstantInfo = (day, company, activeUser) => {
    const seconds = new Date().getSeconds();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const creationDay = date.date < 10 ? `0${date.date}` : `${date.date}`;
    const creationMonth = date.month + 1 < 10 ? `0${date.month + 1}` : `${date.month + 1}`;
    const creationHour = hour < 10 ? `0${hour}` : `${hour}`;
    const creationMinute = minutes < 10 ? `0${minutes}` : `${minutes}`;

    setConstantInfo({
      eventDate: `${day} ${date.remoldedMonthName[date.month]} ${date.year}`,
      formattedDateToSort: `${date.year}${date.month + 1}${day}${date.hour}${date.minutes}${seconds}`,
      creationDate: `${creationDay}.${creationMonth}.${date.year}`,
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
