import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {CgProfile} from "react-icons/cg"
import {MdOutlineSpaceDashboard, MdLogout, MdBusiness} from 'react-icons/md';
import {AiFillCaretDown, AiOutlineUser, AiFillHome} from 'react-icons/ai';
import {FaBrain} from "react-icons/fa";
import Timer from "../../pages/Timer.jsx";

const Header = () => {

  const navigate = useNavigate();
  const [color, setColor] = useState(false);
  const [active, setActive] = useState(false);

  const gotohome =()=>{
    navigate("/");
  }
  const toggle = ()=>{
    setActive(!active)
  }

  return(
    <>
    <nav className='w-[100%] z-50 top-0 shadow-md bg-neutral-900 bg-opacity-70 backdrop-blur-xl fixed text-[20px]'>
    <div className="bg-slate-400">
      <Timer/>
    </div>
      <div className="py-5 sm:px-5 flex flex-row items-center justify-between px-3 md:px-24 m-auto">
          <div onClick={gotohome} className="cursor-pointer flex items-center gap-2">
            <img src='/assets/logo.png' height={50} width={50}/> <h1 className="font-semibold italic text-2xl hidden md:block">LUSTER</h1>
          </div>
          <div>
            <div className={active ? 'block' : 'hidden'}>
                <div className="absolute top-44 left-0 right-0 w-full px-2 rounded-b-md">
                    <ul className="bg-slate-900 flex flex-col items-center text-lg rounded-md transition-all">
                        <li className="p-1 "><Link to="/bootcamps/ethereum" className="">Bootcamp</Link></li>
                        <li className="p-1 cursor-pointer "><Link href="/aboutus" className="">About us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="hidden md:block" >
                  {/* <button class="p-2 transform transition duration-500 hover:scale-105 flex font-semibold border-transparent rounded-lg items-center bg-gradient-to-r from-blue-400 to-purple-600 justify-center hover:shadow-lg">
  <Link to="/brainteaser" class="text-white flex items-center">
  <FaBrain className="mr-2 text-2xl"/>
  <p>Brain Teaser</p>
  </Link>
</button> */}

<ul className="flex items-center gap-8">
                  <li className="cursor-pointer hover:underline transition-all">
                  <Link to="/" onClick={() => setTimeout(() => window.location.href = "/#POE", 0)}>POE</Link>
                  </li>
                  <li className="group relative">
  <p className="cursor-pointer hover:underline transition-all hover:underline-offset-4">
    Bootcamp
  </p>
  <ul className="hidden group-hover:block absolute mt-2 bg-black">
    <li className="py-1">
      <Link
        to="/bootcamps/ethereum"
        className="block px-4 py-2 hover:bg-white hover:text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        Ethereum
      </Link>
    </li>
    <li className="py-1">
      <Link
        to="/bootcamps/aibootcamp"
        className="block px-4 py-2 hover:bg-white hover:text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        AI
      </Link>
    </li>
  </ul>
</li>

                    <li className="cursor-pointer  hover:underline transition-all hover:underline-offset-4">
                      <Link to="/aboutus" className="">About us</Link>
                    </li>

                  </ul>
            </div>
          </div>
            <div className="flex md:hidden items-center gap-2">
                <div onClick={toggle} className="w-[2rem] ml-2 md:hidden cursor-pointer">
                  <div className="w-full h-0.5 bg-gray-100 line rounded-md"></div>
                  <div className="w-full h-0.5 bg-gray-100 my-1.5 rounded-md"></div>
                  <div className="w-full h-0.5 bg-gray-100 rounded-md"></div>
                </div>
          </div>
      </div>
    </nav>
    </>
  )
};
export default Header;