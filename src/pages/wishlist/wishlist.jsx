import React from "react";
import { Box, Card } from "@mui/material";
import './wishlist.css';
import Typography from '@mui/material/Typography';
import Header from "../../components/header/header";
import WishlistBoxOne from "../../components/wishlistBoxOne/wishlistBoxOne";
import WishlistBoxTwo from "../../components/wishlistBoxTwo/wishlistBoxTwo";
import { getBookInWishlist } from "../../components/service/bookservice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Wishlist() {
    const history = useHistory();
    const [wishlistBooks, setWishlistBooks] = React.useState([])

    React.useEffect(() => {
        getWishlit();
    }, [])

    const getWishlit = () => {
        getBookInWishlist()
            .then((res) => {
                console.log(res);
                setWishlistBooks(res.data.data[0].book)
            }).catch((err) => {
                console.log(err);
            })
    }
    console.log("line25", wishlistBooks)
    const onClickingHome = ()=>{
        history.push("/Home")
    }

    return (
        <>
            <Header />
            <Box className='wishlist-outer-box'>
                <Box className='wishlist-header'>
                    <Typography component="span" color="text.secondary" style={{ font: 'normal normal 14px Roboto', cursor: 'pointer' }} onClick={onClickingHome}>
                        Home /
                    </Typography>
                    <Typography component="span" style={{ font: 'normal normal bold 14px Roboto' }}>
                        { } My Wishlist
                    </Typography>
                </Box>
                <Box className='wishlist-inner-box'>
                    <WishlistBoxOne  length={wishlistBooks.length}/>

                    {
                        wishlistBooks.map((singleBook) => (
                            <WishlistBoxTwo singleBook={singleBook}/>
                        ))
                    }
                </Box>

            </Box>


        </>
    )
}

export default Wishlist