import { createSlice } from "@reduxjs/toolkit";
import { getAll, search, update } from "../apis/Apis.Book";

export interface InterfaceBook {
  id: string;
  description: string;
  authors: string[];
  imageLinks: { smallThumbnail: string; thumbnail: string };
  shelf: string;
  title: string;
  subtitle?: string;
}

export interface BooksState {
  list: InterfaceBook[];
  searchList: InterfaceBook[];
}

const initialState: BooksState = {
  list: [],
  searchList: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooks: (state, action) => {
      return { ...state, list: action.payload };
    },
    searchBooks: (state, action) => {
      return {
        ...state,
        searchList: action.payload.map((book: InterfaceBook) => {
          const stateBook = state.list.find((v) => v.id === book.id);
          return { ...book, shelf: stateBook ? stateBook.shelf : book.shelf };
        }),
      };
    },
    updateBooks: (state, action) => {
      return {
        ...state,
        list: state.list.map((book) => {
          if (book.id === action.payload.id) {
            return { ...book, shelf: action.payload.shelf };
          } else {
            return book;
          }
        }),
      };
    },
  },
});

export const booksAction = bookSlice.actions;

export const getAllBooks = (): any => {
  return async (dispatch: any) => {
    const booksList = await getAll();
    dispatch(bookSlice.actions.addBooks(booksList));
  };
};

export const getSearchAllBooks = (query: string, maxResults: number): any => {
  return async (dispatch: any) => {
    const searchBooksList = await search(query, maxResults);
    if (searchBooksList?.length) {
      dispatch(bookSlice.actions.searchBooks(searchBooksList));
    } else {
      dispatch(bookSlice.actions.searchBooks([]));
    }
  };
};

export const updateShelfAllBooks = (
  book: InterfaceBook,
  shelf: string
): any => {
  return async (dispatch: any) => {
    await update(book, shelf);
    dispatch(bookSlice.actions.updateBooks({ id: book.id, shelf }));
  };
};

export default bookSlice.reducer;
