import "../css/Result.css";
import { FaLocationDot } from "react-icons/fa6";
import clearNight from "../assets/clear-night.png";
import clearDay from "../assets/clear-day.png";
import cloud from "../assets/cloud.png";
import fewCloudDay from "../assets/few-cloud-day.png";
import fewCloudNight from "../assets/few-cloud-night.png";
import heavyRain from "../assets/heavy-rain.png";
import mist from "../assets/mist.png";
import rainNight from "../assets/rain-night.png";
import rainDay from "../assets/rain-day.png";
import thunderstorm from "../assets/thunderstorm.png";
import snow from "../assets/snow.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
function Result({ searchResult }) {
  if (!searchResult || !searchResult.main || !searchResult.weather) {
    return null;
  }
  const allIcons = {
    "01d": clearDay,
    "02d": fewCloudDay,
    "03d": cloud,
    "04d": cloud,
    "09d": heavyRain,
    "10d": rainDay,
    "11d": thunderstorm,
    "13d": snow,
    "50d": mist,
    "01n": clearNight,
    "02n": fewCloudNight,
    "03n": cloud,
    "04n": cloud,
    "09n": heavyRain,
    "10n": rainNight,
    "11n": thunderstorm,
    "13n": snow,
    "50n": mist,
  };

  //Fetch day,date
  const unixTimestamp = searchResult.dt;
  const date = new Date(unixTimestamp * 1000);
  const options = { weekday: "long", day: "numeric", month: "long" };
  const readableDate = date.toLocaleDateString("en-US", options);

  //Fetch city name
  const cityName = searchResult.name;

  //Fetch temperature,description,iconCode
  const temp = Math.round(searchResult.main.temp);
  const description = searchResult.weather[0].description;
  const icon = allIcons[searchResult.weather[0].icon];
  const humidityData = searchResult.main.humidity;

  //fetch wind speed and convert to km/h
  const windSpeedinms = searchResult.wind.speed;
  const windSpeedinkmh = (windSpeedinms * 3.6).toFixed(1);

  return (
    <>
      <div className="place-time">
        <div className="city">
          <div className="city-icon">
            <FaLocationDot />
          </div>
          <div className="place">{cityName}</div>
        </div>
        <div className="time">{readableDate}</div>
      </div>

      <div className="result-area-main">
        <div className="weather-icon">
          <img src={icon} alt="icon"></img>
        </div>
        <div className="weather-data">
          <div className="weather-degree">{temp}°C</div>
          <div className="weather-description">{description}</div>
        </div>
      </div>

      <div className="humidity-wind-info">
        <div className="humidity">
          <div className="humidity-img">
            <img src={humidity} alt=""></img>
          </div>
          <div className="humidity-data">
            <div className="humidity-percent">{humidityData}%</div>
            <div className="humidity-word">Humidity</div>
          </div>
        </div>
        <div className="wind">
          <div className="wind-img">
            <img src={wind}></img>
          </div>
          <div className="wind-data">
            <div className="wind-km">{windSpeedinkmh}km/h</div>
            <div className="wind-word">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Result;
