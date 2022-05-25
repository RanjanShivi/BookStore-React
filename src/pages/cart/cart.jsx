import React from "react";
import './cart.css';
import { Box, Button, CardContent, Card } from "@mui/material";
import Header from "../../components/header/header";
import { Typography } from "@mui/material";
import CartBoxTwo from "../../components/cartboxtwo/cartboxtwo";
import { getBookInCart } from "../../components/service/bookservice";
import OrderBoxTwo from "../../components/orderboxtwo/orderboxtwo";
import { postOrder } from "../../components/service/bookservice";
import AdressBoxTwo from '../../components/adressboxtwo/adressboxtwo'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cart() {
    let history = useHistory();
    const [cartBooks, setCartBooks] = React.useState([])

    const [orderDisplay, setOrderDisplay] = React.useState(false)
    const [addressDisplay, setAddressDisplay] = React.useState(false)

    React.useEffect(() => {
        getCart();
    }, [])

    const getCart = () => {
        getBookInCart()
            .then((res) => {
                console.log(res);
                setCartBooks(res.data.data[0].book)
            }).catch((err) => {
                console.log(err);
            })
    }
    console.log('line27', cartBooks)

    const onClickingOrderButton = () => {
        setAddressDisplay(true)

    }
    const handleOrderDisplay = () => {
        setOrderDisplay(true)

    }
    const onClickingHome = () => {
        history.push("/Home")
    }

    return (
        <>
            <Header />
            <Box className="cart-outer-box">
                <Box className='cart-header'>
                    <Typography component="span" color="text.secondary" style={{ font: 'normal normal 14px Roboto', cursor: 'pointer' }} onClick={onClickingHome}>
                        Home /
                    </Typography>
                    <Typography component="span" style={{ font: 'normal normal bold 14px Roboto' }}>
                        { } My Cart
                    </Typography>
                </Box>
                <Box className="cart-inner-box">

                    <Box className="cart-box-one">
                        <span className="cart-text">My Cart ({cartBooks.length})</span>
                    </Box>
                    {
                        cartBooks.map((singleBook) => (
                            <CartBoxTwo singleBook={singleBook} />
                        ))
                    }

                    <Box className="cart-box-three">
                        { addressDisplay ? null :
                        <Button variant="contained" className="place-order-button" onClick={onClickingOrderButton}>Place Order</Button>
                    
                            }    </Box>
                </Box>

                <Box className="cart-address-box">
                    {addressDisplay ? 
                    <AdressBoxTwo handleOrderDisplay={handleOrderDisplay}  orderDisplay={orderDisplay}/>
                    
                        :
                        <Box className="address-box-one">
                            <span className="cart-text" style={{ color: 'gray' }}>Address Details</span>
                        </Box>
                    }

                </Box>

                <Box className="cart-order-box">
                    {orderDisplay ? <OrderBoxTwo cartBooks={cartBooks}/>

                        :
                        <Box className="order-box-one">
                            <span className="cart-text" style={{ color: 'gray' }}>Order Summary</span>
                        </Box>

                    }
                </Box>

            </Box>
        </>


    )
}
export default Cart