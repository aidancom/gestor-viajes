import { useState, useEffect } from "react"
import { cities } from "../db/cities"
import { faCloud, faSun, faCloudRain, faSnowflake, faCloudShowersHeavy, faCloudBolt, faSmog } from '@fortawesome/free-solid-svg-icons'

export const useWeather = () => {
  const [data] = useState(cities)
  const [selectedCity, setSelectedCity] = useState({})
  const [selectValue, setSelectValue] = useState('')
  const img = {
    'Clear': [faSun, 'Despejado'],
    'Clouds': [faCloud, 'Nublado'],
    'Rain': [faCloudShowersHeavy, 'Lluvia'],
    'Snow': [faSnowflake, 'Nieve'],
    'Thunderstorm': [faCloudBolt, 'Tormenta'],
    'Drizzle': faCloud,
    'Haze': [faSmog, 'Bruma'],
    'Mist': [faSmog, 'Niebla']
  }

  useEffect(() => {
    if (selectValue) {
      const cityWeatherData = async () => {
        try {
          const cityFinder = data.find(city => city.name === selectValue)    
          const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityFinder.lat}&lon=${cityFinder.lng}&appid=82f37bd690ca73cd7c349f1a1d06891b&units=metric`)
          const response = await req.json()
          console.log(response)
          setSelectedCity(response)
        } catch(e) {
          alert(`Error: ${e}`)
        }
      }
      cityWeatherData()
    }
  }, [selectValue])

  const weatherMain = selectedCity?.weather?.[0]?.main
  const conditionWeatherImg = weatherMain && img[weatherMain][0]
  const conditionWeatherText = weatherMain && img[weatherMain][1]

  return {
    data,
    selectedCity,
    setSelectValue,
    conditionWeatherImg,
    conditionWeatherText,
    img
  }
}