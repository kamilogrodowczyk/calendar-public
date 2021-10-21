const showDaysInMonth = (days, arr) => {
  days.forEach((el, i) => {
    el = i + 1;
    arr.push(el);
  });
};

export const addPastDays = (date, year, month) => {
  const arr = [];
  const slicePastDays = date.displayDay(year, month) - 1;
  const numbersOfPastDays = date.displayNumberOfDays(month - 1);
  showDaysInMonth(numbersOfPastDays, arr);
  const lastDaysOfPastMonth = slicePastDays === 0 ? arr.slice(-7) : arr.slice(-slicePastDays);
  return lastDaysOfPastMonth;
};

export const addNextDays = (date, year, month) => {
  const arr = [];
  const sliceNextDays = 8 - date.displayDay(year, month + 1);
  const numbersOfNextDays = date.displayNumberOfDays(month + 1);
  showDaysInMonth(numbersOfNextDays, arr);
  const lastDaysOfNextMonth = arr.slice(0, sliceNextDays);
  return lastDaysOfNextMonth;
};
