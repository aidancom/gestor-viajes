import { toast } from "react-toastify"

export const useValidateForm = (formData) => {
  
  const {travelDepartureDate, travelReturnDate} = formData.general
  const {travelCheckIn, travelCheckOut} = formData.accommodation

  function setHours(date) {
    return new Date(date).setHours(0,0,0,0)
  }

  function isValid() {
    const today = setHours(new Date());

    if (setHours(travelDepartureDate) < today) {
      return { valid: false, message: "La fecha de salida no puede ser inferior a la actual." };
    }
    if (setHours(travelReturnDate) < setHours(travelDepartureDate)) {
      return { valid: false, message: "La fecha de regreso no puede ser inferior a la de salida." };
    }
    if (setHours(travelCheckIn) < setHours(travelDepartureDate)) {
      return { valid: false, message: "La fecha de check-in no puede ser inferior a la de salida." };
    }
    if (setHours(travelCheckOut) < setHours(travelCheckIn) || setHours(travelCheckOut) > setHours(travelReturnDate)) {
      return { valid: false, message: "La fecha de checkout debe ser entre check-in y regreso." };
    }
    return { valid: true };
  }
  
  return {
    isValid
  }
}