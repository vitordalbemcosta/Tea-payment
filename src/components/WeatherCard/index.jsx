import React from 'react'

import * as Styles from "./styles";

function WeatherCard() {
  return (
    <Styles.Card>
      <Styles.Day>Monday</Styles.Day>
      <Styles.Icon>Icon</Styles.Icon>
      <Styles.Degrees>25c</Styles.Degrees>
      <Styles.SubInfo>
        <div>
          <p>min</p>
          <p>22</p>
        </div>
        <div>
          <p>max</p>
          <p>27</p>
        </div>
      </Styles.SubInfo>
       
      <Styles.SubInfo>
        <div>
          <p>wind speed</p>
          <p>5</p>
        </div>
        <div>
          <p>wind dir</p>
          <p>SW</p>
        </div>
      </Styles.SubInfo>
    </Styles.Card>
  );
}

export default WeatherCard;