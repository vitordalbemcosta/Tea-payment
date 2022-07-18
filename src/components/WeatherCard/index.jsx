import React from "react";

import * as Styles from "./styles";

function getDateName(day) {
  return new Date(day * 1000).toLocaleDateString("en", {
    weekday: "long",
    temperature: "number",
  });
}

function WeatherCard({ isLoading, day }) {
  return (
    <>
      {isLoading ? (
        <div>
          <span>Loading temperature</span>
        </div>
      ) : (
        <Styles.Card>
          <Styles.Day>{getDateName(day.dt)}</Styles.Day>
          <Styles.Icon>{day.weather[0].description}</Styles.Icon>
          <Styles.Degrees>{day.temp.min.toFixed()}°C</Styles.Degrees>
          <Styles.SubInfo>
            <div>
              <h6>Low</h6>
              <p>{day.temp.min.toFixed(0)}</p>
            </div>
            <div>
              <h6>High</h6>
              <p>{day.temp.max.toFixed(0)}℃</p>
            </div>
          </Styles.SubInfo>
          <Styles.SubInfo>
            <div>
              <h6>Wind Speed</h6>
              <Styles.SubData>{day.wind_speed.toFixed()}mph</Styles.SubData>
            </div>
            <div>
              <h6>Humidity</h6>
              <Styles.SubData>{day.humidity}%</Styles.SubData>
            </div>
          </Styles.SubInfo>
        </Styles.Card>
      )}
    </>
  );
}

export default WeatherCard;