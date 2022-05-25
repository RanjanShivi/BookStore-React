import React from "react";
import './orderboxtwo.css'
import { Box, Typography, Button } from "@mui/material";
import bookCoverImg from '../../assests/bookCover.png';
import { postOrder } from "../service/bookservice";
import { useHistory } from 'react-router-dom';

function OrderBoxTwo(props) {
    let history = useHistory()
    const onClickingCheckout = () => {
        postOrder()
            .then((res) => {
                console.log(res);
                history.push("/OrderPlaced")
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <Box className="order-box-one">
                <span className="cart-text">Order Summary</span>
            </Box>



            {
                props.cartBooks.map((singleBook) => (
                    <Box className="order-box-two">

                        <Box className="order-img-container">
                            <img src={bookCoverImg} alt="err" style={{ width: '55%', height: '100%' }} />
                        </Box>
                        <Box className="order-details-container">

                            <Typography component="div" style={{ font: 'normal normal bold 18px Roboto' }}>
                                {singleBook.bookName}
                            </Typography>
                            <Typography color="text.secondary" component="div" style={{ font: 'normal normal 14px Roboto' }}>
                                by {singleBook.author}
                            </Typography>
                            <Typography gutterBottom component="div" style={{ font: 'normal normal bold 16px Roboto' }}>
                                Rs. {singleBook.price}
                            </Typography>

                        </Box>
                    </Box>

                ))
            }

            <Box className="order-box-three">
                <Button variant="contained" className="place-order-button" onClick={onClickingCheckout}>Checkout</Button>
            </Box>
        </>
    )
}

export default OrderBoxTwo