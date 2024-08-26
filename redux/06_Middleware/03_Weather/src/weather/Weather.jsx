import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { citiesListSelector } from './weather.selectors';
import { getWeatherData } from './weather.actions';

const Weather = ({ citiesList, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {citiesList.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    citiesList: citiesListSelector(state),
  };
};

const mapDispatch = {
  getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
