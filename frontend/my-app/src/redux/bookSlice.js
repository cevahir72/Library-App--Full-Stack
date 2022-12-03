import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';



const initialState = {
    bookList :[],
    bookCount:0
}

export const fetchBooks = createAsyncThunk("fetchBookList", (data)=>{
    const { order, page} = data
    const myPage = page -1
    return axios.get(`http://localhost:8000/api/book/${order}?page=${myPage}&size=5`)
    .then((response)=> response.data )
})

export const filterBooks = createAsyncThunk("filterBookList", (data)=>{
    const {keyword, orderFiltered, pageFiltered} = data
    const myPageFiltered = pageFiltered -1
    return axios.get(`http://localhost:8000/api/book/${keyword}/${orderFiltered}?page=${myPageFiltered}&size=5`)
    .then((response)=> response.data )
})


export const bookSlice = createSlice({
    name:"book",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchBooks.fulfilled,(state,action)=>{
            state.bookList = action.payload.rows
            state.bookCount= action.payload.count
        })
        builder.addCase(filterBooks.fulfilled,(state,action)=>{
            state.bookList = action.payload.rows
            state.bookCount= action.payload.count
        })
    },
})



export const { orderBook,getBooks ,keywordEvent } = bookSlice.actions

export default bookSlice.reducer