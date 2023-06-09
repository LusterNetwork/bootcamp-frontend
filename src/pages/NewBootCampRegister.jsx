import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registeration_Modal from "./Registeration_Modal";

const NewBootCampRegister = () => {
  const [user, setUser] = useState({
    name: "",
    phone_no: "",
    email: "",
    experience: "",
    coupon: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Regular expressions for email and phone number format
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\d{10}$/;
    // Object to store error messages
    const errors = {};

    if (!user.name) {
      errors.name = "Please enter your name";
    }

    if (!user.email) {
      errors.email = "Please enter your email address";
    } else if (!emailRegex.test(user.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!user.phone_no) {
      errors.phone_no = "Please enter your phone number";
    } else if (!phoneRegex.test(user.phone_no)) {
      errors.phone_no = "Please enter a valid 10-digit phone number";
    }

    if (!user.experience) {
      errors.experience = "Please select your experience level";
    }

    if (Object.keys(errors).length > 0) {
      // Display error messages for the user
      const errorMessages = Object.values(errors).join(", ");
      toast.error(`Please fill all the values correctly: ${errorMessages}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setLoading(true);
    sendRequest();
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5003/", {
        name: user.name,
        email: user.email,
        phoneNumber: user.phone_no,
        experience: user.experience,
        bootcamp: user.bootcamp,
        coupon: user.coupon,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      toast.error(`Error : ${error}`, {
        position: "bottom-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      <div className="pt-16 w-full text-[14px]">
        <ToastContainer />
        <div className="w-full flex flex-col items-center justify-center py-12 ">
          <h1 className="text-3xl md:text-5xl px-3 mt-3 text-center font-semibold mb-2">
            Register now for web3 Bootcamp
          </h1>
          <h1 className="text-3xl md:text-5xl px-3 text-center font-semibold mb-2"></h1>
          <div className=" mt-8 rounded-2xl">
            <div className="flex flex-col bg-gradient-to-r from-indigo-900 to-blue-900  items-center justify-center shadow-md rounded-md px-[1.5rem] py-[1.5rem]">
              <form className="flex flex-col gap-5">
                <div className="">
                  <p className="ml-2 mb-2 text-[16px]">Name*</p>
                  <input
                    placeholder="Vitalik buterin"
                    required={true}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    value={user.name}
                    className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                  />
                </div>

                <div className="">
                  <p className="ml-2 mb-2 text-[16px]">Email*</p>
                  <input
                    placeholder="vitalik@isking.eth"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    required={true}
                    value={user.email}
                    type="email"
                    className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                  />
                </div>

                <div className="">
                  <p className="ml-2 mb-2 text-[16px]">Phone Number*</p>
                  <input
                    placeholder="+911234567890"
                    onChange={(e) =>
                      setUser({ ...user, phone_no: e.target.value })
                    }
                    required={true}
                    type="tel"
                    value={user.phone_no}
                    className="bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                  />
                </div>

                <div className="">
                  <p className="ml-2 mb-2 text-[16px]">
                    Your experience level*
                  </p>
                  <select
                    defaultValue="Experience Level"
                    onChange={(e) =>
                      setUser({ ...user, experience: e.target.value })
                    }
                    value={user.experience}
                    required={true}
                    placeholder="Experiance"
                    className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>

                <div>
                  <p className="ml-2 mb-2 text-[16px]">Coupon Code</p>
                  <input
                    placeholder="Ex: BOOTCAMP2023"
                    onChange={(e) =>
                      setUser({ ...user, coupon: e.target.value })
                    }
                    value={user.coupon}
                    type="email"
                    className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                  />
                </div>

                <button
                  disabled={!user.bootcamp}
                  type="submit"
                  onClick={handleSubmit}
                  className="mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 px-[3rem] py-[0.5rem] rounded-md shadow-md md:text-[16px]"
                >
                  {loading ? "Loading..." : "Pay Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Registeration_Modal />}
    </>
  );
};
export default NewBootCampRegister;
