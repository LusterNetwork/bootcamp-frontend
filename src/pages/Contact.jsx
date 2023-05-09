import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { IoMdMail, IoIosCall } from "react-icons/io";
import { MdLocalPostOffice, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full min-h-screen mt-12 flex justify-center items-center">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-white w-full max-w-5xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-black overflow-hidden">
        <div className="md:py-4 flex flex-col justify-around w-3/4">
          <div className="">
            <h1 className="font-extrabold text-[#2c2b73] text-4xl tracking-wide ">
              Contact Us
            </h1>
            <p className="text-black text-sm pt-2 leading-7">
              Want to get in touch? We'd love to hear from you.
              <br /> Here's how you can reach us...
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <IoIosCall className="text-xl text-[#2c2b73]" />
              <span className="select-all">+(91) 7070707070</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdLocalPostOffice class="text-xl text-[#2c2b73]" />
              <span className="select-all">support@cryptonaukri.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdLocationOn className="text-xl text-[#2c2b73]" />
              <span className="select-all">
                244/1, Ramnagar Bondegaon, Bramhapuri, Tah. Bramhapuri,
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -top-28 -right-28 z-0 bg-[#2c2b73] w-40 h-40 rounded-full"></div>
          <div className="absolute -bottom-16 -left-28 z-0 bg-[#2c2b73] w-40 h-40 rounded-full"></div>
          <div
            className="relative z-10 w-full md:w-80 h-full bg-slate-300 p-8 text-gray-600 rounded-xl shadow-lg"
            style={{ minHeight: "300" }}
          >
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label for="" className="text-base font-bold ">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#2c2b73]"
                />
              </div>
              <div>
                <label for="" className="text-base font-bold ">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#2c2b73]"
                />
              </div>
              <div>
                <label for="" className="text-base font-bold ">
                  Message
                </label>
                <textarea
                  placeholder="Type your message here"
                  className="ring-1 resize-none ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#2c2b73]"
                  rows="4"
                ></textarea>
              </div>
              <button className="inline-block self-end bg-[#2c2b73] text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
