import React, { useState } from 'react'
import ModalTravelInfo from './ModalTravelInfo'
import { AnimatePresence, motion } from 'framer-motion'

const TravelIndividualInfo = ({data, handleEdit, handleDelete, travelsData}) => {

  const [modalOpen, setModalOpen] = useState(false)
  const [mode, setMode] = useState("")
  const styledButtons = 'bg-[#9487F5] text-[#fff] px-3 py-1 rounded-[10px] hover:bg-[#7b6de3] transition-all my-2 2xl:my-0'

  return (
    <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} transition={{duration: 0.3}} className='bg-[#ededed] m-3 p-3 rounded-[10px]'>
      <h4 className='font-medium text-[18px]'>Viaje a {data.general.travelDestination}</h4>
      <div className='flex justify-between flex-col py-3 2xl:flex-row'>
        <button className={styledButtons + ' w-full 2xl:w-1/4'} onClick={()=> {setModalOpen(true); setMode('general-information')}}>Informacion general</button>
        <button className={styledButtons} onClick={() => {setModalOpen(true); setMode('cash-information')}}>Informacion sobre dinero</button>
        <button className={styledButtons} onClick={() => {setModalOpen(true); setMode('accomodation-information')}}>Informacion sobre alojamiento</button>
      </div>
      {data.travelAdditionalNotes && <p>Notas adicionales: {data.travelAdditionalNotes}</p>}
      <div className='flex justify-between pt-3'>
        <button className='bg-[#9487F5] text-[#fff] px-3 py-1 rounded-[10px] hover:bg-[#7b6de3] transition-all' onClick={() => handleEdit(data)}>Editar</button>
        <button className='bg-red-500 text-[#fff] px-3 py-1 rounded-[10px] hover:bg-red-700 transition-all' onClick={() => handleDelete(data)}>Eliminar</button>
      </div>
      <AnimatePresence mode='wait'>
        {modalOpen && <ModalTravelInfo data={data} mode={mode} setModalOpen={setModalOpen}/>}
      </AnimatePresence>
    </motion.div>
  )
}

export default TravelIndividualInfo
