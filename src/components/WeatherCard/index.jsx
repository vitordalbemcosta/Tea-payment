import React from "react";

import * as Styles from "./styles";
import { LoadingOutlined } from "@ant-design/icons";

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
          {" "}
          <LoadingOutlined
            style={{
              fontSize: 150,
            }}
          />
        </div>
      ) : (
        <Styles.Card>
          <Styles.Day>{getDateName(day.dt)}</Styles.Day>
          <Styles.Degrees>{Math.ceil(day.temp.min.toFixed())}°C</Styles.Degrees>
          <Styles.Icon>{day.weather[0].description}</Styles.Icon>
          <Styles.SubInfo>
            <div>
              <Styles.SubInfo>Low</Styles.SubInfo>
              <Styles.SubData>{day.temp.min.toFixed(0)}℃</Styles.SubData>
            </div>
            <div>
              <Styles.SubInfo>High</Styles.SubInfo>
              <Styles.SubData>{day.temp.max.toFixed(0)}℃</Styles.SubData>
            </div>
          </Styles.SubInfo>
          <Styles.SubInfo>
            <div>
              <Styles.SubInfoTwo>Wind Speed</Styles.SubInfoTwo>
              <Styles.SubData>{day.wind_speed.toFixed()}</Styles.SubData>
            </div>
            <div>
              <Styles.SubInfo>Humidity</Styles.SubInfo>
              <Styles.SubData>{day.humidity}%</Styles.SubData>
            </div>
          </Styles.SubInfo>
        </Styles.Card>
      )}
    </>
  );
}

export default WeatherCard;
