import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';



const initialState = {
    authorList :[],
    categoryList :[],
    publisherList :[]
    
}

export const fetchAuthors = createAsyncThunk("Author_List", ()=>{
    return axios.get(`http://localhost:8000/api/author`)
    .then((response)=> response.data )
})

export const fetchCategories = createAsyncThunk("Category_List", ()=>{
    return axios.get(`http://localhost:8000/api/category`)
    .then((response)=> response.data )
})

export const fetchPublishers = createAsyncThunk("Publisher_List", ()=>{
    return axios.get(`http://localhost:8000/api/publisher`)
    .then((response)=> response.data )
})




export const createInstanceSlice = createSlice({
    name:"create",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchAuthors.fulfilled,(state,action)=>{
            state.authorList = action.payload
            
        })
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.categoryList = action.payload
            
        })
        builder.addCase(fetchPublishers.fulfilled,(state,action)=>{
            state.publisherList = action.payload
            
        })
    
    },
})



export const {  } = createInstanceSlice.actions

export default createInstanceSlice.reducer