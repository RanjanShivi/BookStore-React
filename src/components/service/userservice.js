import axios from "axios";

export const userSignup = async (obj) =>{
    console.log(obj)
    let responseOne = await axios.post("http://localhost:3005/api/v1/users/register", obj);
    return responseOne
}

export const userLogin = async (obj) => {
    let responseTwo = await axios.post("http://localhost:3005/api/v1/users/login", obj);
    return responseTwo;
}

export const addCustomer =async (obj) => {
    let responseTwo = await axios.post("http://localhost:3005/api/v1/customer/add", obj);
    return responseTwo;
}