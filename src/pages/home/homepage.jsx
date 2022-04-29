import React from "react";
import Header from "../../components/header/header";
import SubHeader from "../../components/subheader/subheader";
import BookCard from "../../components/bookcard/bookcard";
import { Grid } from "@mui/material";
import { getAllBooks } from "../../components/service/bookservice";
import './homepage.css';
import { Box } from "@mui/system";

function HomePage() {
  const [books, setBooks] = React.useState([]);

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
      <Grid container className="grid-container" spacing={2}>
        <Grid item xs={12}>
          <SubHeader NumOfBooks={books.length} />
        </Grid>
        {
          books.map((singleBook) => (
            <Grid item xs={2}>
              <BookCard singleBook={singleBook} />
            </Grid>
          ))

        }
      </Grid>
    </>
  )
}
export default HomePage