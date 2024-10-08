import { SHOW_CITIES } from './actionTypes';
import { getWeather } from './weather.gateway';

export const setCitiesWeatherDataList = cities => {
  return {
    type: SHOW_CITIES,
    payload: { cities },
  };
};

export const getWeatherData = () => dispatch => {
  getWeather().then(cities => dispatch(setCitiesWeatherDataList(cities)));
};
