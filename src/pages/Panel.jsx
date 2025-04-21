import React, { useState } from 'react'
import Menu from '../components/Menu'
import { AnimatePresence, motion } from 'framer-motion'
import Dashboard from '../components/Dashboard'
import Calendar from '../components/Calendar'
import Form from '../components/Form'
import { useForm } from '../hooks/useForm'

const Panel = ({user}) => {
  const [activePanel, setActivePanel] = useState('dashboard')
  const {handleSubmit, formData, setFormData, travelsData, handleEdit, handleDelete, existingKey} = useForm()

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-1 my-[30px] mx-5 flex-col lg:flex-row lg:justify-around lg:mx-0'>
        <aside className='bg-white rounded-[10px] mb-5 w-full lg:w-[4%] lg:mb-0'>
          <Menu setActivePanel={setActivePanel}/>
        </aside>
        <main className='flex flex-col flex-2 bg-white rounded-[10px] w-full lg:w-[92%]'>
          <div className='m-5 border-[3px] border-[#9487F5] rounded-[10px]'>
            <AnimatePresence mode='wait'>
                <motion.h1 className='text-center py-3 font-bold text-3xl' key={activePanel} initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 30}} transition={{duration: 0.3}}>
                  {activePanel === 'dashboard' ? (<>Hola, <span className='text-[#9487F5]'>{user}</span></>) : activePanel === 'calendar' ? (<>Calendario de viajes</>) : (<>Formulario de viajes</>)}
                </motion.h1>
            </AnimatePresence>
          </div>
          <AnimatePresence mode='wait'>
            <motion.div className='flex-1 mb-5' key={activePanel} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
              {activePanel === 'dashboard' ? <Dashboard travelsData={travelsData}/> : activePanel === 'calendar' ? <Calendar/> : <Form handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} existingKey={existingKey} travelsData={travelsData} handleEdit={handleEdit} handleDelete={handleDelete} />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default Panel
