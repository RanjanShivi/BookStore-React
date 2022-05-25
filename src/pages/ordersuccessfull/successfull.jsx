import React from "react";
import './successfull.css';
import Header from "../../components/header/header";
import { Box, Button } from "@mui/material";
import {useHistory } from 'react-router-dom';
import { Paper } from "@mui/material";
import OrderImg from '../../assests/ordersuccess.png'

function OrderSuccessfull(){
    let history = useHistory();

    const onClickingContinueShopping=()=>{
        history.push("/Home")
    }
    return(
        <>
        <Header/>
        <Box className="success-container">
        <img src={OrderImg} alt="err" style={{ width: '250px', height: '200px' }}></img>
           <span className="message">hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
           </span>
         
           <Paper elevation={5} className="table">
               <Box className="table-header">
                   <Box className="column-one">Email Us</Box>
                   <Box className="column-two">Contact Us</Box>
                   <Box className="column-three">Address</Box>
               </Box>
               <Box className="table-body">
               <Box className="column-one">admin@bookstore.com</Box>
                   <Box className="column-two">+91 8163475881</Box>
                   <Box className="column-three">42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</Box>
               </Box>

           </Paper>

           
           <Button variant="contained" onClick={onClickingContinueShopping}>Continue Shopping</Button>
        </Box>
        </>
    )
}

export default OrderSuccessfull