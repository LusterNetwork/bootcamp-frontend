import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { payApi } from '../services/api';

function generateMerchantTransactionId() {
  const maxLength = 30;
  const timestamp = Date.now().toString();
  const uuid = uuidv4().replace(/-/g, "");
  return `TXN_${timestamp}${uuid}`.slice(0, maxLength);
}

const PaymentButton = () => {
  const [paymentUrl, setPaymentUrl] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber= location?.state?.mobileNumber

  useEffect(()=>{
    handleInitiatePayment();
  },[])

  const handleInitiatePayment = async () => {
    try {
      const generatedId = "TXN_" + generateMerchantTransactionId();
      const res = await payApi(generatedId,mobileNumber);
      setPaymentUrl(res);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
     {paymentUrl && (
        <div>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
        <button 
  className="h-18 md:h-16 mt-2 px-6 md:px-8 font-bold text-base md:text-xl flex flex-col items-center justify-center
  rounded-md bg-gradient-to-r from-[#58AFEF] to-[#9374DC] text-white transition-colors 
  hover:bg-[#9374DC] hover:from-[#58AFEF] hover:to-[#9374DC]"
>
  <div>Make Payment</div>
  <div className="text-lg font-bold">Rs. 4,999</div>
</button>

          </a>
        </div>
      )}
    </div>
  );
};

export default PaymentButton;
