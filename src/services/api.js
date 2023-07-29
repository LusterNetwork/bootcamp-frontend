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

export const payApi= async(generatedId,amount,phone_no,email,bootcamp)=>{
    try {
        const response = await axios.get(BASE_URL+"/pay",{
            generatedId,
            amount,
            phone_no,
            email,
            bootcamp,
        })
        return response.data;
    } catch (error) {
        console.log(error);
    }
}