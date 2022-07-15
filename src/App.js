import React, {useState} from 'react'
// import axios from 'axios'

//API call
import { getWeather } from './services'

//components
import CityButton from './components/CityButton'
import WeatherCard from './components/WeatherCard'

//styles
import * as Styles from './styles'


const cities = ["Porto Alegre", "Dublin", "São Paulo", "Minneapolis", "Tokyo"]



function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = async (name) => {
    setSelectedCity(name);

    try {
      const response = await getWeather(name);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Styles.CityButtonsWrapper>
        {cities.map((city) => (
          <CityButton cityName={city}
            key={city}
            isSelected={selectedCity === city}
            onClick={handleSelectCity}
          />
        ))};
      </Styles.CityButtonsWrapper>
      <Styles.CityWeatherWrapper>
        <WeatherCard />
        <WeatherCard />
      </Styles.CityWeatherWrapper>
    </>
  );
}

export default App;
