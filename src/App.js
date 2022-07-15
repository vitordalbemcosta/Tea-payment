import React, {useState} from 'react'
// import axios from 'axios'

//API call
import { getWeather } from './services'

//components
import CityButton from './components/CityButton'
import WeatherCard from './components/WeatherCard'

//styles
import * as Styles from './styles'
import './App.css'


const cities = ["Porto Alegre", "London", "Dublin", "São Paulo", "Minneapolis", "Tokyo"];



function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  

  const handleSelectCity = async (lat, lon) => {
    setSelectedCity(lat, lon);

    try {
      const response = await getWeather(lat, lon);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className='app'>
      <Styles.CityButtonsWrapper>
        {cities.map((city) => (
          <CityButton cityName={city}
            key={city}
            isSelected={selectedCity === city}
            onClick={handleSelectCity}
          />
        ))}
      </Styles.CityButtonsWrapper>
      <Styles.CityWeatherWrapper>
        <WeatherCard />
        <WeatherCard />
      </Styles.CityWeatherWrapper>
    </div>
  );
}

export default App;
