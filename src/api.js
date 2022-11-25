import axios from 'axios'; // required to query the weather API

// If query is undefined, then the default value is set to 'Toronto'
const queryWeather = async (query = 'Toronto') => {

    // Make a request using axios to the OpenWeatherMap API
    const data = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=23caf59a438de59d16d366601b1a9918&units=metric`
    );

    return data;
};

export { queryWeather };