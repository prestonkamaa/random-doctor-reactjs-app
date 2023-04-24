import useFetch  from "./useFetch";
import { RiMessage2Fill } from "react-icons/ri";
import Doc from "../images/dr.png"

export default function DetailsCard() {

  const {data, error, loading, newDoc} = useFetch("https://randomuser.me/api/")
  if (loading) return <p className=" text-center mt-36 mx-auto p-4  w-72 h-auto drop-shadow-[0_35px_35px_rgba(120,167,237,0.25)] bg-white rounded-md"> Loading Doctor Information</p>
  if (error)  return <p className=" text-center mt-36 mx-auto p-4  w-72 h-auto drop-shadow-[0_35px_35px_rgba(120,167,237,0.25)] bg-white rounded-md"> {error}</p>

  const Doctor = data.map((Docs) => {

    const {name:{first,last}, location:{country,postcode}, picture:{large}, login:{uuid}  } = Docs

    return(

    <section key={uuid} className=" mt-2">  
      <img src={Doc} alt="" className=" mx-auto"/>
      <div className=" mt-[-8rem] mx-auto p-4  w-72 h-auto drop-shadow-[0_35px_35px_rgba(120,167,237,0.25)] bg-white rounded-md">
          
          <div className=" flex items-top justify-between">
            <div >
              <p className=" text-[#739EE2] text-sm font-bold">
                Appointment 
              </p>
              <hr className=" w-3 border-2 rounded-full  border-[#739EE2] mt-1"/>
            </div>

            <p className="w-8 h-8 bg-[#739EE2] rounded-full items-center justify-center flex shadow-[0_25px_25px_rgba(120,167,237,0.25)]">
              < RiMessage2Fill className=" cursor-pointer text-white" />
            </p>
            
          </div>

          <div>
            <div className="mt-4">
              <p className=" text-[#808489] font-semibold text-lg "> Dr. {first} {last} </p>
              <p className=" text-[#808489] text-sm"> Need to conslt from a qualified 24/7 surgical doctor advice. </p>
            </div>
            <div className=" flex mt-5">
              <p className=" text-[#808489] font-semibold text-sm mr-auto">Doc No.: {postcode} </p> 
              <p className=" text-[#808489] font-semibold  text-sm">Location: {country} </p>
            </div>
          </div>
      </div>

      <div className=" bg-white pt-5 mt-[-2rem]">
        <div className="pt-9 text-[#808489] text-center font-semibold  text-sm">
            2 of 100
        </div>
        <div className="flex items-center pt-3"> 
            <div className=" sm:w-3/12  bg-opacity-50 px-4">
                <img src={large} onClick={newDoc} alt="" className=" cursor-pointer rounded-full max-w-full h-auto align-middle border-none" /> 
            </div>
            <div className=" sm:w-3/12 px-4">
                <img src={large} onClick={newDoc} alt="" className=" cursor-pointer rounded-full max-w-full h-auto align-middle border-none" />
            </div>
            <div className=" sm:w-4/12 px-4">
                <img src={large} onClick={newDoc} alt="" className=" cursor-pointer rounded-full max-w-full h-auto align-middle border-none" />
            </div>
            <div className=" sm:w-3/12 px-4">
                <img src={large} onClick={newDoc} alt="" className=" cursor-pointer rounded-full max-w-full h-auto align-middle border-none" />
            </div>
            <div className=" sm:w-3/12 px-4">
                <img src={large} onClick={newDoc} alt="" className=" cursor-pointer rounded-full max-w-full h-auto align-middle border-none" />
            </div> 
        </div>
        <div className=" text-[#739EE2] text-sm font-bold mt-2 text-center cursor-pointer" onClick={newDoc}>
            Next Doctor
        </div>
        <div className=" pt-3  pb-10 " >
            <hr className=" mx-auto w-5 border-2 rounded-full border-[#739EE2] " />
        </div>
      </div>     
    </section>
    )
  })

  return (
    <>
      {Doctor} 
    </>
    
  )
}
