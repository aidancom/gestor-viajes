import React from 'react'
import { useBills } from '../hooks/useBills'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import ModalNewBudget from './ModalNewBudget';
import { AnimatePresence } from 'framer-motion'

const Bills = ({travelsData}) => {
  const {totalTravel, percent, modalOpen, setModalOpen, setBudget, budget, totalBills, totalCosts} = useBills(travelsData)
  return (
    <div className='h-full'>
       <div className='grid h-full xl:grid-rows-[80%_20%]'>
        <div className='flex flex-col'>
        <h2 className='pl-3 py-3 font-bold text-[20px] md:text-2xl z-[999]'>Presupuesto y <span className="text-[#9487f5]">gastos</span> totales</h2>
          <div className='flex h-full items-center justify-center flex-col xl:flex-row'>
            <div className='mr-5 w-[100px]'>
              <CircularProgressbar className='font-medium' value={percent} text={parseInt(percent) > 100 ? '100%' : isNaN(percent) ? '0%' : `${percent}%`} styles={buildStyles({ pathColor: '#9487f5', textColor: '#222222', })}></CircularProgressbar>
            </div>
            <div>
              <p>Total costo estimado viajes: {totalCosts}€</p>
              <p>Total gastos anticipados viajes: {totalBills}€</p>
              <p>Total viajes (costos + gastos): {totalTravel}€</p>
              <p>Presupuesto: {budget}€</p>
              <p>Restante: {budget - totalTravel < 0 ? <>0</> : <>{budget - totalTravel}</>}€</p>
            </div>  
          </div>
        </div>    
        <div className='mx-3 pb-3 lg:pb-0'>
          <button onClick={() => setModalOpen(true)} className='w-full border-2 border-solid border-[#9487f5] bg-[#9487f5] pt-[5px] pr-[15px] pb-[5px] pl-[15px] mt-2 rounded-[10px] transition-all duration-200 ease-linear cursor-pointer text-[#fff] hover:bg-[#fff] hover:text-[#222] hover:shadow-[0_6px_0_0_#fff]'>Definir nuevo presupuesto</button>
        </div>
       </div>
       <AnimatePresence mode='wait'>
        {modalOpen && <ModalNewBudget budget={budget} setBudget={setBudget} setModalOpen={setModalOpen}/>}
       </AnimatePresence>
    </div>
  )
}

export default Bills
