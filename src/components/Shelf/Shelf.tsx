import React from "react";
import { InterfaceBook } from "../../store/book.slice.reducer";
import Book from "../Book/Book";
import classes from './Shelf.module.css';

const Shelf = (props: {books: InterfaceBook[], stateTitle: string}) => {
    return (
        <div>
           <div className={classes.bookshelf}>
                <h2 className={classes.bookshelf_title}>{props.stateTitle}</h2>
                <div className={classes.bookshelf_books}>
                  <ol className={classes.books_grid}>
                    {props.books.map((book)=> (
                    <li key={book.id}>
                      {/* Book */}
                      <Book book={book}></Book>
                    </li>
                    ))}

                  </ol>
                </div>
              </div>
        </div>

    );
}

export default Shelf;