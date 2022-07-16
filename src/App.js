import React, { useState } from 'react'
import axios from 'axios'

//API call
// import { getWeather } from './services'

//components
import CityButton from './components/CityButton'
import WeatherCard from './components/WeatherCard'

//styles
import * as Styles from './styles'
import './App.css'



const cities = ["Porto Alegre", "London", "Dublin", "São Paulo", "Minneapolis", "Tokyo"];
const latitude = [30.03, 51.50, 53.34, 23.55, 44.97, 35.67];
const longitude = [-51.20, 0.12, 6.26, -46.63, -93.26, 139.65];

function App() {
  const [selectedCity, setSelectedCity] = useState([]);
  const [lat, setLat] = useState(0.0);
  const [lon, setLon] = useState(0.0);
  const [apiData, setApiData] = useState(null)






  const getWeatherData = async (lat, lon) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,current&appid=642eb8987cff2f095c8e9b551e968f83`
    );
    setApiData(response.data)
    return apiData;
    
  };


  const handleSelectCity = async (selectedCity) => {
    const index = cities.indexOf(selectedCity)
    console.log(selectedCity)
   

    try {
      setLat(latitude[index]);
      setLon(longitude[index]);
      const response = await getWeatherData(lat, lon);
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
        <WeatherCard apiData = {apiData} />
        
      </Styles.CityWeatherWrapper>
    </div>
  );
}

export default App;
