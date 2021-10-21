export const date = {
  seconds: new Date().getSeconds(),
  hour: new Date().getHours(),
  minutes: new Date().getMinutes(),
  date: new Date().getDate(),
  day: new Date().getDay(),
  days: ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'],
  month: new Date().getMonth(),
  monthName: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
  remoldedMonthName: [
    'stycznia',
    'lutego',
    'marca',
    'kwietnia',
    'maja',
    'czerwca',
    'lipca',
    'sierpnia',
    'września',
    'pażdziernika',
    'listopada',
    'grudnia',
  ],
  year: new Date().getFullYear(),

  displayDay(year, month) {
    if (new Date(year, month, 1).getDay() === 0) {
      return 7;
    }
    return new Date(year, month, 1).getDay();
  },
  displayNumberOfDays(month) {
    const arr = [];
    const displayDays = [...Array(32 - new Date(this.year, month, 32).getDate())];
    displayDays.forEach((el, i) => {
      el = i + 1;
      arr.push(el);
    });

    return arr;
  },
  displayArrayOfYears() {
    const arrayOfYears = [];
    const todayYear = new Date().getFullYear();
    const pastYears = todayYear - 2;
    const nextYears = todayYear + 3;

    for (let i = pastYears; i <= nextYears; i++) {
      arrayOfYears.push(i);
    }
    return arrayOfYears;
  },
};
