import React from "react";
import { DateContaioner } from "./DateStyles";

const DateToday = () => {
  let today = new Date();
  //   console.log(today);
  let date =
    today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();

  return (
    <DateContaioner>
      <p>{date}</p>
    </DateContaioner>
  );
};

export default DateToday;
