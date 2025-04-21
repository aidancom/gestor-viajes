import { useMotivation } from "../hooks/useMotivation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import { AnimatePresence, motion } from "framer-motion"

const Motivation = () => {
  const {refreshSentence, randomSentence} = useMotivation()
  const {sentence, author} = randomSentence
  return (
    <div className="pb-3 lg:h-full lg:relative lg:pb-0">
      <h2 className='pl-3 py-3 font-bold text-[20px] md:text-2xl z-[999] relative'>Frase <span className="text-[#9487f5]">motivacional</span> aleatoria <FontAwesomeIcon onClick={() => refreshSentence()} className="pl-2 cursor-pointer" icon={faArrowsRotate}/></h2>
      <AnimatePresence mode="wait">
        <motion.div className="h-full w-full  top-0 flex justify-center items-center flex-col text-center px-4 lg:absolute" key={sentence} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
          <p className="italic">"{sentence}"</p>
          <p className="font-medium mt-2">- {author}</p>
        </motion.div>
      </AnimatePresence> 
    </div>
  )
}

export default Motivation
