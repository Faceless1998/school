import React from 'react';
import "./calendar.css";
import backgroundImage from "./../../assets/16.09.2022-2-1-2.jpg";

// Helper function to get days in a month
const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

// Helper function to get the day of the week for the 1st of the month
const getFirstDayOfMonth = (year, month) => new Date(year, month - 1, 1).getDay();

// Adjusting day index to start from Monday
const adjustDayIndex = (dayIndex) => (dayIndex === 0 ? 6 : dayIndex - 1);

// Function to get weekend dates (Saturdays and Sundays)
const getWeekendDates = (year, month) => {
  const dates = [];
  const daysInMonth = getDaysInMonth(year, month);

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 6 || dayOfWeek === 0) { // 6 is Saturday, 0 is Sunday
      dates.push({ month, day });
    }
  }

  return dates;
};

export const Calendar = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  const startYear = 2024;
  const endYear = 2025;
  const months = [
    'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი', 'იანვარი', 'თებერვალი',
    'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო'
  ];

  // Define the dates to highlight (example: { month: 9, day: 15 })
  const highlightDates = [
    // June
    { month: 6, day: 16 },
    { month: 6, day: 17 },
    { month: 6, day: 18 },
    { month: 6, day: 19 },
    { month: 6, day: 20 },
    { month: 6, day: 21 },
    { month: 6, day: 22 },
    { month: 6, day: 23 },
    { month: 6, day: 24 },
    { month: 6, day: 25 },
    { month: 6, day: 26 },
    { month: 6, day: 27 },
    { month: 6, day: 28 },
    { month: 6, day: 29 },
    { month: 6, day: 30 },
  
    // July
    { month: 7, day: 1 },
    { month: 7, day: 2 },
    { month: 7, day: 3 },
    { month: 7, day: 4 },
    { month: 7, day: 5 },
    { month: 7, day: 6 },
    { month: 7, day: 7 },
    { month: 7, day: 8 },
    { month: 7, day: 9 },
    { month: 7, day: 10 },
    { month: 7, day: 11 },
    { month: 7, day: 12 },
    { month: 7, day: 13 },
    { month: 7, day: 14 },
    { month: 7, day: 15 },
    { month: 7, day: 16 },
    { month: 7, day: 17 },
    { month: 7, day: 18 },
    { month: 7, day: 19 },
    { month: 7, day: 20 },
    { month: 7, day: 21 },
    { month: 7, day: 22 },
    { month: 7, day: 23 },
    { month: 7, day: 24 },
    { month: 7, day: 25 },
    { month: 7, day: 26 },
    { month: 7, day: 27 },
    { month: 7, day: 28 },
    { month: 7, day: 29 },
    { month: 7, day: 30 },
    { month: 7, day: 31 },
  
    // August
    { month: 8, day: 1 },
    { month: 8, day: 2 },
    { month: 8, day: 3 },
    { month: 8, day: 4 },
    { month: 8, day: 5 },
    { month: 8, day: 6 },
    { month: 8, day: 7 },
    { month: 8, day: 8 },
    { month: 8, day: 9 },
    { month: 8, day: 10 },
    { month: 8, day: 11 },
    { month: 8, day: 12 },
    { month: 8, day: 13 },
    { month: 8, day: 14 },
    { month: 8, day: 15 },
    { month: 8, day: 16 },
    { month: 8, day: 17 },
    { month: 8, day: 18 },
    { month: 8, day: 19 },
    { month: 8, day: 20 },
    { month: 8, day: 21 },
    { month: 8, day: 22 },
    { month: 8, day: 23 },
    { month: 8, day: 24 },
    { month: 8, day: 25 },
    { month: 8, day: 26 },
    { month: 8, day: 27 },
    { month: 8, day: 28 },
    { month: 8, day: 29 },
    { month: 8, day: 30 },
    { month: 8, day: 31 },
  
    // September
    { month: 9, day: 1 },
    { month: 9, day: 2 },
    { month: 9, day: 3 },
    { month: 9, day: 4 },
    { month: 9, day: 5 },
    { month: 9, day: 6 },
    { month: 9, day: 7 },
    { month: 9, day: 8 },
    { month: 9, day: 9 },
    { month: 9, day: 10 },
    { month: 9, day: 11 },
    { month: 9, day: 12 },
    { month: 9, day: 13 },
    { month: 9, day: 14 },
  ];
  
  
  // Create an array of month objects with their respective days and weeks
  const calendar = months.map((month, index) => {
    const monthIndex = (index + 8) % 12; // Adjust month index for correct year
    const year = (index + 8) < 12 ? startYear : endYear; // Determine year based on month index
    const daysInMonth = getDaysInMonth(year, monthIndex + 1);
    const firstDay = adjustDayIndex(getFirstDayOfMonth(year, monthIndex + 1));
    
    // Create an array to represent the days including the empty days at the beginning
    const days = Array.from({ length: firstDay }).fill(null).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    
    // Pad the end of the days array to ensure it fits into 7 rows
    while (days.length % 7 !== 0) {
      days.push(null);
    }
    
    // Get weekend dates for the current month
    const weekendDates = getWeekendDates(year, monthIndex + 1);

    return {
      month,
      year,
      days,
      monthIndex: monthIndex + 1, // Keep track of the month index
      weekendDates, // Add weekend dates to the month data
    };
  });

  return (
    <div className="calendar-container" style={backgroundStyle}>
      <div className="background-overlay"></div>
      <div className="calendar">
        {calendar.map(({ month, year, days, monthIndex: currentMonthIndex, weekendDates }, index) => (
          <div key={index} className="month">
            <h2>{month} {year}</h2>
            <div className="days">
              {/* Render the week headers */}
              <div className="week">
                <div className="day-header">ორშ.</div>
                <div className="day-header">სამშ.</div>
                <div className="day-header">ოთხშ.</div>
                <div className="day-header">ხუთშ.</div>
                <div className="day-header">პარ.</div>
                <div className="day-header">შაბ.</div>
                <div className="day-header">კვ.</div>
              </div>
              {/* Render the days */}
              <div className="days-grid">
                {days.map((day, dayIndex) => {
                  const isHighlighted = highlightDates.some(date => date.month === currentMonthIndex && date.day === day);
                  const isWeekend = weekendDates.some(date => date.day === day);
                  return (
                    <div
                      key={dayIndex}
                      className={`day ${day ? 'active' : 'empty'} ${isHighlighted ? 'highlight' : ''} ${isWeekend ? 'weekend' : ''}`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
