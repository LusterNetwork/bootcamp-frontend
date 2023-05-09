import React from "react";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";



const Registeration_Modal = () => {
    const navigate = useNavigate();


    const handleSubmit=()=>{
        navigate("/");
    }

  return (
    <div className="inset-2/4 backdrop-blur-sm fixed h-full top-0 left-0 flex items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center bg-white text-black rounded-md p-8">
        <BsFillCheckCircleFill className="text-5xl text-blue-600"/>
       <p className="text-xl my-4 font-semibold"> You registered successfully !</p>
       <button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white mx-auto bg-blue-600 px-[1.5rem] py-[0.5rem] rounded-md shadow-md md:text-[16px]"
                >
                  OK
                </button>
      </div>
    </div>
  );
};

export default Registeration_Modal;
