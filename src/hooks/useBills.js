import { useEffect, useState } from "react"

export const useBills = (travelsData) => {

  const initialBudget = () => {
    const budgetLocal = localStorage.getItem('budget')
    return budgetLocal ? parseInt(budgetLocal) : 0
  }

  const [totalBills, setTotalBills] = useState(0)
  const [totalCosts, setTotalCosts] = useState(0)
  const [totalTravel, setTotalTravel] = useState(0)
  const [budget, setBudget] = useState(initialBudget)
  const [percent, setPercent] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('budget', budget.toString())
  }, [budget])

  useEffect(() => {
    const allBills = travelsData.reduce((acc, num) => acc + parseInt(num?.cash?.travelBills) || 0, 0)
    const allCost = travelsData.reduce((acc, num) => acc + parseInt(num?.cash?.travelCost) || 0, 0)
    const remainingBudget = budget - (allBills + allCost)
    const newPercent = (((budget- remainingBudget) / budget) * 100).toFixed(0)
    setTotalBills(allBills)
    setTotalCosts(allCost)
    setTotalTravel(allBills + allCost)
    setTimeout(() => {
      setPercent(newPercent)
    }, 1000)

  }, [travelsData, budget])




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