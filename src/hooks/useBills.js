import { useEffect, useMemo, useState } from "react"

export const useBills = (travelsData) => {

  const initialBudget = () => localStorage.getItem('budget') ? parseInt(localStorage.getItem('budget')) : 0

  const [budget, setBudget] = useState(initialBudget)
  const [modalOpen, setModalOpen] = useState(false)
  
  useEffect(() => localStorage.setItem('budget', budget.toString()), [budget])

  const totalBills = useMemo(() => travelsData.reduce((acc, num) => acc + parseInt(num?.cash?.travelBills) || 0, 0), [travelsData])
  const totalCosts = useMemo(() => travelsData.reduce((acc, num) => acc + parseInt(num?.cash?.travelCost) || 0, 0), [travelsData])
  const totalTravel = useMemo(() => totalBills + totalCosts, [totalBills, totalCosts])
  const remainingBudget = useMemo(() =>  budget - (totalBills + totalCosts), [budget, totalBills, totalCosts])
  const percent = useMemo(() =>  (((budget- remainingBudget) / budget) * 100).toFixed(0), [remainingBudget, budget])

  return {
    totalBills,
    totalCosts,
    totalTravel,
    percent,
    modalOpen,
    setModalOpen,
    setBudget,
    budget,
  }
}