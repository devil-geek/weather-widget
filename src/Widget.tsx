import { Global } from "@emotion/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { MdAir, MdWaterDrop } from "react-icons/md"
import { globalStyles } from "./styles"

const Widget = ({ location }) => {
  const [weather, setWeather] = useState({
    current: {
      precip_mm: -1,
      wind_kph: -1,
      condition: {
        text: "",
        icon: "",
        code: 0,
      },
      temp_c: 0,
      is_day: 1,
    },
    location: { name: "" },
  })
  useEffect(() => {
    axios
      .get("http://api.weatherapi.com/v1/current.json", {
        //@ts-ignore
        params: { key: process.env.W_KEY, q: location },
      })
      .then((res) => {
        setWeather(res.data)
      })
  }, [])
  return (
    <>
      <Global styles={globalStyles} />
      <div id="weather_wrapper">
        <div className="weatherCard">
          <div className="currentTemp">
            <span className="temp">{weather.current.temp_c}&deg;C</span>
            <span className="location">{weather.location.name}</span>
          </div>
          <div className="currentWeather">
            <span
              className={`conditions ${
                weather?.current?.is_day ? "isDay" : ""
              }`}
            >
              <img
                alt={weather?.current?.condition.text}
                src={weather?.current?.condition.icon}
                title={weather?.current?.condition.text}
              />
            </span>
            <div className="info">
              <span className="rain">
                <MdWaterDrop size={"1.5rem"} />
                <span>
                  {weather?.current?.precip_mm} <br />
                  MM
                </span>
              </span>
              <span className="wind">
                <MdAir size={"1.5rem"} />
                <span>
                  {weather?.current?.wind_kph} <br />
                  KPH
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Widget
