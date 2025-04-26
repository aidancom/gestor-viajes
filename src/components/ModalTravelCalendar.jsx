import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ModalTravelCalendar = ({selectTravel, setModal}) => {
  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#ffffff73] z-[999999]'>
      <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.5}} className='bg-white mx-auto w-[350px] border-2 border-solid border-[#9487F5] rounded-[10px] p-3'>
        <div className='flex gap-2 justify-between'>
        <div>
          <h2 className='text-2xl underline font-medium'>Viaje a {selectTravel?.general?.travelDestination}</h2>
          <div className='space-y-1 mt-4'>
            <p><span className='font-medium'>Salida:</span> {selectTravel?.general?.travelDepartureDate}</p>
            <p><span className='font-medium'>Regreso:</span> {selectTravel?.general?.travelReturnDate}</p>
            <p className='capitalize'><span className='font-medium'>Motivo:</span> {selectTravel?.general?.travelReason}</p>
            <p className='capitalize'><span className='font-medium normal-case'>Lugar de salida:</span> {selectTravel?.general?.travelDeparturePlace}</p>
          </div>
        </div>
        
        <div><FontAwesomeIcon className='cursor-pointer' icon={faXmark} onClick={() => setModal(false)}/></div>
          
        </div>
        
      </motion.div>
    </motion.div>
  )
}

export default ModalTravelCalendar
