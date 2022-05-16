import React from "react";
import { Box } from "@mui/system";
import './subheader.css';
import Typography from '@mui/material/Typography';

function SubHeader(props) {


    return (

        <Box className="sub-header">
            <Box className="sub-box-one">
                <Typography variant="h7" component="span">
                    Books
                </Typography>
                <Typography component="span" color="text.secondary" variant="body2">
                    ({props.NumOfBooks} items)
                </Typography>
            </Box>
            <Box className="sub-box-two">
                <span >sort by refrence</span>
            </Box>

        </Box>
    )
}
export default SubHeader