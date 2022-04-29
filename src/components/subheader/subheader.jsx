import React from "react";
import { Box} from "@mui/system";
import './subheader.css'

function SubHeader(props) {
    return (
         <Box className="outer-box">
            <Box className="sub-header">
                <Box className="sub-box-one">
                    <span >Books({props.NumOfBooks} items)</span>
                </Box>
                <Box className="sub-box-two">
                    <span >sort by refrence</span>
                </Box>
            </Box>
         </Box>
    )
}
export default SubHeader