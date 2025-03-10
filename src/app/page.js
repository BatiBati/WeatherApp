"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { ActiveIcon } from "../assets/Location-icon";

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
    <div class="flex h-screen w-full">
      <div class="flex relative w-full h-full ">
        <div class="flex items-center absolute w-[567px] h-[80px] pl-[24px] pt-[16px] pb-[16px] border order-solid border-[#ccc] rounded-[40px] text-[20px] bg-[white] left-[40px] top-[40px] font-[700]">
          <img src="Images/search (1).png" class="flex w-[32px] h-[32px]" />
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Search"
            class="divide-none outline-none text-[20px] pl-[16px] bg-transparent"
          />
        </div>

        {suggestions.length > 0 && (
          <div class="absolute top-[140px] left-[40px] bg-[white] border order-solid border-[#ccc] rounded-[30px] z-2 pt-[16px] pb-20px w-[567px] text-[28px] gap-[25px] max-h-[216px] overflow-scroll font-[700]">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                class="flex p-[10px] cursor-pointer gap-[16px] hover:bg-[#f0f0f0] opacity-[90%]"
                onClick={() => handleSelectLocation(suggestion)}
              >
                <img src="/Images/room.png" class="w-[40px] h-[40px]" />
                {suggestion.city}, {suggestion.country}
              </div>
            ))}
          </div>
        )}
        <img src="/Images/Light-Left.png" class="w-1/2 h-full object-cover" />
        <img src="/Images/Dark-right.png" class="w-1/2 h-full object-cover" />

        {data && (
          <div>
            <div class="flex absolute top-[200px] pt-[56px] pl-[40px] pr-[40px] pb-[56px] rounded-[20px] flex-col justify-center left-[400px] bg-[white]">
              <div class="text-[18px] text-[#9ca3af] font-[500]">
                {currentDate}
              </div>
              <div class="flex justify-between items-center gap-[112px]">
                <div class="text-[48px] text-[#111827] font-[800]">
                  {location}
                </div>
                <img
                  src="/Images/localization_icon.jpg"
                  class="w-[32px] h-[32px]"
                />
              </div>
              <div class="flex justify-center">
                <img src="/Images/sun.png" class="w-[274.09px] h-[274.09px]" />
              </div>

              <div
                class="text-[144px] font-bold bg-linear-[#111827,#6b7280] bg-clip-text font-[800]"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                {Math.round(data.current.temp_c)}°
              </div>
              <div class="text-[#ff8e27] text-[24px] font-[800]">
                {data.current.condition.text}
              </div>
              <div class="flex mt-[48px] gap-[63.33px]">
                <img src="/Images/Home.png" class="w-[32px] h-[32px]" />
                <img src="/Images/Pin.png" class="w-[32px] h-[32px]" />
                <img src="/Images/Heart.png" class="w-[32px] h-[32px]" />
                <img src="/Images/User.png" class="w-[32px] h-[32px]" />
              </div>
            </div>

            <div class="flex absolute top-[200px] pt-[56px] pl-[40px] pr-[40px] pb-[56px] rounded-[20px] flex-col justify-center right-[300px] bg-[#111827bf] backdrop-blur-[10px]">
              <div class="text-[18px] text-[#9ca3af] font-[500]">
                {currentDate}
              </div>
              <div class="flex justify-between items-center gap-[112px]">
                <div class="text-[48px] text-[white] font-[800]">
                  {location}
                </div>
                <ActiveIcon class="w-[32px] h-[32px]" />
              </div>
              <div class="flex justify-center">
                <img src="/Images/moon.png" class="w-[277px] h-[277px]" />
              </div>
              <div
                class="text-[144px] font-bold bg-linear-[#6b7280,#111827] bg-clip-text font-[800]"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                {Math.round(data.forecast.forecastday[0].hour[23].temp_c)}°
              </div>
              <div class="text-[#777cce] text-[24px] font-[800]">
                {data.forecast.forecastday[0].hour[23].condition.text}
              </div>
              <div class="flex mt-[48px] gap-[63.33px]">
                <img src="/Images/night-home.png" class="w-[32px] h-[32px]" />
                <img src="/Images/Pin.png" class="w-[32px] h-[32px]" />
                <img src="/Images/Heart.png" class="w-[32px] h-[32px]" />
                <img src="/Images/User.png" class="w-[32px] h-[32px]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
