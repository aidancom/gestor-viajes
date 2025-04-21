import React from 'react'
import AuthForm from '../components/AuthForm'

const Login = ({setLogged, user, setUser, setPassword, mode, password, handleLogin}) => {
  const authProps = {setLogged, user, setUser, setPassword, mode, password, handleLogin}

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <AuthForm {...authProps}/>
    </div>
  )
}

export default Login
