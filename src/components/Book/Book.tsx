import React from "react";
import { updateShelfAllBooks } from "../../store/book.slice.reducer";

import classes from './Book.module.css';
import { InterfaceBook } from './../../store/book.slice.reducer';
import { useDispatch } from 'react-redux';

const Book = (props: {book: InterfaceBook}) => {
   const dispatch = useDispatch();

    const changeHandeler = (e: any) => {
        dispatch(updateShelfAllBooks(props.book, e.target.value));
        }

    return (
        <div>
            <div className={classes.book}>
                        <div className={classes.book_top}>
                          <div
                            className={classes.book_cover}
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                'url('+ props.book.imageLinks.thumbnail +')'
                            }}
                          ></div>
                          <div className={classes.book_shelf_changer}>
                            {/* ||'none' to made all books unselected by default none state */}
                            <select onChange={changeHandeler} value={props.book.shelf ||'none'}>
                              <option  disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className={classes.book_title}>{props.book.title}</div>
                        <div className={classes.book_authors}>{props.book.authors}</div>
                      </div>
        </div>

    );
}

export default Book;

