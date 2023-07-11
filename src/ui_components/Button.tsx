import { useState } from "react";

type TButton = {
  title: string;
  color?: "primary" | "secondary";
  className?: string
}

export default function Button(props: TButton) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    // handling if hover on button
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // handling if hover off button
    setIsHovered(false);
  };
  const checkBorderColor = props.color === "secondary" ? "border-secondary" : "border-primary"
  return (
    <button
      className={` ${props.color === "secondary" ? "text-secondary" : "text-primary"} bg-[#151515] relative px-5 py-3 m-2 max-sm:mt-4 max-sm:mx-0 outline-none text-sm tracking-wider uppercase font-spaced border-[#444444] 
        border-2 first:ml-0 last:mr-0 hover:border-transparent ${isHovered ? "flicker-effect" : ""}
         ${props.color === 'secondary' ? 'button-secondary' : 'button-primary'} hover:text-white
        hover:transition-all duration-350 ease-in-out ${props.className ?? ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {/* creating borders for all four sides for animation on hover */}
      <span className={`button-top-left transition-all ${checkBorderColor} ${isHovered ? '!-left-4 !-top-4' : ""}`}></span>
      <span className={`button-top-right transition-all ${checkBorderColor} ${isHovered ? '!-right-4 !-top-4' : ""}`}></span>
      <span className={`button-bottom-left transition-all ${checkBorderColor} ${isHovered ? '!-left-4 !-bottom-4' : ""}`}></span>
      <span className={`button-bottom-right transition-all ${checkBorderColor} ${isHovered ? '!-right-4 !-bottom-4' : ""}`}></span>
      {props.title}
    </button>
  )
}
