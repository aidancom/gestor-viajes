import React from 'react'
import TravelIndividualInfo from './TravelIndividualInfo'

const TravelsInfo = ({styledDivs, travelsData, handleEdit, handleDelete}) => {
  return (
    <div className={styledDivs + ' min-h-[400px]'}>
      <h2 className='pl-3 py-3 font-bold text-[20px] md:text-2xl z-[999]'>Información sobre los <span className='text-[#9487F5]'>viajes</span></h2>
      <div className='h-[700px] overflow-y-auto'>
        {travelsData.length == 0 ? (
          <p>No hay viajes</p>
        ) : (
          travelsData.map(data => (
            <TravelIndividualInfo key={data.key} data={data} handleEdit={handleEdit} handleDelete={handleDelete} travelsData={travelsData}/>
          ))
        )}
      </div>
    </div>
  )
}

export default TravelsInfo
