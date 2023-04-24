import { IoMdArrowRoundBack } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Header() {
  return (

    <section className=" mt-8">
      <div className=" flex items-center px-4">
        <IoMdArrowRoundBack className=" text-[#8E919A]" />
        
        <h1 className=" text-lg font-bold text-[#8E919A] mx-auto text-center pb-2"> Schedule </h1>
        <HiDotsHorizontal className=" text-[#8E919A]" />
      </div>

      {/* Calender Scroll */}
      <div className="flex items-center pt-4 justify-between ">
        <p className=" text-[#DADBDF] text-xs font-bold"> 23 </p>
        <p className=" text-[#DADBDF] text-xs font-bold"> Yesterday </p>
        <p className=" bg-white font-bold text-[#739EE2] py-1 px-3 rounded-3xl drop-shadow-[0_35px_35px_rgba(120,167,237,0.25)]  text-xs"> Today </p>
        <p className=" text-[#DADBDF] text-xs font-bold"> March 24</p>
        <p className=" text-[#DADBDF] text-xs font-bold"> Ma</p>

      </div>
    </section>
  )
}
