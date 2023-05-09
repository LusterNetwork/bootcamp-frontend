import React from "react";
import { RiRefund2Fill } from "react-icons/ri";

const Refund = () => {
  return (
    <div className="mx-auto w-4/5 pt-32 ">
      <div className="rounded-md bg-white text-black py-8 px-20 text-justify">
        <div className="mt-8 flex flex-row items-center">
          <RiRefund2Fill className="mr-4 text-3xl" />
          <p className="text-2xl font-bold tracking-wider underline underline-offset-4">
            Refund
          </p>
        </div>
        <div className="mt-5 text-lg leading-8">
        <p>Luster is a proof-of-experience platform filling the gap between demand and supply of web3 developers in a decentralised manner.We conduct a few certification courses on web3 technologies to upskill web3 enthusiasts to web3 developers.</p>
<p className="font-medium mt-4 mb-2">We have a few cancellation and refund rules as follows:</p>
<ul className="list-disc ">
<li>Course fee to be paid while registering for the course</li>
<li>Course fee can be refunded before the 1 week of bootcamp starts.</li>
<li>Paid fees will be refunded after cancellation</li>
</ul>
        </div>
      </div>
    </div>
  );
};

export default Refund;
