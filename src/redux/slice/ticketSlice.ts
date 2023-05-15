import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTicketList = createAsyncThunk("getTicketList",async (ticketId:string, {rejectWithValue}) => {
    try {
        const ticketData = (await axios.get(`/api/getTicket/${ticketId}`)).data;
        return ticketData;
    } catch (error) {
        rejectWithValue(error);
    }
})

const ticketSlice = createSlice({
    name:"ticket",
    initialState: {
        data: {},
        loading: false,
    },
    reducers:{
        setTicket: (state, action)=>{
            state.data = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getTicketList.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(getTicketList.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(getTicketList.rejected, (state)=>{
            state.data = {};
            state.loading = false;
        })
    }
})

export const {
    setTicket
} = ticketSlice.actions;

export default ticketSlice.reducer;