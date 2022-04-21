import React, { useState, useEffect } from "react";
const Main = ({ isLoading, city, desc, temp, feelsLike, humidity }) => {
  const [imgChange, setImgChange] = useState(
    "http://openweathermap.org/img/wn/02d@2x.png"
  );

  useEffect(() => {
    if (desc.includes("CLEAR")) {
      document.body.style.backgroundColor = "#48b4e0";
      setImgChange("http://openweathermap.org/img/wn/01d@2x.png");
    } else if (desc.includes("CLOUD")) {
      document.body.style.backgroundColor = "#9d9fa1";
      setImgChange("http://openweathermap.org/img/wn/03d@2x.png");
    } else if (desc.includes("RAIN") || desc.includes("DRIZZLE")) {
      document.body.style.backgroundColor = "#737475";
      setImgChange("http://openweathermap.org/img/wn/09d@2x.png");
    } else if (desc.includes("THUNDER")) {
      document.body.style.backgroundColor = "#4b4c4d";
      setImgChange("http://openweathermap.org/img/wn/11d@2x.png");
    } else if (desc.includes("SNOW")) {
      document.body.style.backgroundColor = "#95a9bd";
      setImgChange("http://openweathermap.org/img/wn/13d@2x.png");
    }
  }, [desc]);

  return (
    <div className={`section ${isLoading ? "hidden" : ""}`}>
      <div className="subsection">
        <span>{city}</span>
      </div>
      <div className="subsection">
        <img
          className="img"
          src={imgChange}
          alt="Current weather conditions"
        ></img>
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
