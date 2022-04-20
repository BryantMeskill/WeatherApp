import React, { useEffect } from "react";
const Main = ({ city, desc, temp, feelsLike, humidity }) => {
  useEffect(() => {
    const img = document.querySelector("img");
    if (desc.includes("CLEAR")) {
      document.body.style.backgroundColor = "#48b4e0";
      document.body.style.transition = "1s";
      img.src = "http://openweathermap.org/img/wn/01d@2x.png";
    } else if (desc.includes("CLOUD")) {
      document.body.style.backgroundColor = "#818681";
      document.body.style.transition = "1s";
      img.src = "http://openweathermap.org/img/wn/03d@2x.png";
      img.style.transition = "1s";
    } else {
      img.src = "http://openweathermap.org/img/wn/02d@2x.png";
    }
  });

  return (
    <div className="section hidden">
      <div className="subsection">
        <span>{city}</span>
      </div>
      <div className="subsection">
        <img className="img" alt="Current weather conditions"></img>
        <span className="temp">{temp}°</span>
      </div>
      <div className="subsection">
        <span>{desc}</span>
      </div>
      <div className="subsection">
        <label htmlFor="feelsLike">Feels Like:</label>
        <span className="feelsLike">{feelsLike}°</span>
        <label htmlFor="humidity">Humidity:</label>
        <span className="humidity">{humidity}%</span>
      </div>
    </div>
  );
};

export default Main;
