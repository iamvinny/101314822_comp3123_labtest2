import {useCallback, useEffect, useState} from "react";
import {queryWeather} from "./api";

const WeatherState = ({ query }) => {
  // Const for weather conditions
  const [weatherData, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorText, setErrorText] = useState();
  const [date, setDate] = useState();

  const fetchData = useCallback(async () => {
      setIsLoading(true);
      setErrorText(false);
  
    const res = await queryWeather(query);
      setWeather(res.data);
      setDate(new Date(res.data.dt * 1000));
  }, [query]);

  useEffect(() => {
    fetchData()
      .catch(err => setErrorText(true))
      .finally(() => setIsLoading(false));

  }, [fetchData]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : errorText ? (
        <p>
          It wasn't possible to get weather information for <strong>{query}</strong> <br /><br />
          Make sure you entered a valid city name and try again.
        </p>
      ) : (
        <>
          <h2><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} /> {weatherData.name} <img src={`https://flagcdn.com/16x12/${weatherData.sys.country.toLowerCase()}.png`} /> </h2>
          <p>{date.toLocaleDateString()} @ {date.toLocaleTimeString()}</p>
          <p>Current Condition: <strong>{weatherData.weather[0].description}</strong></p>
          <p>Temperature: <strong>{weatherData.main.temp}°C</strong></p>
          <p>Humidity: <strong>{weatherData.main.humidity}%</strong></p>
          <p>Wind Speed: <strong>{weatherData.wind.speed} km/h</strong></p>
        </>
      )}
    </div>
  );  
};

export default WeatherState;