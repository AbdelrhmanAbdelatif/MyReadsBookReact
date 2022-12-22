import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../../components/Book/Book";
import { getSearchAllBooks } from "../../store/book.slice.reducer";
import { RootState } from "../../store/store";
import classes from './Search.module.css';

const Search = () => {
    const dispatch = useDispatch();
    const searchBooks = useSelector( (store: RootState) => {
        return store.booksList.searchList;
    });

    const changeHandeler = (e: any) => {
    console.log(e.target.value);
    dispatch(getSearchAllBooks(e.target.value,100));
    }
    
    return (
        <div className={classes.search_books}>
        <div className={classes.search_books_bar}>
          <Link to='/'
            className={classes.close_search}
          >
            Close
          </Link>
          <div className={classes.search_books_input_wrapper}>
            <input onChange={changeHandeler}
              type="text"
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        <div className={classes.search_books_results}>
            <div className={classes.books_grid}>
            { searchBooks.length ? searchBooks.map( (book) => ( <Book key={book.id} book={book}></Book>)): 'No Search  Result Found' }
            </div>
          
        </div>
      </div>
    )
};

export default Search;