import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.unshift(action.payload);
        },
        setBooks: (state, action) => {
            state.books = action.payload;
        },
    },
});

export const { addBook, setBooks } = booksSlice.actions;
export default booksSlice.reducer;