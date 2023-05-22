import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_TICKET1, DUMMY_TICKET2, INIT_TICKET } from "../../interface/Ticket";

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
        data: INIT_TICKET,
        list: [DUMMY_TICKET1, DUMMY_TICKET2],
        loading: false,
    },
    reducers:{
        setTicket: (state, action)=>{
            state.data = action.payload;
        },
        setTicketList: (state, action)=>{
            state.list = action.payload;
        },
        initTicket: (state)=>{
            state.data = INIT_TICKET;
            state.list=[];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getTicketList.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(getTicketList.fulfilled, (state, action)=>{
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getTicketList.rejected, (state)=>{
            state.loading = false;
        })
    }
})

export const {
    setTicket,
    setTicketList,
    initTicket,
} = ticketSlice.actions;

export default ticketSlice.reducer;