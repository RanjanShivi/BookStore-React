import React from "react";
import Header from "../../components/header/header";
import SubHeader from "../../components/subheader/subheader";
import BookCard from "../../components/bookcard/bookcard";
import { Container, Grid } from "@mui/material";
import { getAllBooks } from "../../components/service/bookservice";
import './homepage.css';
import BookDetail from "../../components/bookdetail/bookdetail";
import { Book } from "@mui/icons-material";
import Box from '@mui/material/Box';

function HomePage() {
  const [books, setBooks] = React.useState([]);
  const [view, setView] = React.useState(false)
  const [bookDetails, setBookDetails] = React.useState([])


  const listenToBookDetail = (details) => {
    setView(true)
    setBookDetails(details)
  }

  React.useEffect(() => {
    getBooks();
  }, [])

  const getBooks = () => {
    getAllBooks()
      .then((res) => {
        console.log(res);
        setBooks(res.data.data)
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <Header />
      {view ? <BookDetail bookDetails={bookDetails} /> :
       
          
            <Grid container style={{ width: '70%', marginLeft: '14%', marginTop: '10px'}}
              direction="row"
              justifyContent="flex-start"
              spacing={2}>
                
              <Grid item xs={12}>
                <SubHeader NumOfBooks={books.length} />
              </Grid>

              {
                books.map((singleBook) => (
                  <Grid item xs={3}>
                    <BookCard singleBook={singleBook} listenToBookDetail={listenToBookDetail} />
                  </Grid>
                ))

              }
            </Grid>
           
        
      }
    </>
  )
}
export default HomePage