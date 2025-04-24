import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const ModalNewBudget = ({budget, setBudget, setModalOpen}) => {

  const [inputBudget, setInputBudget] = useState(budget)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputBudget < 0) {
      alert('El presupuesto no puede ser negativo')
    } else if (isNaN(inputBudget)) {
      alert('El presupuesto debe ser un número')
    } else if (inputBudget === 0 || inputBudget === '') {
      alert('El presupuesto no puede estar vacio ni ser 0')
    } else {
      setBudget(inputBudget)
      setModalOpen(false)
    }
  }
  
  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#ffffff73] z-[999999]'>
      <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.5}} className='bg-[#EDEDED] p-5 rounded-[10px]'>
        <div className='flex justify-end pb-1 cursor-pointer' onClick={() => setModalOpen(false)}><FontAwesomeIcon icon={faXmark}/></div>
        <form onSubmit={handleSubmit}>
          <fieldset className='flex flex-col'>
            <input className='p-1 rounded-[5px]' type='text' placeholder='Escribe la nueva cantidad' onChange={(e) => setInputBudget(e.target.value)}></input>
            <div className='flex justify-end'>
              <input className=' cursor-pointer bg-[#9487F5] text-[#fff] px-5 py-1 rounded-[10px] hover:bg-[#7b6de3] transition-all my-2 2xl:my-' type='submit' value="Cambiar"></input>
            </div>
          </fieldset>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default ModalNewBudget
