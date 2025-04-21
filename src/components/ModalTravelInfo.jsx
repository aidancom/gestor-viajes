import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const ModalTravelInfo = ({data, mode, setModalOpen}) => {
  const { travelName, travelReason,  travelDepartureDate, travelReturnDate, travelDestination, travelDeparturePlace} = data?.general || {}
  const { travelHotelName, travelHotelDirection, travelHotelPhone, travelCheckIn, travelCheckOut, travelHotelRoomType} = data?.accommodation || {}
  const { travelCost, travelBills, travelPaymentMethod, travelRefund} = data?.cash || {}
  const styledP = 'font-medium'
  return (
      <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className='fixed flex h-[108vh] w-full top-0 left-0 justify-center items-center flex-col bg-[#ffffff73]'>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.5}} className='bg-[#EDEDED] p-5 rounded-[10px]'>
          <div className='flex justify-end pb-3'><FontAwesomeIcon className='cursor-pointer' icon={faXmark} onClick={() => setModalOpen(false)}/></div>
          {mode === 'general-information' ? (
            <div>
              {travelName && <p><span className={styledP}>Nombre del viaje</span>: {travelName}</p>}
              {travelReason && <p><span className={styledP}>Razón:</span> {travelReason}</p>}
              {travelDepartureDate && <p><span className={styledP}>Fecha de salida:</span> {travelDepartureDate}</p>}
              {travelReturnDate && <p><span className={styledP}>Fecha de regreso:</span> {travelReturnDate}</p>}
              {travelDestination && <p><span className={styledP}>Destino:</span> {travelDestination}</p>}
              {travelDeparturePlace && <p><span className={styledP}>Lugar de salida:</span> {travelDeparturePlace}</p>}
            </div>
          ) : mode === 'accomodation-information' ? (
            <div>
              {travelHotelName && <p><span className={styledP}>Nombre del alojamiento:</span> {travelHotelName}</p>}
              {travelHotelDirection && <p><span className={styledP}>Dirección:</span> {travelHotelDirection}</p>}
              {travelHotelPhone && <p><span className={styledP}>Número de contacto:</span> {travelHotelPhone}</p>}
              {travelCheckIn && <p><span className={styledP}>Check-in:</span> {travelCheckIn}</p>}
              {travelCheckOut && <p><span className={styledP}>Check-Out:</span> {travelCheckOut}</p>}
              {travelHotelRoomType && <p><span className={styledP}>Tipo de habitación:</span> {travelHotelRoomType}</p>}
            </div>
          ) : (
            <div>
              {travelCost && <p><span className={styledP}>Costo estimado del viaje:</span> {travelCost}€</p>}
              {travelBills && <p><span className={styledP}>Gastos anticipados</span>: {travelBills}€</p>}
              <p><span className={styledP}>Total:</span> {parseInt(travelCost) + parseInt(travelBills)}€</p>
              {travelPaymentMethod && <p><span className={styledP}>Método de pago:</span> {travelPaymentMethod}</p>}
              {travelRefund && <p><span className={styledP}>Reembolso?</span> {travelRefund}</p>}
            </div>
          )}
        </motion.div>
      </motion.div>
  )
}

export default ModalTravelInfo
