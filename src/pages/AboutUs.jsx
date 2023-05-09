import React from "react";
import about from "../../public/assets/about.jpg";

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
          <div className="mt-5 text-lg ">
            <p>
              Luster upskills web3 enthusiasts to web3 developers by conducting
              cohort-based live learning bootcamps on Ethereum, Solana,
              Hyperledger and Smart Contract auditing, etc.
            </p>
            <p className="my-4">
              If you have any query regrading Site, Advertisement and any other
              issue, please feel free to contact at{" "}
              <b className="tracking-wider text-cyan-600">
                support@cryptonaukri.com
              </b>
            </p>

            <p>
              Address - Ramnagar Bondegaon, Bramhapuri, Tah. Bramhapuri - 441206
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
