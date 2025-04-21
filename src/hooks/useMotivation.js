import { useState, useEffect } from "react"
import {sentences} from "../db/motivational"
export const useMotivation = () => {

  const [data] = useState(sentences)
  const [randomSentence, setRandomSentence] = useState({})

  useEffect(() => {
    refreshSentence()
  }, [])

  const refreshSentence = () => {
    const newSentence = Math.floor(Math.random() * data.length)
    setRandomSentence(data[newSentence])
  }

  return {
    refreshSentence,
    randomSentence
  }
}