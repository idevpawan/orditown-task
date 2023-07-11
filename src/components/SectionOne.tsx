import { TypeAnimation } from "react-type-animation";
import whiteLogo from "../assets/images/whiteLogo.svg"
import Button from "../ui_components/Button"
import DownArrow from "../ui_components/DownArrow";
import { motion } from "framer-motion";

export default function SectionOne() {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}
    >
      <div className="text-center hero-container">
        <div className=" z-20">
          <p className="font-sora max-sm:text-lg text-[28px] mb-8 ">Welcome to</p>
          <div className="flex gap-2 justify-center items-center">
            <img className="max-sm:w-16" src={whiteLogo} alt="" /> {/* logo */}
            <p className="font-sora font-bold text-[79px] max-sm:text-4xl">rditown</p>
          </div>
          {/* typing effect */}
          <p className="text-[45px] font-sora font-extrabold mt-8 max-sm:text-2xl">We <TypeAnimation
            className="text-secondary"
            sequence={[
              'Build...', // Types 'One'
              2000, // Waits 2s
              'Innovate...', // Deletes 'One' and types 'Two'
              2000 // Waits 2s
            ]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
          /> <span className={`text-secondary`}>|</span></p>
          {/* group button */}
          <div className="flex max-sm:flex-col justify-center mt-24">
            <Button title="visit appstore" color="primary" />
            <Button title="visit orditown" color="secondary" />
          </div>
          {/* arrow section */}
          <div className="mt-28 max-md:hidden">
            <DownArrow sectionId="#section-two" /> 
          </div>
        </div>
      </div>
    </motion.div>
  )
}
