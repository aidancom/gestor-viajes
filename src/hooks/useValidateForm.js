
export const useValidateForm = (formData) => {
  
  const {travelDepartureDate, travelReturnDate} = formData.general
  const {travelCheckIn, travelCheckOut} = formData.accommodation

  function setHours(date) {
    return new Date(date).setHours(0,0,0,0)
  }

  function isValid() {

    const today = setHours(new Date())
    if (setHours(travelDepartureDate) < today) {
      alert("Error: la fecha de salida no puede ser inferior a la actual");
      return false;
    } 

    if (setHours(travelReturnDate) < setHours(travelDepartureDate)) {
      alert("Error: la fecha de regreso no puede ser inferior a la de salida");
      return false;
    } 

    if (setHours(travelCheckIn) < setHours(travelDepartureDate)) {
      alert("Error: la fecha de checkin no puede ser inferior a la fecha de salida");
      return false;
    } 

    if (setHours(travelCheckOut) < setHours(travelCheckIn) || setHours(travelCheckOut) > setHours(travelReturnDate)) {
      alert("Error: la fecha de checkout debe ser superior a la de checkin ni a la de retorno");
      return false;
    }

    return true;
  }
  
  return {
    isValid
  }
}