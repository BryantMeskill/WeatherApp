import React, { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "./styles/App.css";

function App() {
  const [isLoading, setIsLoading] = useState("true");
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState({
    city: "",
    desc: "",
    temp: "",
    feelsLike: "",
    humidity: "",
  });

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    setUserInput("");

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        userInput +
        "&APPID=2f304bcc028a1819d94ab0d17d357ed3&units=imperial",
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setIsLoading(false);
        setWeatherData({
          city: response.name,
          desc: response.weather[0].description.toUpperCase(),
          temp: Number.parseFloat(response.main.temp).toFixed(0),
          feelsLike: Number.parseFloat(response.main.feels_like).toFixed(0),
          humidity: response.main.humidity,
        });
      })
      .catch(function (err) {
        alert("Please enter a different zipcode or try again.");
      });
  };

  return (
    <div className="container">
      <Header />
      <form className="inputForm">
        <input
          name="userInput"
          className="userInput"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="weatherBtn" onClick={handleClick}>
          ✔️
        </button>
      </form>
      <Main
        isLoading={isLoading}
        city={weatherData.city}
        desc={weatherData.desc}
        temp={weatherData.temp}
        feelsLike={weatherData.feelsLike}
        humidity={weatherData.humidity}
      />
      <Footer />
    </div>
  );
}

export default App;
