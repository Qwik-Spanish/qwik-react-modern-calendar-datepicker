/** @jsxImportSource react */
import { QRL } from "@builder.io/qwik";
import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";

interface DayItem {
  year: number;
  month: number;
  day: number;
}

interface MultipleSelectionsProp {
  selections: Array<DayItem>;
  setSelectedDayRange: QRL<(daySelections: Array<DayItem>) => void>;
}

export const CalendarReactMultiplePicker = (props: MultipleSelectionsProp) => {


  const { selections, setSelectedDayRange: selectMultipleDays } = props;

  const changeValue = (value: DayItem[]) => {
    console.log("change", value);
    // To set value in component to view in app
    setSelectedDayRange(value);
    // update qwik route component principal info
    selectMultipleDays(value);
  };

  const [selectedDayRange, setSelectedDayRange] = useState(selections);
  return (
    <>
      <Calendar
        value={selectedDayRange}
        onChange={(value) => changeValue(value)}
        shouldHighlightWeekends
      />
      <ul>
        {selectedDayRange &&
          selectedDayRange.map((selectedDay, index) => {
            return (
              <li key={index + "_multiple"}>
                {selectedDay.day.toString().padStart(2, "0")}/
                {selectedDay.month.toString().padStart(2, "0")}/
                {selectedDay.year}
              </li>
            );
          })}
      </ul>
    </>
  );
};
