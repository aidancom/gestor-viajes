import React from 'react'
import { useNextTravel } from '../hooks/useNextTravel'
import GeneratePDF from './GeneratePDF'

const NextTravel = ({travelsData}) => {
  const {nextTravel} = useNextTravel(travelsData)
  return (
    <div className="h-full lg:grid lg:grid-rows-[20%_80%]">
      <h2 className='pl-3 py-3 font-bold text-[20px] md:text-2xl z-[999]'>Próximo <span className="text-[#9487f5]">viaje</span></h2>
      {travelsData.length === 0 ? (
        <p className='text-center'>No hay viajes</p>
      ) : (
        <div className='bg-[#EDEDED] p-3 m-3 rounded-[10px]'>
          <div><h3 className='font-semibold text-[18px] pb-2'>Viaje a <span className='capitalize'>{nextTravel?.general?.travelDestination}</span></h3></div>
          <div>
            <p>Fechas salida / regreso: {new Date(nextTravel?.general?.travelDepartureDate).toLocaleDateString()} - {new Date(nextTravel?.general?.travelReturnDate).toLocaleDateString()}</p>
            <p className='capitalize'>Motivo: {nextTravel?.general?.travelReason}</p>
            <p>Alojamiento: {nextTravel?.accommodation?.travelHotelName}</p>
            <p>Fechas check-in / check-out: {new Date(nextTravel?.accommodation?.travelCheckIn).toLocaleDateString()} - {new Date(nextTravel?.accommodation?.travelCheckOut).toLocaleDateString()}</p>
            <p>Costo total del viaje: {parseInt(nextTravel?.cash?.travelCost) + parseInt(nextTravel?.cash?.travelBills)}€</p>
            <GeneratePDF nextTravel={nextTravel}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default NextTravel
