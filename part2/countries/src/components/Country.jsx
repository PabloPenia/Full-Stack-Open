import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    const params = {
      access_key: api_key,
      query: country,
    }
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then(response => setWeather(response.data))
      .catch(error => console.log(error))
  }, [country])
  return (
    <div>
      {weather.hasOwnProperty('location') ? (
        <>
          <h2>Weather in {weather.location.name}</h2>
          <h3>{weather.current.weather_descriptions[0]}</h3>
          <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} />
          <ul>
            <li>
              <strong>Temperature:</strong> {weather.current.temperature}
            </li>
            <li>
              <strong>Wind:</strong> {weather.current.wind_speed}
            </li>
          </ul>
        </>
      ) : (
        <h3>Loading weather data, please wait...</h3>
      )}
    </div>
  )
}
const Country = ({ data }) => {
  return (
    <>
      <h1>{data.name.common}</h1>
      <p>
        <strong>Capital:</strong> {data.capital[0]}
      </p>
      <p>
        <strong>Population:</strong> {data.population}
      </p>
      <h2>Language</h2>
      <ul>
        {Object.values(data.languages).map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <img style={{ maxWidth: '400px' }} src={data.flags.svg} alt={`${data.name.common} flag`} />
      <Weather country={data.name.common} />
    </>
  )
}

export default Country
