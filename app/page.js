"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { ActiveIcon } from "./assets/Location-icon";

export default function Home() {
  const [location, setLocation] = useState("Ulaanbaatar");
  const [searchLocation, setSearchLocation] = useState("");
  const [data, setData] = useState(null);
  const [city, setCity] = useState();
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8435428071ee475ca3373725252502&q=${location}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => {
        const countriesList = data.map((country) => country.name.common);
        setCountries(countriesList);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    if (searchCountry) {
      const result = countries.filter((country) =>
        country.toLowerCase().includes(searchCountry.toLowerCase())
      );
      setFilteredCountries(result);
    } else {
      setFilteredCountries([]);
    }
  }, [searchCountry, countries]);

  const handleSelectingCountry = (country) => {
    setSearchCountry(country);
    setFilteredCountries([]);
  };

  console.log("minii data", data);

  const handleSearching = () => {
    setLocation(searchLocation);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <input
          className={styles.input}
          type="text"
          value={searchCountry}
          onChange={(event) => setSearchCountry(event.target.value)}
          placeholder="Search"
        />
        <div>
          {filteredCountries.length > 0 && (
            <div className={styles.suggestionBox}>
              {filteredCountries.map((country, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectingCountry(country)}
                  className={styles.suggestionItem}
                >
                  {country}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => console.log(searchCountry)}
          className={styles.button}
        >
          Search
        </button>
        <img src="/Images/Light-Left.png" />
        <img src="/Images/Dark-right.png" />
        <div className={styles.box}>
          <div>February 27, 2025</div>
          <div className={styles.location}>
            <div>{location}</div>
            <img src="/Images/localization_icon.jpg" />
          </div>
          <img src="/Images/sun.png" />
          <div className={styles.temp}>{data.current.temp_c}°</div>
          <div className={styles.condition}>
            {data.forecast.forecastday[0].text}
          </div>
          <div className={styles.buttons}>
            <img src="/Images/Home.png" />
            <img src="/Images/Pin.png" />
            <img src="/Images/Heart.png" />
            <img src="/Images/User.png" />
          </div>
        </div>
        <div className={styles.box1}>
          <div>February 27, 2025</div>
          <div className={styles.location1}>
            <div>{location}</div>
            <ActiveIcon />
          </div>
          <img src="/Images/moon.png" />
          <div className={styles.temp1}>{data.current.temp_c}°</div>
          <div className={styles.condition1}>{data.current.condition.text}</div>
          <div className={styles.buttons}>
            <img src="/Images/Home.png" />
            <img src="/Images/Pin.png" />
            <img src="/Images/Heart.png" />
            <img src="/Images/User.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
