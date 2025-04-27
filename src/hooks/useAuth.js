import { useState, useEffect } from "react"
import { toast } from "react-toastify"

export const useAuth = () => {

  const setLoginState = () => localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login')) : false
  const setUserState = () => JSON.parse(localStorage.getItem('userinfo'))?.user || ''
  const setPasswordState = () => JSON.parse(localStorage.getItem('userinfo'))?.pass || ''

  const [user, setUser] = useState(setUserState)
  const [password, setPassword] = useState(setPasswordState)
  const [email, setEmail] = useState("")
  const [logged, setLogged] = useState(setLoginState)
  const [isRegister, setIsRegister] = useState(false)
  const [newUser, setnewUser] = useState({})

  useEffect(() => localStorage.setItem('login', JSON.stringify(logged)), [logged])

  useEffect(() => {
    const userInfo = {"user": user, "pass": password}
    localStorage.setItem('userinfo', JSON.stringify(userInfo))
  }, [user, password])


  const handleRegister = (e) => {
    e.preventDefault()
    if (user === '' || password === '' || email === '') {
      toast.error("Error al registrar: Campos vacíos")
      return
    } 
    const newUserName = {
      "nombre": user, 
      "contrasenya": password,
      "email": email
    }
    setnewUser(newUserName)
    setLogged(true)
    window.history.replaceState(null, '', '/')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (user === '' || password === '') {
      toast.error("Error al loggearse: Campos vacíos")
      return
    } 
    setLogged(true)
    window.history.replaceState(null, '', '/')
  } 

  return {
    setPassword,
    setLogged,
    setEmail,
    isRegister,
    setIsRegister,
    setUser,
    password,
    user,
    email,
    logged,
    handleRegister,
    handleLogin
  }
}