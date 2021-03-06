import React, {useState} from "react";
import WeatherForecast from "./weatherForecast";
import RealDate from "./realDate";
import WeatherIcon from "./WeatherIcon";

import axios from "axios";
import "./App.css";


export default function Weather(props) {
  const[weatherData, setWeatherData]= useState({ready:false});
   const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
  console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city:response.data.name,
      humidity:response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
       icon:response.data.weather[0].icon,
       feelsLike:Math.round(response.data.main.feels_like),
       minTemp: Math.round(response.data.main.temp_min),
       maxTemp: Math.round(response.data.main.temp_max),
       
    });
  }
   function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "4ec5e5e21627cfcd9a86ed3b52c8e759";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (!weatherData.ready) {
  const apiKey = "4ec5e5e21627cfcd9a86ed3b52c8e759";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
  
return <div>Loading...</div>;

  } else {

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="search col-6">
            <form id="search-engine" autoComplete="off" onSubmit={handleSubmit}>
              <input id="city-input" type="text" onChange={handleCityChange} />
              <label htmlFor="city-input">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-search"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                </svg>
              </label>
            </form>
          </div>
         
        </div>

        <div className="row">
          <div className="col-12 city">
            <h1>{weatherData.city}</h1>
          </div>
        </div>

        <div className="detail row">
          <div className="col-6 main-temp">
            <h2>
              {weatherData.temperature}°
             
              
              </h2>
            
                         
          </div>
          <div className="col-6 main-icon">
             
            <WeatherIcon code={weatherData.icon}/> 
            
           
            </div>
         
        </div>
        <div className="row">
          <div className="col-12 infoData">
            <p id="date-real"><RealDate date={weatherData.date}/>
            </p>
            <p>
              <span className="feels">{weatherData.description}</span>
              </p>
              
              <p>
                <span className="feels-like">Feels Like {weatherData.feelsLike}</span>
              </p>
              </div>
              </div>
              <div className= "row">
                <div className="col-4">
              <p>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/219/219816.svg"
                width="30%" alt=""
              /> 
              <br />
              <br />
            
              <span className="humidity">{weatherData.humidity}</span> %
            </p>
            
          </div>
          <div className="col-4">
            <p>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2316/2316581.svg"
                width="30%" alt=""
              />
              <br />
              <br />
              <br />

            <span className="min-temp weather-value ">{weatherData.minTemp}</span>°
              <span className="weather-unit">C</span>-
              <span className="max-temp weather-value">{weatherData.maxTemp}</span>°
              <span className="weather-unit">C</span>
            </p>
          </div>
          <div className="col-4">
            <p>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/481/481476.svg"
                width="30%" alt=""
              />
               <br />
              <br />
              <br />
              <span className="wind">{weatherData.wind} </span>m/s
            </p>
          </div>
          </div>
          
       
        <WeatherForecast city={weatherData.city} />
          <footer>
            <a href="https://github.com/Izza-aadil/My-cool-app">
              {" "}
              Open-source Code{" "}
            </a>{" "}
            by Izza Aadil
          </footer>{" "}
        </div>
      </div>
    
  );
  
}
  }