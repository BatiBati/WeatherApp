// "use client"
// import { useEffect, useState } from "react";
// import styles from "./page.module.css"

import { useEffect, useState } from "react";

export default function Home() {
  const [searchLocation, setSearchLocation] = useState("");
  const [data, setData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState("Ulaanbaatar");

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
    if (searchLocation.length > 0) {
      fetch(`https://countriesnow.space/api/v0.1/countries`)
        .then((res) => res.json())
        .then((data) => {
          const countryList = data.data;
          let matchedResults = [];

          countryList.forEach(({ country, cities }) => {
            const isCityMatch = country
              .toLowerCase()
              .includes(searchLocation.toLowerCase());

            cities.forEach((city) => {});
          });
        });
    }
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
            {suggestions.map((suggestion, index) => {
              <div
                className={styles.suggestionItem}
                key={index}
                onClick={() => handleSelection(suggestion)}
              >
                <img src="/Images/room.png" />
                {suggestion.city}, {suggestion.country}
              </div>;
            })}
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
              <div className={styles.temp}>{data.current.temp_c}</div>
              <div className={styles.condition}>
                {data.current.condition.text}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
