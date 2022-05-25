import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import bookCoverImg from '../../assests/bookCover.png';
import Box from '@mui/material/Box';
import './bookcard.css';
import { PropaneSharp } from '@mui/icons-material';

export default function BookCard(prop) {
console.log('props', prop)
    const onClickingBookCard = (details)=>{
        prop.listenToBookDetail(details);
    }

    return (
        <Box className='card-container' onClick={()=> onClickingBookCard(prop.singleBook)} >
            <Card sx={{width: '100%', height: '100%'}} onClick={onClickingBookCard}>
                <Box className='bookcard-img-container'>
                <img src={bookCoverImg} alt="err" style={{width: '50%', height: '80%'}}/>
                </Box> 
                    <CardContent onClick={onClickingBookCard}>
                        <Typography gutterBottom component="div" style={{font: 'normal normal bold 18px Roboto'}}>
                            {prop.singleBook.bookName}
                        </Typography>
                        <Typography color="text.secondary" style={{font: 'normal normal 14px Roboto'}}>
                            by {prop.singleBook.author}
                        </Typography>
                        <Typography color="text.secondary" style={{font: 'normal normal 14px Roboto'}}>
                            4.3*({prop.singleBook.quantity})
                        </Typography>
                        
                        <Typography gutterBottom component="div" style={{font: 'normal normal bold 16px Roboto'}}>
                            Rs. {prop.singleBook.discountedPrice}
                        </Typography>
                    </CardContent>
               
            </Card>
        </Box>

    );
}
