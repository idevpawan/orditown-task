import primaryLogo from "../assets/images/primaryLogo.svg";
import Button from "../ui_components/Button";
import DownArrow from "../ui_components/DownArrow";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function SectionTwo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="section-two" className="min-h-screen max-sm:p-0 p-20 max-sm:mb-20">
      <div ref={ref} />
      {
        isInView && (
          <div className="flex max-lg:block items-center">
            {/* image */}
            <div className="w-full p-10">
              <motion.div initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 30 }}
                transition={{ duration: 1, delay: 0.5 }}>
                <img className=" max-sm:w-8/12 max-lg:w-6/12 max-lg:mx-auto max-[1536px]:w-8/12" src={primaryLogo} alt="" />
              </motion.div>
            </div>
            {/* details */}
            <div className="w-full p-5 ">
              <motion.div initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 30 }}
                transition={{ duration: 1, delay: 1 }}>
                <p className="font-sora font-semibold text-4xl max-sm:text-xl max-md:text-lg max-lg:text-2xl text-[#F29100] max-lg:text-center lg:text-left">
                  What is the Orditwon Appstore?
                </p>
                <p className="font-sora text-2xl my-5 max-lg:text-center leading-10 max-[1536px]:text-xl font-normal max-md:text-sm max-lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
                </p>
                <div className="flex max-lg:justify-center">
                  <Button title="Visit Appstore" className="text-base" />
                </div>
              </motion.div>
            </div>

          </div>
        )
      }
      {
        // arrow section
        isInView && <div className="mt-10 max-md:hidden">
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}>
            <DownArrow sectionId="#section-three" />
          </motion.div>
        </div>
      }
    </div>

  )
}

