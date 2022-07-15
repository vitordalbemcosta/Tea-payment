import axios from "axios";


// nao estou conseguindo fazer a api funcionar
// nao esquecer de esconder a key da api no .env

export const getWeather = async (name) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=336ce4dce3a588920b3cea8fb00882d6`
    );

    return response;
}