"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { ActiveIcon } from "../assets/Location-icon";
import WeatherCard from "./components/WeatherCard";
import Suggestions from "./components/SuggestionList";
import SearchBar from "./components/SearchBar";

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
            const isCountryMatch = country
              .toLowerCase()
              .includes(searchLocation.toLowerCase());

            cities.forEach((city) => {
              const isCityMatch = city
                .toLowerCase()
                .includes(searchLocation.toLowerCase());

              if (isCountryMatch) matchedResults.push({ city, country });
              if (isCityMatch) matchedResults.push({ city, country });
            });
          });

          setSuggestions(matchedResults);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchLocation]);

  const handleSelectLocation = (selectedLocation) => {
    setLocation(selectedLocation.city);
    setSearchLocation("");
    setSuggestions([]);
  };

  const currentDate = new Date().toLocaleDateString("EN-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex h-screen w-full">
      <div className="flex relative w-full h-full">
        <SearchBar
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />

        {suggestions.length > 0 && (
          <Suggestions
            suggestions={suggestions}
            onSelect={handleSelectLocation}
          />
        )}

        <img src="/Images/Light-Left.png" className="w-1/2 h-full object-cover" />
        <img src="/Images/Dark-right.png" className="w-1/2 h-full object-cover" />

        {data && (
          <>
            <WeatherCard
              variant="day"
              location={location}
              currentDate={currentDate}
              temperature={Math.round(data.current.temp_c)}
              condition={data.current.condition.text}
            />

            <WeatherCard              variant="night"
              location={location}
              currentDate={currentDate}
              temperature={Math.round(
                data.forecast.forecastday[0].hour[23].temp_c
              )}
              condition={data.forecast.forecastday[0].hour[23].condition.text}
              Icon={ActiveIcon}
            />
          </>
        )}
      </div>
    </div>
  );
}
