import React, { useState } from 'react';
import { checkResponseStatus, payApi } from '../services/api';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function generateMerchantTransactionId() {
  const maxLength = 30;
  const timestamp = Date.now().toString();
  const uuid = uuidv4().replace(/-/g, "");
  return `TXN_${timestamp}${uuid}`.slice(0, maxLength);
}

const PaymentButton = () => {
  const [paymentUrl, setPaymentUrl] = useState('');
  const[data,setData]=useState();
  const navigate = useNavigate();

  useEffect(()=>{
    handleInitiatePayment();
  },[])

  const handleInitiatePayment = async () => {
    try {
      const generatedId = "TXN_" + generateMerchantTransactionId();
      const res = await payApi(generatedId);
      setPaymentUrl(res);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleResponse=async()=>{
    const generatedId = "TXN_" + generateMerchantTransactionId();
    const res = await checkResponseStatus(generatedId);
    setData(res.code);
    console.log(res);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
     {paymentUrl && (
        <div>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
            <button 
            className="h-10 md:h-12 mt-2 px-6 md:px-8 font-bold text-base md:text-xl flex items-center justify-center
            rounded-md bg-gradient-to-r from-[#58AFEF] to-[#9374DC] text-white transition-colors 
            hover:bg-[#9374DC] hover:from-[#58AFEF] hover:to-[#9374DC]">
              Click here to proceed
            </button>
          </a>
        </div>
      )}
      {/* {
        paymentUrl && (
          <div>
            <button onClick={handleResponse}>click Response</button>
            {data}
            </div>
        )
      } */}
    </div>
  );
};

export default PaymentButton;
