import React, { useState, useEffect } from "react";

//API call
import { getWeatherData } from "./services";

//components
import CityButton from "./components/CityButton";
import WeatherCard from "./components/WeatherCard";

//styles
import * as Styles from "./styles";


const cities2 = [
  { name: "Porto Alegre", lat: 30.03, lon: -51.2 },
  { name: "London", lat: 51.5, lon: 0.12 },
  { name: "Dublin", lat: 53.34, lon: 6.26 },
  { name: "São Paulo", lat: 23.55, lon: -46.63 },
  { name: "Minneapolis", lat: 44.97, lon: -93.26 },
  { name: "Tokyo", lat: 35.67, lon: 139.65 }
];

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  async function handleGetWeather() {
    setIsLoading(true);
  

    try {
      const response = await getWeatherData(selectedCity.lat, selectedCity.lon);
      setWeatherData(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setSelectedCity(cities2[0]);
  }, []);

  useEffect(() => {
    if (selectedCity) {
      handleGetWeather();
    }
  }, [selectedCity]);

  return (
    <div className="app">
      <Styles.CityButtonsWrapper>
        {cities2.map((city) => (
          <CityButton
            city={city}
            key={city.name}
            isSelected={city.name === selectedCity?.name}
            onClick={setSelectedCity}
          />
        ))}
      </Styles.CityButtonsWrapper>
      <Styles.CityWeatherWrapper>
        {weatherData?.daily.map((day, index) => (
          <>
            {index <= 5 && (
              <WeatherCard day={day} key={day.dt} isLoading={isLoading}/>
            )}
          </>
        ))}
      </Styles.CityWeatherWrapper>
    </div>
  );
}

export default App;