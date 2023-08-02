import React from "react";
import about from "../../public/assets/about.jpg";
import { Link } from "react-router-dom";

const AboutUS = () => {
  return (
    <div className="mx-auto w-4/5 pt-32 ">
      <div className="rounded-md bg-white min-h-screen flex flex-col text-black py-8 px-20 text-justify">
        <div className="flex justify-center">
          <img src={about} className="h-[35rem]" alt="aboutImage" />
        </div>
        <div>
          <div className="text-2xl font-bold tracking-wider underline underline-offset-4">
            About Us
          </div>
          <div className="mt-5 text-lg">
            <p>
            Luster is a tokenized talent marketplace for emerging technologies like AI/ML, Blockchain, Metaverse, Cyber Security, etc.
            </p>
           <p className="my-4">
           We have reduced 12-month learning to just 2-month and 2-month hiring to just 1-week through our unique learning and hiring process.
           </p>
           <p className="my-4">
           We conduct live certification courses on AI/ML, Blockchain. We will be adding other courses very soon
           </p>
           <Link to="/bootcamps/ethereum">
           <p className="my-4 text-blue-500 font-semibold">
           Ethereum Bootcamp
           </p>
           </Link>
           <Link to="/bootcamps/aibootcamp">
           <p className="my-4 text-blue-500 font-semibold">AI/ML Bootcamp</p>
           </Link>
           <p>
           Whether you are a student, working professional or any IT business, you can connect with us to know about our services.
           </p>
            <p>
You can directly reach out at ceo@luster.network or call at 8788305490.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
