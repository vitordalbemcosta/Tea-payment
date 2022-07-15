import axios from "axios";


export const getWeather = async (lat, lon) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,current&appid=${process.env.REACT_APP_API_KEY}`
    );

    return response;
}


