import React from 'react';
import { fireEvent, render,screen } from '@testing-library/react';
import Book from './Book';
import { InterfaceBook } from '../../store/book.slice.reducer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';


describe('renders book', ()=> {
    it('should book', ()=> {
        const book:InterfaceBook = {
            id: "1",
            description:"",
            authors: [""],
            imageLinks: { smallThumbnail: "", thumbnail: "" },
            shelf: "react",
            title: "",
            subtitle:""
          }
          renderContext(<Book book={book}/>)
        // const element = screen.getByRole('selected');
        // fireEvent.change(element);
    })
});

function renderContext(ele: React.ReactElement) {
    render(
        <BrowserRouter>
    <Provider store={store}>{ele}</Provider>
        </BrowserRouter>
    );
}
