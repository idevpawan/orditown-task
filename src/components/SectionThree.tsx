import SecondaryLogo from "../assets/images/secondaryLogo.svg";
import Button from "../ui_components/Button";
import DownArrow from "../ui_components/DownArrow";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function SectionThree() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    // this section similar to SectionTwo, just reversing the order of two container
    <div id="section-three" className="min-h-screen max-sm:p-0 p-20 max-sm:mb-20 ">
      <div ref={ref} />
      {
        // displaying only if the sections comes user view 
        isInView && (
          <div className="flex flex-row-reverse max-lg:flex-row max-lg:block items-center lg:gap-40">
            {/* image */}
            <div className="w-full p-10">
              <motion.div initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 30 }}
                transition={{ duration: 1, delay: 0.5 }}>
                <img className="max-sm:w-8/12 max-lg:w-6/12 max-lg:mx-auto max-sm:mx-auto max-[1536px]:w-9/12" src={SecondaryLogo} alt="" />
              </motion.div>
            </div>
            {/* details */}
            <div className="w-full p-5">
              <motion.div initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 30 }}
                transition={{ duration: 1, delay: 1 }}>
                <p className="font-sora font-semibold text-4xl max-md:text-xl max-lg:text-2xl text-secondary max-lg:text-center lg:text-left">
                  What is the Orditwon Appstore?
                </p>
                <p className="font-sora text-2xl my-5 max-lg:text-center leading-10 max-[1536px]:text-xl font-normal max-md:text-base max-lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
                </p>
                {/* button */}
                <div className="flex max-lg:justify-center">
                  <Button title="Visit Appstore" color="secondary" className="text-base" />
                </div>
              </motion.div>
            </div>

          </div>
        )
      }
      {
        // arrow section if it comes in view
        isInView && <div className="mt-10 max-md:hidden">
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}>
            <DownArrow sectionId="#section-four" />
          </motion.div>
        </div>
      }
    </div>

  )
}

