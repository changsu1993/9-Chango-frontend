const hireCustomLocale = {
  months: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  weekDays: [
    {
      name: '일요일',
      short: '일',
      isWeekend: true,
    },
    {
      name: '월요일',
      short: '월',
    },
    {
      name: '화요일',
      short: '화',
    },
    {
      name: '수요일',
      short: '수',
    },
    {
      name: '목요일',
      short: '목',
    },
    {
      name: '금요일',
      short: '금',
    },
    {
      name: '토요일',
      short: '토',
      isWeekend: true,
    },
  ],
  weekStartingIndex: 0,

  getToday(gregorainTodayObject) {
    return gregorainTodayObject;
  },
  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  },
  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate();
  },
  transformDigit(digit) {
    return digit;
  },

  nextMonth: 'Next Month',
  previousMonth: 'Previous Month',
  openMonthSelector: 'Open Month Selector',
  openYearSelector: 'Open Year Selector',
  closeMonthSelector: 'Close Month Selector',
  closeYearSelector: 'Close Year Selector',
  defaultPlaceholder: 'Select...',

  from: 'from',
  to: 'to',

  digitSeparator: ',',

  yearLetterSkip: 0,

  isRtl: false,
};

export default hireCustomLocale;
