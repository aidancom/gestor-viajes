import React from 'react'
import { useWeather } from '../hooks/useWeather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Weather = () => {
  const {data, selectedCity, setSelectValue, conditionWeatherImg, conditionWeatherText} = useWeather()

  return (
    <div className="h-full lg:grid lg:grid-rows-[20%_80%]">
      <h2 className='pl-3 py-3 font-bold text-[20px] md:text-2xl z-[999]'>El <span className="text-[#9487f5]">tiempo</span> en...</h2>
      <div className='lg:grid lg:grid-rows-[20%_80%]'>
        <div className='mx-3'>        
            <select className='w-full border-2 border-[#D8B5C9] border-solid p-[3px]' onChange={(e) => setSelectValue(e.target.value)} defaultValue={""}>
              <option disabled={true} value="">Seleccione una ciudad para ver el tiempo actual</option>
              {data.map(city => {
                return <option key={city.lat + city.lng} value={city.name}>{city.name}</option>
              })}
          </select>
        </div>
        <div className='mx-3 my-5 lg:my-0'>
          {conditionWeatherImg ? (
            <div className='h-full flex justify-center items-center'>
              <div className='flex flex-col lg:flex-row md:items-center'>
                  <FontAwesomeIcon className='text-6xl pr-3 text-[#9487F5]' icon={conditionWeatherImg}/>
                  <div className='bg-black h-[2px] lg:h-[60px] lg:w-[2px] my-3 lg:my-0 lg:mr-[10px]'></div>
                  <div>
                    <p className='text-[20px] font-medium'>{conditionWeatherText} / {selectedCity.main.temp} ºC</p>
                    <p>Humedad: {selectedCity.main.humidity}%</p>
                  </div>
              </div>
            </div>
            ) : (
            <p className='text-center'>Sin información</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Weather
