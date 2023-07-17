import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherContainer, Temp, City } from "./WeatherStyles";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=lucknow&units=imperial&appid=aa9f4ee13fab0d1a984828b4e5360656";

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
      <City>Lucknow, India</City>
    </WeatherContainer>
  );
};

export default Weather;
