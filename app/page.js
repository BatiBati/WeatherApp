"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { ActiveIcon } from "./assets/Location-icon";

export default function Home() {
  const [location, setLocation] = useState("Ulaanbaatar");
  const [searchLocation, setSearchLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8435428071ee475ca3373725252502&q=${location}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  }, [location]);

  useEffect(() => {
    if (searchLocation.length > 2) {
      fetch("https://countriesnow.space/api/v0.1/countries")
        .then((res) => res.json())
        .then((data) => {
          const cityList = data.data.flatMap((country) => country.cities);
          const filteredCities = cityList.filter((city) =>
            city.toLowerCase().includes(searchLocation.toLowerCase())
          );
          setSuggestions(filteredCities);
        })
        .catch((err) => console.error(err));
    } else {
      setSuggestions([]);
    }
  }, [searchLocation]);

  const handleSelectLocation = (selectedLocation) => {
    setLocation(selectedLocation);
    setSearchLocation("");
    setSuggestions([]);
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <input
          className={styles.input}
          type="text"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          placeholder="Search"
        />
        {suggestions.length > 0 && (
          <div className={styles.suggestions}>
            {suggestions.map((city, index) => (
              <div
                key={index}
                className={styles.suggestionItem}
                onClick={() => handleSelectLocation(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}
        <img src="/Images/Light-Left.png" alt="Light Left" />
        <img src="/Images/Dark-right.png" alt="Dark Right" />

        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}

        {data && (
          <>
            <div className={styles.box}>
              <div>{currentDate}</div>
              <div className={styles.location}>
                <div>{location}</div>
                <img src="/Images/localization_icon.jpg" alt="Location Icon" />
              </div>
              <img src="/Images/sun.png" alt="Weather Icon" />
              <div className={styles.temp}>{data.current.temp_c}°C</div>
              <div className={styles.condition}>{data.current.condition.text}</div>
              <div className={styles.buttons}>
                <img src="/Images/Home.png" alt="Home" />
                <img src="/Images/Pin.png" alt="Pin" />
                <img src="/Images/Heart.png" alt="Heart" />
                <img src="/Images/User.png" alt="User" />
              </div>
            </div>

            <div className={styles.box1}>
              <div>{currentDate}</div>
              <div className={styles.location1}>
                <div>{location}</div>
                <ActiveIcon />
              </div>
              <img src="/Images/moon.png" alt="Weather Icon" />
              <div className={styles.temp1}>{data.current.temp_c}°C</div>
              <div className={styles.condition1}>{data.current.condition.text}</div>
              <div className={styles.buttons}>
                <img src="/Images/Home.png" alt="Home" />
                <img src="/Images/Pin.png" alt="Pin" />
                <img src="/Images/Heart.png" alt="Heart" />
                <img src="/Images/User.png" alt="User" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
