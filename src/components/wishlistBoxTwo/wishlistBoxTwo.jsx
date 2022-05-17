import React from "react";
import { Box, } from "@mui/system";
import { Typography } from "@mui/material";
import './wishlistBoxTwo.css';
import bookCoverImg from '../../assests/bookCover.png';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBookInWishlist } from "../service/bookservice";


function WishlistBoxTwo(props) {

    const handleDelete = () => {
        deleteBookInWishlist()
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <Box className="wishlist-box-two">
            <Box className='wishlist-book-container'>
                <Box className='wishlist-img-container'>
                    <img src={bookCoverImg} alt="err" style={{ width: '50%', height: '60%' }} />
                </Box>
                <Box className='wishlist-details-container'>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.singlebook.bookName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.singlebook.author}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Rs. {props.singlebook.discountedPrice}
                    </Typography>
                </Box>

            </Box>
            <Box className='wishlist-icon-container'>
                <DeleteIcon fontSize="small" style={{ cursor: 'pointer', color: 'gray' }} onClick={handleDelete} />
            </Box>
        </Box>

    )
}
export default WishlistBoxTwo