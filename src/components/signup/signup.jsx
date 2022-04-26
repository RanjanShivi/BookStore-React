import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {userSignup} from '../service/userservice'
import '../signup/signup.css'

const fullNameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
const mobNumRegex = /^([+]\d{2})? \d{10}$/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp(){
    const[nameErr, setnameErr] = React.useState(false);
    const[nameHelper, setnameHelper] = React.useState('');

    const[emailErr, setemailErr] = React.useState(false);
    const[emailHelper, setemailHelper] = React.useState('');

    const[passwordErr, setpasswordErr] = React.useState(false);
    const[passwordHelper, setpasswordHelper] = React.useState('');

    const[mobNumErr, setmobNumErr] = React.useState(false);
    const[mobNumHelper, setmobNumHelper] = React.useState('');

    const[signupObj, setsignupObj] = React.useState({fullName:'', email:'', password:'', mobNumber:''});

    function takename(event) {
        setsignupObj({...signupObj,fullName:event.target.value})
    }
    function takeEmail(event) {
        setsignupObj({...signupObj,email:event.target.value})
    }
    function takePassword(event) {
        setsignupObj({...signupObj,password:event.target.value})
    }
    function takeMobNum(event) {
        setsignupObj({...signupObj,mobNumber:event.target.value})
    }
   
    const nameTestRegex = fullNameRegex.test(signupObj.fullName)
    const emailTestRegex = emailRegex.test(signupObj.email)
    const passwordTestRegex = passwordRegex.test(signupObj.password)
    const mobNumTestRegex = mobNumRegex.test(signupObj.mobNumber)

    function handleOnSubmit(){
        if(nameTestRegex==true){
            setnameErr(false);
            setnameHelper('')
        }
        else{
            setnameErr(true);
            setnameHelper("Enter correct name")
        }

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
        if(mobNumTestRegex==true){
            setmobNumErr(false);
            setmobNumHelper('')
        }

        else{
            setmobNumErr(true);
            setmobNumHelper("Enter correct mobile number")
        }
        if(nameTestRegex==true && emailTestRegex==true && passwordTestRegex==true && mobNumTestRegex==true){
            userSignup(signupObj).then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }

    return(
        <Box className="signupContainer">
            <TextField id="outlined-basic" className="signup-textfield" label="Full Name" variant="outlined" size="small" error={nameErr} helperText={nameHelper} onChange={takename}></TextField>
            <TextField id="outlined-basic" className="signup-textfield" label="Email Id" variant="outlined" size="small" error={emailErr} helperText={emailHelper} onChange={takeEmail}></TextField>
            <TextField id="outlined-basic" className="signup-textfield" label="Password" variant="outlined" size="small" error={passwordErr} helperText={passwordHelper} onChange={takePassword}></TextField>
            <TextField id="outlined-basic" className="signup-textfield" label="Mobile Number" variant="outlined" size="small" error={mobNumErr} helperText={mobNumHelper} onChange={takeMobNum}></TextField>
            <Button className="signupButton" sx={{backgroundColor: 'brown', color:'white'}} onClick={handleOnSubmit}>SIGNUP</Button>  
        </Box>
    )
}


export default SignUp