import axios from "axios";

export const getAllBooks = async (obj) =>{
    console.log(obj)
    let responseOne = await axios.get("http://localhost:3005/api/v1/books/get", obj);
    return responseOne
}