import { useState } from "react"

export const useValidateForm = () => {

  const [valid, setValid] = useState(false)

  function isValid() {

  }
  
  return {
    isValid,
    valid
  }
}