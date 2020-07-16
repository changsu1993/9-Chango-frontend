import React, { useState, useEffect } from 'react';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import hireCustomLocale from './hireCustomLocale';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const HireFormDates = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className='date-picker'>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        minimumDate={utils().getToday()}
        locale={hireCustomLocale}
        shouldHighlightWeekends
      />
    </div>
  );
};

export default HireFormDates;
