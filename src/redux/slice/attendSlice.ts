import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAttend = createAsyncThunk('getAttend',async (attendId:string, {rejectWithValue}) => {
    try {
        const attendData = (await axios.get(`/api/getAttend/${attendId}`)).data;
        return attendData;
    } catch (error) {
        rejectWithValue(error)
    }
    
})

const attendSlice = createSlice({
    name:"attend",
    initialState: {
        data:[],
        loading:false,
    },
    reducers:{
        setAttend:(state, action)=>{
            state.data = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAttend.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAttend.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(getAttend.rejected,(state)=>{
            state.loading = false;
        })
    }
})

export const {
    setAttend
} = attendSlice.actions;

export default attendSlice.reducer;