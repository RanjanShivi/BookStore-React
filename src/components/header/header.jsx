import React from "react";
import './header.css';
import { Box } from "@mui/system";
import educationImg from '../../assests/education.png';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useHistory } from "react-router-dom";

function Header() {

const history = useHistory();

const onClickingCart =()=>{
    history.push("/Cart")
}

    return (
        <Box className="header">
            <Box className="header-container">
                <Box className="box-one">
                    <img src={educationImg} alt="err" style={{ width: '40px', height: '30px' }}></img>
                    <span className="bookstore-text">Bookstore</span>
                </Box>
                <Box className="box-two">
                    <button type="submit" className='searchButton'>
                        <SearchIcon htmlColor="grey" />
                    </button>
                    <input type="text" class='searchField' placeholder="Search" />
                </Box>
                <Box className="box-three">
                    <Box className="profile-box">
                        <PermIdentityOutlinedIcon htmlColor="white"/>
                        <span className="imgText">Profile</span>
                    </Box>
                    <Box className="cart-box" >
                        <ShoppingCartOutlinedIcon htmlColor="white" onClick={onClickingCart}/>
                        <span className="imgText">Cart</span>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
export default Header