import React from "react";
import './cartboxtwo.css';
import { Box, Typography, Button } from "@mui/material";
import bookCoverImg from '../../assests/bookCover.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { deleteBookInCart,} from "../service/bookservice";

function CartBoxTwo(props) {
    console.log('props', props);

       const handleRemove = () => {
        deleteBookInCart(props.singleBook.bookId)
            .then((res) => {
                console.log(res.data.data)                
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <Box className="cart-box-two">
            <Box className="cart-img-container">
                <img src={bookCoverImg} alt="err" style={{ width: '55%', height: '70%' }} />
            </Box>
            <Box className="cart-details-container">
                <Box className="details-box-one">
                    <Typography component="div" style={{ font: 'normal normal bold 18px Roboto' }}>
                        {props.singleBook.bookName}
                    </Typography>
                    <Typography color="text.secondary" component="div" style={{ font: 'normal normal 14px Roboto' }}>
                        by {props.singleBook.author}
                    </Typography>
                    <Typography gutterBottom component="div" style={{ font: 'normal normal bold 16px Roboto' }}>
                        Rs. {props.singleBook.price}
                    </Typography>
                </Box>
                <Box className="details-box-two">
                    <Box className="cart-quantity">
                        <RemoveCircleOutlineIcon fontSize='medium' style={{ cursor: 'pointer', color: 'gray' }} />
                        <Box className='cart-quantity-box'>1</Box>
                        <AddCircleOutlineIcon fontSize='medium' style={{ cursor: 'pointer', color: 'gray' }} />
                    </Box>
                    <Box className="remove-button">
                        <Button variant="text" style={{ color: 'brown' }} onClick={handleRemove}>Remove</Button>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CartBoxTwo