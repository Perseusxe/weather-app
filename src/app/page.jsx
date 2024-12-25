"use client";

import { useState, useEffect } from "react";
import { LocationIcon } from "../components/LocationIcon";
import { HomeIcon } from "../components/HomeIcon";
import { HeartIcon } from "../components/HeartIcon";
import { UserIcon } from "../components/UserIcon";
import { SearchInput } from "@/components/SearchInput";
import { Circles } from "@/components/Circles";

const API_KEY = "7da889ccc43a407281f91920241412";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({
    temperature: 0,
    condition: "",
  });
  const [date, setDate] = useState("");

  const [nightWeather, setNightWeather] = useState({
    temperature: 0,
    condition: "",
  });

  const [isClient, setIsClient] = useState(false);

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };

  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDate(data.forecast.forecastday[0].date);

        setDayWeather({
          temperature: data?.forecast?.forecastday[0]?.day?.maxtemp_c,
          condition: data?.forecast?.forecastday[0]?.day?.condition?.text
            .trim()
            .toLowerCase(),
        });
        setNightWeather({
          temperature: data?.forecast?.forecastday[0]?.day?.mintemp_c,
          condition: data?.forecast?.forecastday[0]?.hour[6]?.condition.text
            .trim()
            .toLowerCase(),
        });
      });
  }, [city]);

  let dayImg = dayWeather.condition?.includes("rain")
    ? "/sun-Rain.png"
    : dayWeather.condition?.includes("snow")
    ? "/sun-Snow.png"
    : dayWeather.condition?.includes("cloud")
    ? "/sun-Clouds.png"
    : dayWeather.condition?.includes("overcast")
    ? "/sun-Clouds.png"
    : dayWeather.condition?.includes("wind")
    ? "/sun-Windy.png"
    : "/Sun.png";

  let nightImg = nightWeather.condition?.includes("rain")
    ? "/moon-Rain.png"
    : nightWeather.condition?.includes("snow")
    ? "/moon-snow.png"
    : nightWeather.condition?.includes("cloud")
    ? "/moon-clouds.png"
    : nightWeather.condition?.includes("overcast")
    ? "/moon-clouds.png"
    : nightWeather.condition?.includes("wind")
    ? "/moon-Windy.png"
    : "/moon.png";

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Day Weather Section */}
      <div className="lg:w-1/2 w-full h-full bg-[#F3F4F6] flex flex-col items-center justify-center">
        <SearchInput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        />

        <Circles />
        <div className="w-[90%] max-w-[500px] bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="text-gray-800 font-medium text-lg">{date}</div>
              <div className="text-gray-800 font-bold text-4xl">{city}</div>
            </div>
            <LocationIcon />
          </div>
          <div className="flex justify-center mb-8">
            <img src={dayImg} alt="day weather" className="w-64 h-64" />
          </div>
          <h1 className="text-6xl font-extrabold text-gray-800 mb-2">
            {Math.round(dayWeather.temperature)}°
          </h1>
          <p className="text-xl font-semibold text-orange-500">
            {dayWeather.condition}
          </p>
        </div>
      </div>

      {/* Night Weather Section */}
      <div className="lg:w-1/2 w-full h-full bg-[#0F141E] flex flex-col items-center justify-center">
        <div className="w-[90%] max-w-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="text-white font-medium text-lg">{date}</div>
              <div className="text-white font-bold text-4xl">{city}</div>
            </div>
            <LocationIcon />
          </div>
          <div className="flex justify-center mb-8">
            <img src={nightImg} alt="night weather" className="w-64 h-64" />
          </div>
          <h1 className="text-6xl font-extrabold text-white mb-2">
            {Math.round(nightWeather.temperature)}°
          </h1>
          <p className="text-xl font-semibold text-indigo-400">
            {nightWeather.condition}
          </p>
        </div>
      </div>
    </div>
  );
}
