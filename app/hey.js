"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { LightCard } from "@/components/LightCard";
// import { DarkCard } from "@/components/DarkCard";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("Kraków");
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "8435428071ee475ca3373725252502";
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [location]);

  const handleSearch = () => {
    setLocation(searchLocation);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="/Images/Light-Left.png" alt="Light Background" />
        <img src="/Images/Dark-right.png" alt="Dark Background" />
        <div className={styles.box}>
          <div>February 27, 2025</div>
          <div className={styles.location}>
            <input
              className={styles.input}
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Enter location"
            />
            <button className={styles.button} onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className={styles.location}>
            <div>{location}</div>
            <img src="/Images/localization_icon.png" alt="Location Icon" />
          </div>
          {weatherData && (
            <>
              <img src="/Images/sun.png" alt="Weather Icon" />
              <div className={styles.temp}>{weatherData.current.temp_c}°C</div>
              <div>{weatherData.current.condition.text}</div>
            </>
          )}
          {/* <div>
            <LightCard />
          </div>
          <div>
            <DarkCard />
          </div> */}
        </div>
      </div>
    </div>
  );
}
