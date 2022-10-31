import React from "react";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

const DateRange = () => {
  return (
    <DatePicker
      options={{
        backgroundColor: '#F3F4F6',
      }}
      selected={getFormatedDate(new Date(), "jYYYY/jMM/jDD")}
    />
  );
};

export default DateRange;
