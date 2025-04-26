import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './pages/Layout'
import Panel from './pages/Panel'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { AnimatePresence, motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import { Zoom } from 'react-toastify'

const App = () => {
  const {handleSubmit, password, setPassword, setEmail, user, setLogged, logged, setUser, handleRegister, handleLogin} = useAuth()
  const authProps = { user, password, setUser, setPassword, setEmail, handleLogin, handleRegister, handleSubmit, setLogged, logged }
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1d2b64] to-[#f8cdda]">
      {logged ?
        <AnimatePresence mode='wait'>
          <motion.div className='flex flex-col min-h-screen' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <header className='flex justify-end p-5 fixed'>
              <a className='group border-2 border-solid pt-[5px] pr-[15px] pb-[5px] pl-[15px] border-[#9487f5] bg-[#9487f5] rounded-[10px] hover:bg-[#fff] hover:shadow-[0_6px_0_0_#fff] hover:translate-y-[-7px] transition-all duration-200 ease-linear cursor-pointer no-underline text-[#fff] hover:text-[#222]' onClick={() => setLogged(false)}>Salir</a>
            </header>
            <ToastContainer 
              transition={Zoom} 
              autoClose={1500} 
              pauseOnHover={false}
              pauseOnFocusLoss={false}
              newestOnTop={true}
            />
            <Panel user={user}/>
          </motion.div>
        </AnimatePresence>
       :
       <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Layout/>}>
                <Route index element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <Login mode="login" {...authProps}/>
                  </motion.div>}/>
                <Route path="/register" element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <Register mode="register" {...authProps}/>
                  </motion.div>}/>
              </Route>
          </Routes>
        </AnimatePresence>
        
      }
    </div>
  )
}

export default App
