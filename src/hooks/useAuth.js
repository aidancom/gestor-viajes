import { useState, useEffect } from "react"

export const useAuth = () => {

  const setLoginState = () => {
    const storedLogin = localStorage.getItem('login')
    return storedLogin ? JSON.parse(storedLogin) : false
  }

  const setUserState = () => {
    const storedUser = JSON.parse(localStorage.getItem('userinfo'))
    return storedUser?.user || ''
  }

  const setPasswordState = () => {
    const storedUser = JSON.parse(localStorage.getItem('userinfo'))
    return storedUser?.pass || ''
  }

  const [user, setUser] = useState(setUserState)
  const [password, setPassword] = useState(setPasswordState)
  const [email, setEmail] = useState("")
  const [logged, setLogged] = useState(setLoginState)
  const [isRegister, setIsRegister] = useState(false)
  const [newUser, setnewUser] = useState({})

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(logged))
  }, [logged])

  useEffect(() => {
    const userInfo = {"user": user, "pass": password}
    localStorage.setItem('userinfo', JSON.stringify(userInfo))
  }, [user, password])


  const handleRegister = (e) => {
    e.preventDefault()
    if (user === '' || password === '' || email === '') {
      alert("Error al registrar: Campos vacíos")
    } else {
      const newUserName = {
        "nombre": user, 
        "contrasenya": password,
        "email": email
      }
      setnewUser(newUserName)
      setLogged(true)
      window.history.replaceState(null, '', '/')
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (user === '' || password === '') {
      alert("Error al loggearse: Campos vacíos")
    } else {
      setLogged(true)
      window.history.replaceState(null, '', '/')
    }
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