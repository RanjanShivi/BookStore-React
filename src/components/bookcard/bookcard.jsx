import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bookCoverImg from '../../assests/bookCover.png';
import Box from '@mui/material/Box';
import './bookcard.css';

export default function BookCard(prop) {
    return (
        <Box className='card-container'>
            <Card sx={{width: '100%', height: '100%'}}>
                <img src={bookCoverImg} alt="err" style={{paddingLeft: '3rem', width: '160px', height: '200px'}}/>
                   
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {prop.singleBook.bookName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            by {prop.singleBook.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            4.3*({prop.singleBook.quantity})
                        </Typography>
                        
                        <Typography gutterBottom variant="h5" component="div">
                            Rs. {prop.singleBook.discountedPrice}
                        </Typography>
                    </CardContent>
               
            </Card>
        </Box>

    );
}
