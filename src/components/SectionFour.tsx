import Footer from '../ui_components/Footer'
import PartOne from "../assets/images/f1.svg";
import PartTwo from "../assets/images/f2.svg";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionFour() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id='section-four' className='min-h-screen relative text-center pt-12'>
      <div ref={ref} />
      {
        isInView && (
          <>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: 1 }}>
              {/* header text */}
              <p className='uppercase font-sora font-medium text-[54px] leading-[68px] max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-[1536px]:text-4xl'>a platform <span className='block'>brought to you by</span></p>
            </motion.div>
            {/* images container*/}
            <motion.div initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}>
              <div className='flex justify-around gap-20 mt-16 max-md:block md:px-10 max-md:pb-40'>
                <div className="w-full max-md:p-10 max-md:w-11/12 max-[1536px]:w-5/12 mx-auto">
                  <img className=' ml-auto' src={PartOne} alt="" />
                </div>
                <div className="w-full max-md:p-10 max-md:w-11/12 max-[1536px]:w-5/12 mx-auto">
                  <img className='mr-auto' src={PartTwo} alt="" />
                </div>
              </div>
            </motion.div>
          </>
        )
      }
      {/* footer section */}
      <Footer />
    </div>
  )
}
