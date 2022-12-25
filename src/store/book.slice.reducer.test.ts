import bookSlice, { booksAction, getAllBooks, getSearchAllBooks, InterfaceBook, updateShelfAllBooks }  from "./book.slice.reducer";

const book:InterfaceBook = {
  id: "1",
  description:"",
  authors: [""],
  imageLinks: { smallThumbnail: "", thumbnail: "" },
  shelf: "react",
  title: "",
  subtitle:""
}


jest.mock('../apis/Apis.Book.ts', () => {
    return {
        async getAll() {return [book]},
        async search(query: string) {return [book]},
        async update() {return {}},
    }
  })


describe("book reducer", () => {
    
  it("should return the init state empty acction", () => {
    const inisitalState = undefined;
    const action = { type: "" };
    const result = bookSlice(inisitalState, action);
    expect(result).toEqual({list: [], searchList: []});
  });

  it("should addbook", () => {
    const inisitalState = undefined;
    const action = booksAction.addBooks([book]);
    const state = bookSlice(inisitalState, action);
    expect(state.list).toEqual([book])
  });

  it("should searchBooks", () => {
    const inisitalState = undefined;
    const action = booksAction.searchBooks([book]);
    const state = bookSlice(inisitalState, action);
    expect(state.searchList).toEqual([book])
  });

  it("should updateBooks", () => {
    const inisitalState = {
        list: [book],
        searchList: [book]
    };
    const action = booksAction.updateBooks({id: "1", shelf:'Design'});
    const state = bookSlice(inisitalState, action);
    expect(state.list[0].shelf).toEqual( "Design");
  });

  
it('should getAllBooks', async () => {
 const dispatch = jest.fn();
 const thunk = getAllBooks();
 const state = {
    list:[],
    searchList:[]
 };

 await thunk(dispatch, () => state );
 const { calls } = dispatch.mock;

 expect(calls[0][0].payload).toEqual([book]);
});

it('should getSearchAllBooks', async () => {
    const dispatch = jest.fn();
    const thunk = getSearchAllBooks('',22);
    const state = {
       list:[],
       searchList:[]
    };
   
    await thunk(dispatch, () => state );
    const { calls } = dispatch.mock;
   
    expect(calls[0][0].payload).toEqual([book]);
   });

   it('should updateShelfAllBooks', async () => {
    const dispatch = jest.fn();
    const thunk = updateShelfAllBooks(book,'OOP');
    const state = {
       list:[],
       searchList:[]
    };
   
    await thunk(dispatch, () => state );
    const { calls } = dispatch.mock;
   
    expect(calls[0][0].payload).toEqual({id: "1", shelf: 'OOP'});
   });
 
});
   