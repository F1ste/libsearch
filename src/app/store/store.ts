import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { bookAPI } from "src/entities/Book/api/api";
import booksReducer from 'src/entities/Book/reducers/bookSliсe';

const rootReducer = combineReducers({
    booksReducer,
    [bookAPI.reducerPath]: bookAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(bookAPI.middleware)
        
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']