import axios from "axios";
let headerConfig = {
    headers: { Authorization: 'Bearer' + ' ' + localStorage.getItem('token') }

}

export const getAllBooks = async () => {
    let responseOne = await axios.get("http://localhost:3005/api/v1/books/get");
    return responseOne
}

export const getBookInCart = async () => {
  
    let responseOne = await axios.get(`http://localhost:3005/api/v1/cart/get/`, headerConfig);
    return responseOne
}
export const addBookInCart = async (obj) => {
  
    let responseOne = await axios.post(`http://localhost:3005/api/v1/cart/create/${obj}`,{}, headerConfig);
    return responseOne
}

export const addBookInWishlist = async (obj) => {
  
    let responseOne = await axios.post(`http://localhost:3005/api/v1/wishlist/add/${obj}`,{}, headerConfig);
    return responseOne
}