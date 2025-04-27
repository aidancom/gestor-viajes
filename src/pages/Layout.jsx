import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  const stylesButtons = 'group border-2 border-solid pt-[5px] pr-[15px] pb-[5px] pl-[15px] border-[#9487f5] bg-[#9487f5] rounded-[10px] hover:bg-[#fff] hover:shadow-[0_6px_0_0_#fff] hover:translate-y-[-7px] transition-all duration-200 ease-linear cursor-pointer'
  const styleHrefs = 'no-underline text-[#fff] group-hover:text-[#222] transition-all duration-200 ease-linear'
  return (
    <div className="min-h-screen flex flex-col">
      <nav className='absolute w-full'>
        <ul className='flex justify-end pr-5 pt-5 list-none'>
          <li className={`${stylesButtons} mr-4`}><Link className={styleHrefs} to="/">Iniciar sesión</Link></li>
          <li className={stylesButtons}><Link className={styleHrefs} to="/register">Registrarse</Link></li>
        </ul>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
