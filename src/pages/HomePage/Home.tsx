import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Shelf from "../../components/Shelf/Shelf";
import { getAllBooks } from "../../store/book.slice.reducer";
import { RootState } from "../../store/store";
import classes from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
    // call getAll Api 
    dispatch(getAllBooks());
    },[dispatch]);

    const books = useSelector( (store: RootState) => {
        return store.booksList.list;
    });
    
    return (
        <div>
           {/* home Page content */}
           <div className={classes.list_books}>
          <div>
            <Header></Header>
          </div>
          <div className={classes.list_books_content}>
            <div>
              {/* Shelf */}
              <Shelf books={books.filter((book) => book.shelf === 'currentlyReading')} stateTitle={'Currently Reading'}></Shelf>
              <Shelf books={books.filter((book) => book.shelf === 'wantToRead')} stateTitle={'Want to Read'}></Shelf>
              <Shelf books={books.filter((book) => book.shelf === 'read')} stateTitle={'Read'}></Shelf>
            </div>
          </div>
          <div className={classes.open_search}>
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
           {/*End Home page content */}
        </div>
    )
};

export default Home;