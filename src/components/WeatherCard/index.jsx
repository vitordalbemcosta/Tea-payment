import React from 'react'

import * as Styles from "./styles";

function WeatherCard(props) {
  const weatherData = [];
  weatherData.push(props);
  console.log("card", weatherData[0].apiData)

  return (
    <>
      { props && weatherData.map((data) => (
          <>
            <Styles.Card>
              <Styles.Day>Monday</Styles.Day>
              <Styles.Icon>Icon</Styles.Icon>
            <Styles.Degrees> {data[0]} </Styles.Degrees>
              <Styles.SubInfo>
                <div>
                  <h6>min</h6>
                  <p>22</p>
                </div>
                <div>
                  <h6>max</h6>
                  <p>27</p>
                </div>
              </Styles.SubInfo>
              <Styles.SubInfo>
                <div>
                  <h6>wind speed</h6>
                  <Styles.SubData>5</Styles.SubData>
                </div>
                <div>
                  <h6>wind dir</h6>
                  <Styles.SubData>SW</Styles.SubData>
                </div>
              </Styles.SubInfo>
            </Styles.Card>
          </>
        ))}
    </>
  );
}

export default WeatherCard;