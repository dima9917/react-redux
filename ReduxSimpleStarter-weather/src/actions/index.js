import axios from 'axios';
const API_KEY = "e5e357c12c11eadd402b149d73aa9e84";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    console.log(url);
    const request = axios.get(url);

    console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
