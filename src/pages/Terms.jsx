import React from "react";
import {TfiWrite} from 'react-icons/tfi'

const Terms = () => {
  return (
    <div className="mx-auto w-4/5 pt-32 " >
    <div className="rounded-md bg-white  text-black py-8 px-20 text-justify">
      <div className="flex flex-row items-center">
      <TfiWrite className="text-2xl mt-9 mr-5"/>
        <p className="mt-8 text-2xl font-extrabold tracking-wide underline underline-offset-4">
         Terms &amp; Conditions
        </p>
        </div>
        <div className="mt-5 text-lg ">
          <p className="leading-8 mb-4">
            At CryptoNaukri, accessible from{" "}
            <a href="http://www.cryptonaukri.com/" className="text-cyan-600">
              http://www.cryptonaukri.com/
            </a>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by CryptoNaukri and how we use it.
          </p>

          <p className="mb-6 leading-8">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to Contact through email at{" "}
            <b className="tracking-wider text-cyan-600">support@cryptonaukri.com</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

