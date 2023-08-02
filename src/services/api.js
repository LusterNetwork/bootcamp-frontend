import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_URL;

export const registerStudents=async(name,email,phone_no,experience,bootcamp,coupon)=>{
    try {
        const response = await axios.post(BASE_URL+"/",{
            name:name,
            email:email,
            phoneNumber:phone_no,
            experience:experience,
            bootcamp:bootcamp,
            couponCode:coupon
        })

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const payApi= async(generatedId,mobileNumber)=>{
      
      // Your secret key for generating digital signature
//       const secretKey = 'your_secret_key_here';
      
//       // Generate a digital signature
//       const signature = crypto.createHmac('sha256', secretKey)
//                               .update(generatedId)
//                               .digest('hex');
// const queryString = `transactionId=${generatedId}&signature=${signature}`;

//   // Append the queryString to the URL
//   const url = `${BASE_URL}/endpoint?${queryString}`;
try {
    const response = await axios.get(`${BASE_URL}/pay`, {
      params: {
        merchantTransactionIdFrontend: generatedId,
        mobileNumber: mobileNumber,
        amount:4999,
      },
    });
    return response.request.responseURL;
  } catch (error) {
    console.log(error);
  }
}

export const checkResponseStatus= async(generatedId)=>{
      
    // Your secret key for generating digital signature
//       const secretKey = 'your_secret_key_here';
    
//       // Generate a digital signature
//       const signature = crypto.createHmac('sha256', secretKey)
//                               .update(generatedId)
//                               .digest('hex');
// const queryString = `transactionId=${generatedId}&signature=${signature}`;

//   // Append the queryString to the URL
//   const url = `${BASE_URL}/endpoint?${queryString}`;
  try {
      const response = await axios.post(BASE_URL+`/response?merchantTransactionIdFrontend=${generatedId}`,{
      })
      return response.data;
  } catch (error) {
      console.log(error);
  }
}

