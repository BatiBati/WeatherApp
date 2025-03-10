"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { ActiveIcon } from "./assets/Location-icon";

export default function Home() {
  const [location, setLocation] = useState("Ulaanbaatar");
  const [searchLocation, setSearchLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8435428071ee475ca3373725252502&q=${location}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [location]);

  useEffect(() => {
    if (searchLocation.length > 1) {
      fetch("https://countriesnow.space/api/v0.1/countries")
        .then((res) => res.json())
        .then((data) => {
          const countryList = data.data;
          let matchedResults = [];
  
          countryList.forEach(({ country, cities }) => {
            const isCountryMatch = country.toLowerCase().includes(searchLocation.toLowerCase());
          
            cities.forEach(city => {
              const isCityMatch = city.toLowerCase().includes(searchLocation.toLowerCase());
          
              
              if (isCountryMatch) {
                matchedResults.push({ city, country });
              }
              
              
              if (isCityMatch) {
                matchedResults.push({ city, country });
              }
            });
          });
  
          setSuggestions(matchedResults);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchLocation]);
  

  const handleSelectLocation = (selectedLocation) => {
    setLocation(`${selectedLocation.city}, ${selectedLocation.country}`);
    setSearchLocation(""); 
    setSuggestions([]); 
  };
  

  const currentDate = new Date().toLocaleDateString("EN-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.inputField}>
          <img src="Images/search (1).png" />
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Search"
            className={styles.input}
          />
        </div>

        {suggestions.length > 0 && (
          <div className={styles.suggestions}>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={styles.suggestionItem}
                onClick={() => handleSelectLocation(suggestion)}
              >
                <img src="/Images/room.png" />
                {suggestion.city}, {suggestion.country}
              </div>
            ))}
          </div>
        )}
        <img src="/Images/Light-Left.png" />
        <img src="/Images/Dark-right.png" />

        {data && (
          <div>
            <div className={styles.box}>
              <div>{currentDate}</div>
              <div className={styles.location}>
                <div>{location}</div>
                <img src="/Images/localization_icon.jpg" />
              </div>
              <img src="/Images/sun.png" />
              <div className={styles.temp}>{data.current.temp_c}°C</div>
              <div className={styles.condition}>
                {data.current.condition.text}
              </div>
              <div className={styles.buttons}>
                <img src="/Images/Home.png" />
                <img src="/Images/Pin.png" />
                <img src="/Images/Heart.png" />
                <img src="/Images/User.png" />
              </div>
            </div>

            <div className={styles.box1}>
              <div>{currentDate}</div>
              <div className={styles.location1}>
                <div>{location}</div>
                <ActiveIcon />
              </div>
              <img src="/Images/moon.png" alt="Weather Icon" />
              <div className={styles.temp1}>
                {data.forecast.forecastday[0].hour[23].temp_c}°C
              </div>
              <div className={styles.condition1}>
                {data.forecast.forecastday[0].hour[23].condition.text}
              </div>
              <div className={styles.buttons}>
                <img src="/Images/Home.png" />
                <img src="/Images/Pin.png" />
                <img src="/Images/Heart.png" />
                <img src="/Images/User.png" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
