import React from 'react'
import Weather from './Weather'
import Motivation from './Motivation'
import Bills from './Bills'

const Dashboard = ({travelsData}) => {
  const styledDivs = 'mx-5 my-2 border-[3px] border-[#9487F5] rounded-[10px] md:m-5'
  return (
    <div className='h-full flex flex-col justify-evenly relative'>
      <div className='flex flex-col h-[50%] mb-10 md:grid md:grid-cols-3'>
        <div className={styledDivs}><Weather/></div>
        <div className={styledDivs}><Bills travelsData={travelsData}/></div>
        <div className={styledDivs}></div>
      </div>
      <div className='h-[50%]'>
        <div className='mx-5 border-[3px] border-[#9487F5] rounded-[10px] h-full'><Motivation/></div>
      </div>
    </div>
  )
}

export default Dashboard
