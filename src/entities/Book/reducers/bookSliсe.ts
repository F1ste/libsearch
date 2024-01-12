import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BooksState {
    query: string
    category: string
    orderBy: string
    page: number
}

const initialState: BooksState = {
    query: '',
    category: '',
    orderBy: 'relevance',
    page: 1,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setOrderBy: (state, action: PayloadAction<string>) => {
            state.orderBy = action.payload;
        },
        setPageIncrement: (state) => {
            state.page++;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        }
    },
});

export const { setQuery, setCategory, setOrderBy, setPageIncrement, setPage } = booksSlice.actions;
export default booksSlice.reducer;