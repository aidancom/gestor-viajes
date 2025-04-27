import { useState, useEffect } from "react"
import { useValidateForm } from "./useValidateForm"
import { toast } from "react-toastify"

export const useForm = () => {

  const localTravels = () => JSON.parse(localStorage.getItem('travels')) || []

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
  const [loader, setLoader] = useState(false)
  const { isValid } = useValidateForm(formData)

  const valido = isValid()
  
  useEffect(() => localStorage.setItem('travels', JSON.stringify(travelsData)), [travelsData])

  const uniqueKey = () =>  Date.now().toString(36) + Math.random().toString(36).substring(2)

  const handleEdit = (data) => {  
    setExistingKey(data.key)
    setFormData(data)
  }

  const handleDelete = (data) => {
    const updatedTravel = travelsData.filter(travel => travel.key != data.key)
    setTravelsData(updatedTravel)
    toast.success("Viaje eliminado con éxito")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {valid, message} = isValid()
    setLoader(true)
    
    setTimeout(() => {
      if (!valid) {
        toast.error(message)
        setLoader(false)
        return
      }
      if(existingKey) {
        const updatedTravel = travelsData.map(travel => travel.key === existingKey ? {...formData, key: existingKey} : travel)
        setTravelsData(updatedTravel)
        setExistingKey("")
        toast.success("Viaje editado con éxito")
      } else {
        const newObject = {...formData, key: uniqueKey()}
        setTravelsData([...travelsData, newObject])
        toast.success("Viaje agregado con éxito")
      }
      setLoader(false)
      setFormData(initialTravelDataBase())
    }, 2000)

  }

  return {
    setFormData,
    formData,
    handleSubmit,
    handleEdit,
    travelsData,
    handleDelete,
    existingKey,
    valido,
    loader
  }
}