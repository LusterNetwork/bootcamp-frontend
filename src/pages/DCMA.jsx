import React from "react";
import { TbCopyOff } from "react-icons/tb";

const DCMA = () => {
  return (
    <div className="mx-auto w-4/5 pt-32 ">
      <div className="rounded-md bg-white text-black py-8 px-20 text-justify">
        <div className="mt-8 flex flex-row items-center">
          <TbCopyOff className="mr-4 text-3xl" />
          <p className="text-2xl font-bold tracking-wider underline underline-offset-4">
            DCMA
          </p>
        </div>
        <div className="mt-5 text-lg leading-8">
          <p>
            If we have added some content that belong to you or your
            organization by mistake, We are sorry for that. We apologize for
            that and assure you that this wont be repeated in future. If you are
            rightful owner of the content used in our Website, Please mail us
            with your Name, Organization Name, Contact Details, Copyright
            infringing URL and Copyright Proof (URL or Legal Document) at{" "}
            <b className="tracking-wider text-cyan-600">
              support@cryptonaukri.com
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DCMA;
