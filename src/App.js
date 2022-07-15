import React, {useState, useEffect} from 'react'
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

function App() {
  const [selectedCity, setSelectedCity] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [apiData, setApiData] = useState(null)



  const getWeather = async (lat, lon) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,current&appid=4293699b076587b03d0a2c106adc7a47`
    );
    setApiData(response.data)
    return apiData;
    
  };

  useEffect(() => {
    CityLatLon();
  });


  const handleSelectCity = async (cityName) => {
    setSelectedCity(cityName);
    console.log(cityName);
  

    try {
      const response = await getWeather(lat, lon);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

   function CityLatLon() {
    if (selectedCity === "Porto Alegre") {
      setLat(30.03);
      setLon(-51.20);
  } else if (selectedCity === "London") {
      setLat(51.50);
      setLon(0.12);
    } else if (selectedCity === "Dublin") {
      setLat(53.34);
      setLon(6.26);
    } else if (selectedCity === "São Paulo") {
      setLat(23.55);
      setLon(-46.63);
    } else if (selectedCity === "Minneapolis") {
      setLat(44.97);
      setLon(-93.26);
    } else if (selectedCity === "Tokyo") {
      setLat(35.67);
      setLon(139.65);
    }
  }

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
