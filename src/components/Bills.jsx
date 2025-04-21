import React from 'react'
import { useBills } from '../hooks/useBills'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import ModalNewBudget from './ModalNewBudget';

const Bills = ({travelsData}) => {
  const {totalTravel, percent, modalOpen, setModalOpen, setBudget, budget, totalBills, totalCosts} = useBills(travelsData)
  return (
    <div className='h-full'>
       <div className='grid grid-rows-[80%_20%] h-full'>
        <div className='flex flex-col'>
        <h2 className='pl-3 py-3 font-bold text-[20px] md:text-2xl z-[999]'>Presupuesto y <span className="text-[#9487f5]">gastos</span> totales</h2>
          <div className='flex h-full items-center justify-center'>
          <div>
            <CircularProgressbar className='w-[100px]' value={percent} text={`${percent}%`}></CircularProgressbar>
          </div>
          <div>
            <p>Total costo estimado viajes: {totalCosts}€</p>
            <p>Total gastos anticipados viajes: {totalBills}€</p>
            <p>Total viaje (costos + gastos): {totalTravel}€</p>
            <p>Presupuesto: {budget}€</p>
            <p>Restante: {budget - totalTravel}€</p>
          </div>  
          </div>
        </div>    
        <div className='mx-3'>
          <button onClick={() => setModalOpen(true)} className='w-full border-2 border-solid border-[#9487f5] bg-[#9487f5] pt-[5px] pr-[15px] pb-[5px] pl-[15px] mt-2 rounded-[10px] transition-all duration-200 ease-linear cursor-pointer text-[#fff] hover:bg-[#fff] hover:text-[#222] hover:shadow-[0_6px_0_0_#fff]'>Definir nuevo presupuesto</button>
        </div>
       </div>
       {modalOpen && <ModalNewBudget budget={budget} setBudget={setBudget} setModalOpen={setModalOpen}/>}
    </div>
  )
}

export default Bills
