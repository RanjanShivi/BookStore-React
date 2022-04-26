import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../login/login.css';


const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;



function Login() {
    
    const[loginObj, setloginObj] = React.useState({email:'', password:''});
    const emailTestRegex = emailRegex.test(loginObj.email)
    const passwordTestRegex = passwordRegex.test(loginObj.password)

    const [emailErr, setemailErr] = React.useState(false);
    const [emailHelper, setemailHelper] = React.useState('');
    
    const [passwordErr, setpasswordErr] = React.useState(false);
    const [passwordHelper, setpasswordHelper] = React.useState('');
    
    const handleOnClick=()=>{
    if(emailTestRegex==true){
        setemailErr(false);
        setemailHelper('')
    }
    else{
        setemailErr(true);
        setemailHelper("Enter correct email")
    }

    if(passwordTestRegex==true){
        setpasswordErr(false);
        setpasswordHelper('')
    }

    else{
         setpasswordErr(true);
         setpasswordHelper("Enter correct password")
    }
    }
    return (
         <Box className="loginContainer">
   
            
            <TextField id="outlined-basic" className="textfield" label="email" variant="outlined" size="small" error={emailErr} helperText={emailHelper}></TextField>
            <Box className="passwordBox">
            <TextField id="outlined-basic" className="textfield" label="password" variant="outlined" size="small" error={passwordErr} helperText={passwordHelper}></TextField>
            <span className="forgetPassword">Forget Password?</span>
            </Box>
            <Button className="loginButton" sx={{backgroundColor: 'brown', color:'white'}} onClick={handleOnClick}>LOGIN</Button>  

            -----------------OR-----------------

            <Box className="loginOptionButton">
                <Button className="facebookButton" variant="contained" sx={{backgroundColor: '#4266B2'}}
                >Facebook</Button>
                <Button className="googleButton" variant="contained" sx={{backgroundColor: '#F5F5F5', color: 'black'}}>Google</Button>
            </Box> 
         </Box>
    )
}
export default Login

{/* <TextField id="outlined-basic" className="textfield" label="email" variant="outlined" size="small" error={emailErr} helperText={emailHelper}> */ }