import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './mainpage.css'
import shoppingImg from '../../assests/shoppingImg.png'
import Login from "../../components/login/login";
import SignUp from "../../components/signup/signup";


function BookStoreMain() {
    const [view, setView] = React.useState(true)

    return (
        <Box className="container">
            <Box className="boxOne">
                <Box className="boxOneContainer">
                    <img src={shoppingImg} className="img" />

                    <h3 className="text">ONLINE BOOK SHOPPING</h3>
                </Box>
            </Box>

            <Card className="boxTwo">
                <CardActions className="cardHeader">
                    <Button onClick={() => setView(false)} style={{ color: 'black', fontWeight: 'bold', fontSize: '23px' }}>LOGIN</Button>
                    <Button onClick={() => setView(true)} style={{ color: 'black', fontWeight: 'bold', fontSize: '23px' }}>SIGNUP</Button>
                </CardActions>
                <CardContent className="cardContent">
                    {
                        view ? <SignUp /> : <Login />
                    }
                </CardContent>
            </Card>

        </Box>

    )
}

export default BookStoreMain