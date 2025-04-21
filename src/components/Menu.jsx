import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faPlane, faChartPie } from '@fortawesome/free-solid-svg-icons'

const Menu = ({setActivePanel}) => {
  const styledIcons = 'text-[#9487f5] hover:scale-125 transition cursor-pointer p-2'
  return (
    <div className='flex flex-row justify-center items-center h-full text-[30px] lg:flex-col'>
      <FontAwesomeIcon onClick={() => setActivePanel('calendar')} className={styledIcons} icon={faCalendarDays} />
      <FontAwesomeIcon onClick={() => setActivePanel('form')} className={styledIcons} icon={faPlane} />
      <FontAwesomeIcon onClick={() => setActivePanel('dashboard')} className={styledIcons} icon={faChartPie} />
    </div>
  )
}

export default Menu
