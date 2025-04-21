import {useState} from 'react'

const ModalNewBudget = ({budget, setBudget, setModalOpen}) => {

  const [inputBudget, setInputBudget] = useState(budget)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBudget(inputBudget)
    setModalOpen(false)
  }
  
  return (
    <div>
      <p>Define tu nuevo presupuesto</p>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputBudget} onChange={(e) => setInputBudget(e.target.value)}></input>
        <input className='cursor-pointer' type='submit' value="Cambiar"></input>
      </form>
    </div>
  )
}

export default ModalNewBudget
