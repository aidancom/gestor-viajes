import React from 'react'
import Travels from '../pages/Travels'
import TravelsInfo from './TravelsInfo'


const Form = ({handleSubmit, formData, setFormData, travelsData, handleEdit, handleDelete, existingKey, valido, loader}) => {

  const styledDivs = 'mx-5 border-[3px] border-[#9487F5] rounded-[10px] h-full'
  const formProps = {handleSubmit, styledDivs, formData, setFormData, existingKey, valido, loader}
  const infoProps = {styledDivs, travelsData, handleEdit, handleDelete}

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-full'>
      <Travels {...formProps}/>
      <TravelsInfo {...infoProps}/>
    </div>
  )
}

export default Form
