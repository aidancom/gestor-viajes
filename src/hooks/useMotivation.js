import { useState, useEffect } from "react"
import {sentences} from "../db/motivational"
export const useMotivation = () => {

  const [data] = useState(sentences)
  const [randomSentence, setRandomSentence] = useState({})

  useEffect(() => refreshSentence(), [])

  const refreshSentence = () => setRandomSentence(data[Math.floor(Math.random() * data.length)])

  return {
    refreshSentence,
    randomSentence
  }
}