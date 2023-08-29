import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBrain } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState(false);
  const [active, setActive] = useState(false);
  const[showOptions,setShowOptions]=useState(false);

  const gotohome = () => {
    navigate("/");
  };

  const toggle = () => {
    setActive(!active);
  };
 
 const handleOptionClick = () => {
    setShowOptions(false);
    setActive(false); // Hide the navbar on mobile screens
  };

  return (
    <>
      <nav className="w-[100%] z-50 top-0 shadow-md bg-neutral-900 bg-opacity-70 backdrop-blur-xl fixed text-[20px]">
        <div className="py-1 sm:px-5 flex flex-row items-center justify-between px-3 md:px-24 m-auto">
          <Link to="/"
              onClick={handleOptionClick}
            className="cursor-pointer flex items-center gap-2"
          >
            <img src="/assets/logo.png" height={50} width={50} />
            <h1 className="font-semibold italic text-2xl hidden md:block">
              LUSTER
            </h1>
          </Link>
          <div>
          <div className={active ? "block" : "hidden"}>
  <div className="absolute top-[3.6rem] left-0 right-0 w-full px-2 rounded-b-md ">
    <ul className="bg-slate-900 
    flex flex-col items-center text-center text-lg rounded-md transition-all ">
     <li className="pt-2 cursor-pointer">
    <Link to="https://errorocean.luster.network/user/feeds" className="" onClick={handleOptionClick}>
      Error Ocean
    </Link>
  </li>
      <li className="p-1">
        <div className="flex flex-col items-center justify-between">
          <div className="ml-4 flex items-center" onClick={()=>setShowOptions(!showOptions)}>
            Bootcamp
            <RiArrowDropDownLine className="ml-1 mt-1.5" />
          </div>
          <ul  className={`${showOptions ? "block" : "hidden"} text-center`}>
            <li className="p-1">
              <Link
                to="/bootcamps/ethereum"
                className="block px-4 py-2 hover:bg-black hover:text-white"
                onClick={handleOptionClick}
              >
              Ethereum
              </Link>
            </li>
            <li className="p-1">
              <Link
                to="/bootcamps/aibootcamp"
                className="block px-4 py-2 hover:bg-black hover:text-white"
                onClick={handleOptionClick}
              >
               Artificial Intelligence
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="p-1 cursor-pointer">
        <Link to="/aboutus" className=""
                onClick={handleOptionClick}>
          About us
        </Link>
      </li>
    </ul>
  </div>
</div>

            <div className="hidden md:block">
              {/* <button class="p-2 transform transition duration-500 hover:scale-105 flex font-semibold border-transparent rounded-lg items-center bg-gradient-to-r from-blue-400 to-purple-600 justify-center hover:shadow-lg">
  <Link to="/brainteaser" class="text-white flex items-center">
  <FaBrain className="mr-2 text-2xl"/>
  <p>Brain Teaser</p>
  </Link>
</button> */}

              <ul className="flex items-center gap-8">
                <li className="cursor-pointer hover:underline transition-all">
                    <Link
                      to="https://errorocean.luster.network/user/feeds"
                    >
                      Error Ocean
                    </Link>
                </li>
                <li
      className=""
      onMouseEnter={() => setShowOptions(true)}
    >
      <p className="cursor-pointer flex items-center transition-all hover:underline-offset-4">
        Bootcamp <RiArrowDropDownLine />
      </p>
      {showOptions && (
        <ul className="block absolute mt-2 bg-white text-black" onMouseLeave={() => setShowOptions(false)}>
          <li>
            <Link
              to="/bootcamps/ethereum"
              className="block px-4 py-2 hover:bg-black hover:text-white"
              onClick={handleOptionClick}
            >
              Ethereum
            </Link>
          </li>
          <li>
            <Link
              to="/bootcamps/aibootcamp"
              className="block px-4 py-2 hover:bg-black hover:text-white"
              onClick={handleOptionClick}
            >
              AI
            </Link>
          </li>
        </ul>
      )}
    </li>

                <li className="cursor-pointer  hover:underline transition-all hover:underline-offset-4">
                  <Link to="/aboutus" className="">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <div
              onClick={toggle}
              className="w-[2rem] ml-2 md:hidden cursor-pointer"
            >
              <div className="w-full h-0.5 bg-gray-100 line rounded-md"></div>
              <div className="w-full h-0.5 bg-gray-100 my-1.5 rounded-md"></div>
              <div className="w-full h-0.5 bg-gray-100 rounded-md"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;