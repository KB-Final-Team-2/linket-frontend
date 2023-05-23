import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_TICKET1, DUMMY_TICKET2, INIT_TICKET } from "../../interface/Ticket";

export const getTicket = createAsyncThunk("getTicket", async (ticketId: number, { rejectWithValue }) => {
    try {
        const ticket = (await axios.get(`/api/ticket/${ticketId}`)).data;
        return ticket;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getTicketList = createAsyncThunk("getTicketList", async (email: string, { rejectWithValue }) => {
    try {
        const ticketData = (await axios.get(`/api/ticket`)).data;
        return ticketData;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const deleteTicket = createAsyncThunk("deleteTicket", async (ticketId: number, { rejectWithValue }) => {
    try {
        const result = (await axios.delete(`/api/ticket/${ticketId}`)).data;
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const registTicket = createAsyncThunk("registTicket", async (ticketId: number, { rejectWithValue }) => {
    try {
        const result = (await axios.post(`/api/ticket/regist`,{ticketId})).data;
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})

const ticketSlice = createSlice({
    name: "ticket",
    initialState: {
        data: INIT_TICKET,
        list: [DUMMY_TICKET1, DUMMY_TICKET2],
        loading: false,
    },
    reducers: {
        setTicket: (state, action) => {
            state.data = action.payload;
        },
        setTicketList: (state, action) => {
            state.list = action.payload;
        },
        initTicket: (state) => {
            state.data = INIT_TICKET;
            state.list = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTicket.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getTicket.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(getTicket.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getTicketList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getTicketList.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getTicketList.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteTicket.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteTicket.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteTicket.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(registTicket.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registTicket.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(registTicket.rejected, (state) => {
            state.loading = false;
        });
    }
})

export const {
    setTicket,
    setTicketList,
    initTicket,
} = ticketSlice.actions;

export default ticketSlice.reducer;