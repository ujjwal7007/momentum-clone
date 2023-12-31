import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Welcome, TimeStamp, Greeting } from "./TimeStyles";

const Time = () => {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 12) {
      return "Good Morning, Clint.";
    } else if (today.getHours() >= 12 && today.getHours() < 18) {
      return "Good Afternoon, Clint.";
    } else if (today.getHours() >= 18 && today.getHours() < 24) {
      return "Good Evening, Clint";
    } else {
      return "What are you doing up at this hour?";
    }
  };

  return (
    <Welcome>
      <TimeStamp>
        <Moment format="LT"></Moment>
      </TimeStamp>
      <Greeting>{greeting()}</Greeting>
    </Welcome>
  );
};

export default Time;
