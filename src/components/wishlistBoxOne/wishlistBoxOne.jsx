import React from "react";
import './wishlistBoxOne.css';
import { Box, Typography } from "@mui/material";

function WishlistBoxOne(props){
return(
    <Box className="wishlist-box-one">
        <span className="wishlist-text">My Wishlist (0{props.length})</span>
    </Box>
)
}
export default WishlistBoxOne