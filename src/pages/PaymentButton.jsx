import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { payApi } from '../services/api';

const PaymentButton = () => {
  const [paymentUrl, setPaymentUrl] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location?.state?.amount;
  const mobileNumber= location?.state?.mobileNumber;
  const email = location?.state?.email;

  useEffect(()=>{
    if(mobileNumber)
    handleInitiatePayment();
    else {
      navigate("/airegistration")
    }
  },[mobileNumber])

  const handleInitiatePayment = async () => {
    try {
      const res = await payApi(mobileNumber,amount,email);
      setPaymentUrl(res);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
    {paymentUrl && (
      <div className="text-center">
        <p className="font-semibold text-2xl">Artificial Intelligence</p>
        <a
          href={paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
       
        <button className="mt-4 px-8 py-3 md:py-2 font-bold text-xl rounded-md bg-gradient-to-r from-[#58AFEF] to-[#9374DC] text-white transition-colors hover:bg-[#9374DC] hover:from-[#58AFEF] hover:to-[#9374DC]">
          <div>Make Payment</div>
          <div className="text-lg font-bold">Rs. {amount}</div>
        </button>
        </a>
      </div>
    )}
  </div>
  
  );
};

export default PaymentButton;
