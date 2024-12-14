"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LocationIcon } from "../components/LocationIcon";
import { HomeIcon } from "../components/HomeIcon";
import { HeartIcon } from "../components/HeartIcon";
import { UserIcon } from "../components/UserIcon";
import { SearchIcon } from "@/components/SearchIcon";
import { SearchInput } from "@/components/SearchInput";

const API_KEY = "7da889ccc43a407281f91920241412";

export default function Home() {
  const [value, setValue] = useState("")
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
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDate(data.forecast.forecastday[0].date);

        setDayWeather({
          temperature: data?.forecast?.forecastday[0].day?.maxtemp_c,
          condition: data?.forecast?.forecastday[0].day?.condition?.text.trim().toLowerCase(),
        });
        setNightWeather({
          temperature: data?.forecast?.forecastday[0].day?.mintemp_c,
          condition: data?.forecast?.forecastday[0].hour[6]?.condition.text.trim().toLowerCase(),
        });

        console.log(data.current.temp_c, "---Temperature");
        console.log(data.current.condition.text, "---Condition");
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
    ? "/moon-Snow.png"
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
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-screen bg-[#F3F4F6]">
        <SearchInput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        />
        <div>
          <div className="w-[200px] h-[200px] m-0 top-[550px] left-[1180px] flex fixed rounded-full bg-[#F3F4F6] z-20">
            <div className="flex items-center ml-[50px]">
            <img src="left.png" className="w-[50px] h-[100px] mr-[10px]"/>
            <img src="right.png" className="w-[50px] h-[100px]"/>
            </div>
          </div>
          <div className="w-[140px] h-[140px] absolute bg-transparent top-[580px] left-[1210px] border-[1px] border-[#000000] rounded-full opacity-[10%] z-20"></div>
          <div className="w-[340px] h-[340px] absolute bg-transparent top-[480px] left-[1110px] border-[1px] border-[#000000] rounded-full opacity-[10%] z-20"></div>
          <div className="w-[540px] h-[540px] absolute bg-transparent top-[380px] left-[1010px] border-[1px] border-[#000000] rounded-full opacity-[10%] z-20"></div>
          <div className="w-[940px] h-[940px] absolute bg-transparent top-[180px] left-[810px] border-[1px] border-[#000000] rounded-full opacity-[10%] z-10"></div>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="h-2/3 w-1/2 bg-[#FFFFFF] rounded-[48px] z-30">
            <div className="flex items-center justify-around">
              <div>
                <div className="text-[#111827] font-[500] text-[18px] leading-[25px] mt-[50px]">
                  {date}
                </div>
                <div className="text-[#111827] font-[800] text-[48px] leading-[66px] mt-0">
                  {city}
                </div>
              </div>
              <div className="mt-[30px]">
                <LocationIcon />
              </div>
            </div>
            <div className="flex justify-center mt-[80px]">
              <img
                src={dayImg}
                width={262}
                height={262}
                alt=""
                className="absolute"
              />
            </div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#a9afbb] text-[144px] font-[800] leading-[197px] flex ml-[50px] mt-[300px]">
              {Math.round(dayWeather.temperature)}°
            </h1>
            <h1 className="font-[800] text-[24px] leading-[33px] text-[#FF8E27] ml-[50px]">
              {dayWeather.condition}
            </h1>
            <div className="flex items-center justify-evenly mt-[50px]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z" stroke="#111827" strokeWidth="2"/>
        </svg>
          <LocationIcon />
          <HeartIcon />
          <UserIcon />
          </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-[#0F141E] rounded-3xl flex items-center justify-center relative">
        <div className="h-2/3 w-1/2 rounded-[48px] bg-gradient-to-b from-[#1F2937] to-[#111827BF] z-10">
          <div className="flex items-center justify-around">
            <div>
              <div className="text-[#FFFFFF] font-[500] text-[18px] leading-[25px] mt-[50px]">
                {date}
              </div>
              <div className="text-[#FFFFFF] font-[800] text-[48px] leading-[66px] mt-0">
                {city}
              </div>
            </div>
            <div className="mt-[30px]">
              <LocationIcon />
            </div>
          </div>
          <div className="flex justify-center mt-[80px]">
            <img
              src={nightImg}
              width={262}
              height={262}
              alt=""
              className="absolute"
            />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] text-[144px] font-[800] leading-[197px] flex ml-[50px] mt-[300px]">
            {Math.round(nightWeather.temperature)}°
          </h1>
          <h1 className="font-[800] text-[24px] leading-[33px] text-[#777CCE] ml-[50px]">
            {nightWeather.condition}
          </h1>
          <div className="flex items-center justify-evenly mt-[50px]">
          <HomeIcon />
          <LocationIcon />
          <HeartIcon />
          <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
