import { useState, useEffect } from "react"

export const useForm = () => {

  const localTravels = () => {
    return JSON.parse(localStorage.getItem('travels'))
  }

  const initialTravelDataBase = () => {
    return {
      general : {
        travelName: "",
        travelReason: "",
        travelDepartureDate: "",
        travelReturnDate: "",
        travelDestination: "",
        travelDeparturePlace: "",
      },
      accommodation: {
        travelHotelName: "",
        travelHotelDirection: "",
        travelHotelPhone: "",
        travelCheckIn: "",
        travelCheckOut: "",
        travelHotelRoomType: "",
      },
      cash: {
        travelCost: "",
        travelBills: "",
        travelPaymentMethod: "",
        travelRefund: "",
      },
      travelAdditionalNotes: ""
    }
  }

  const [travelsData, setTravelsData] = useState(localTravels)
  const [existingKey, setExistingKey] = useState("")
  const [formData, setFormData] = useState(initialTravelDataBase())
  
  useEffect(() => {
    localStorage.setItem('travels', JSON.stringify(travelsData))
  }, [travelsData])

  const uniqueKey = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }

  const handleEdit = (data) => {  
    setExistingKey(data.key)
    setFormData(data)
  }

  const handleDelete = (data) => {
    const updatedTravel = travelsData.filter(travel => travel.key != data.key)
    setTravelsData(updatedTravel)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Aqui empezaria la validacion, englobaria todo el if (hacerlo en el useValidateForm)
    
    if(existingKey) {
      const updatedTravel = travelsData.map(travel => travel.key === existingKey ? {...formData, key: existingKey} : travel)
      setTravelsData(updatedTravel)
      setExistingKey("")
    } else {
      const newObject = {...formData, key: uniqueKey()}
      
      setTravelsData([...travelsData, newObject])
    }
    setFormData(initialTravelDataBase())
  }

  return {
    setFormData,
    formData,
    handleSubmit,
    handleEdit,
    travelsData,
    handleDelete,
    existingKey
  }
}