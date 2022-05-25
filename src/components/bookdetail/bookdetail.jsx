import * as React from 'react';
import Box from '@mui/material/Box';
import './bookdetail.css'
import bookCoverImg from '../../assests/bookCover.png';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { getBookInCart, addBookInCart, addBookInWishlist, updateBookInCart } from '../service/bookservice'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Card from '@mui/material/Card';
import { useHistory } from 'react-router-dom';


function BookDetail(prop) {
    let history = useHistory();
    console.log('prop', prop)

    const [bookFilter, setBookFilter] = React.useState([])
    const [bookInCart, setBookInCart] = React.useState(false)
    const [quantity, setQuantity] = React.useState(1)

    React.useEffect(() => {
        getCartBooks();
    }, [])


    const getCartBooks = () => {
        getBookInCart().then((res) => {
            console.log('line26', res.data.data[0].book)
            console.log('line27', prop.bookDetails)
            let filterArray = res.data.data[0].book.filter(function (books) {
                console.log('line29', books.bookId)

                if (books.bookId == prop.bookDetails._id) {

                    setBookInCart(true)
                    setQuantity(books.quantity)
                    console.log(bookInCart)
                    return books
                }
            })
            setBookFilter(filterArray)
        })
            .catch((error) => {
                console.log(error);
            })

    }

    console.log('line41', bookFilter)
    console.log('line42', quantity)

    const handleCart = () => {
        addBookInCart(prop.bookDetails._id).then((res) => {
            console.log(res.data.data)
            setBookInCart(true)
            console.log(bookInCart)
        })
            .catch((error) => {
                console.log(error);
            })
    }

    const handlePlus = () => {
        let body = {
            quantity: quantity + 1
        }
        updateBookInCart(prop.bookDetails._id, body).then((res) => {

            console.log(res.data.data)
            getCartBooks()
            setBookInCart(true)
            console.log(bookInCart)
        })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleMinus = () => {
        let body = {
            quantity: quantity - 1
        }
        updateBookInCart(prop.bookDetails._id, body).then((res) => {
            console.log(res.data.data)
            getCartBooks()
            setBookInCart(true)
            console.log(bookInCart)
        })
            .catch((error) => {
                console.log(error);
            })
    }
    const handleWishlist = () => {
        addBookInWishlist(prop.bookDetails._id).then((res) => {
            console.log(res.data.data)
                   })
            .catch((error) => {
                console.log(error);
            })
            history.push("/Wishlist")
    }
    const onClickingHome = () => {
        history.push("/Home")
    }


    return (
        <Box className='outer-container'>
            <Box className='book-details-header'>
                <Typography component="span" color="text.secondary" style={{ font: 'normal normal 14px Roboto', cursor: 'pointer' }} onClick={onClickingHome}>
                    Home / { }
                </Typography>
                <Typography component="span" style={{ font: 'normal normal bold 14px Roboto' }}>
                    (Book())
                </Typography>
            </Box>
            <Box className='book-details-container'>

                <Box className='book-cover-box'>
                    <Card className='img-card' >
                        <Box className='img-box'>
                            <img src={bookCoverImg} alt="err" style={{ width: '65%', height: '80%' }} />
                        </Box>
                    </Card>
                    <Box className='button-box'>
                        {
                            bookInCart ?
                                <Box className='quantity-box'>

                                    <RemoveCircleOutlineIcon fontSize='large' onClick={handleMinus} style={{ cursor: 'pointer', color: 'gray' }} />
                                    <Box className='number-box'>{quantity}</Box>
                                    <AddCircleOutlineIcon fontSize='large' onClick={handlePlus} style={{ cursor: 'pointer', color: 'gray' }} />

                                </Box>

                                :
                                <Button variant="contained" className='cart-button' style={{ backgroundColor: 'brown' }} onClick={handleCart}>Add to bag</Button>
                        }



                        <Button variant="contained" className='wishlist-button' style={{ backgroundColor: 'rgb(84, 83, 83)' }} onClick={handleWishlist}>Wishlist</Button>
                    </Box>
                </Box>
                <Box className='book-detail-box'>
                    <Box className='detail-box-one'>
                        <Typography gutterBottom variant="h5" component="div">
                            {prop.bookDetails.bookName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            by {prop.bookDetails.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            4.3*({prop.bookDetails.quantity})
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Rs. {prop.bookDetails.discountedPrice}
                        </Typography>
                    </Box>
                    <Box className='detail-box-two'>
                        <Typography variant="body1" color="text.secondary">
                            Book Detail:
                        </Typography>
                        <Typography variant="body2" color="black">
                            {prop.bookDetails.description}
                        </Typography>
                    </Box>
                    <Box className='detail-box-three'>
                        <Typography gutterBottom variant="h6" component="div">
                            Customer Feedback
                        </Typography>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}
export default BookDetail