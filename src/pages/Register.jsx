import React from 'react'
import AuthForm from '../components/AuthForm'

const Register = ({user, setUser, setPassword, setEmail, email, password, handleRegister, mode}) => {
  const authProps = {user, setUser, setPassword, setEmail, email, password, handleRegister, mode}

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <AuthForm {...authProps}/>
    </div>
  ) 
}

export default Register
