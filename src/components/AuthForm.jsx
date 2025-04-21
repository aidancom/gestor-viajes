import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

const AuthForm = ({mode, user, setUser, setPassword, setEmail, email, password, handleLogin, handleRegister}) => {
  const [visible, setVisible] = useState(null)
  const styleDivInputs = 'flex flex-col'
  const styleInputs = 'mt-1 mb-2 border-2 border-solid border-[#9583a469] rounded-[5px] pl-1'

  return (
    <div className='flex flex-col w-[300px]'>
        <h1 className='text-center text-[#fff] text-[2em] mb-2'>{mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}</h1>
        <form className='bg-white border-2 border-solid border-[#9487f5] rounded-[10px] p-3' onSubmit={mode == 'login' ? handleLogin : handleRegister}>
          <fieldset>
            <div className={styleDivInputs}>
              <label htmlFor="username">Usuario</label>
              <input className={styleInputs} type="text" id="username" name="username" placeholder='Escribe tu usuario' value={user} onChange={(e) => setUser(e.target.value)} />
            </div>
            
            <div className={styleDivInputs + ' relative'}>
              <label htmlFor="password">Contraseña</label>
              <FontAwesomeIcon className='absolute top-[53%] left-[90%] bg-white cursor-pointer' icon={visible ? faEye : faEyeSlash} onMouseUp={() => setVisible(false)} onMouseDown={() => setVisible(true)} />
              <input className={styleInputs} type={visible ? 'text' : 'password'} id="password" name="password" placeholder='Escribe tu contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />  
            </div>
            {mode === 'register' &&
              <div className={styleDivInputs}>
                <label htmlFor="password">Email</label>
                <input className={styleInputs} type="email" id="email" name="email" placeholder='Escribe tu email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            }
            <div className='flex justify-end'>
              <input className='border-2 border-solid border-[#9487f5] bg-[#9487f5] pt-[5px] pr-[15px] pb-[5px] pl-[15px] mt-2 rounded-[10px] transition-all duration-200 ease-linear cursor-pointer text-[#fff] hover:bg-[#fff] hover:text-[#222] hover:shadow-[0_6px_0_0_#fff]' type='submit' value={mode == 'login' ? 'Entrar' : 'Registrar'} />
            </div>
          </fieldset>
        </form>
    </div>
  )
}

export default AuthForm
