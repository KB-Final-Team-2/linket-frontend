import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_TICKET1, DUMMY_TICKET2, DUMMY_TICKETWITHEVENT, DUMMY_TICKETWITHUSER, INIT_TICKET, Ticket, TicketWithEvent, TicketWithUser } from "../../interface/Ticket";

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

export const getEventTicketList = createAsyncThunk("getEventTicketList", async (eventId:number, {rejectWithValue}) => {
    try {
        // const eventTicketList : TicketWithUser = (await axios.get(`/api/ticket/${eventId}`)).data;
        const eventTicketList : TicketWithUser[] = [DUMMY_TICKETWITHUSER, DUMMY_TICKETWITHUSER, DUMMY_TICKETWITHUSER, DUMMY_TICKETWITHUSER];
        return eventTicketList;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getUserTicketList = createAsyncThunk("getUserTicketList", async (userId:number, {rejectWithValue}) => {
    try {
        // const eventTicketList : TicketWithUser = (await axios.get(`/api/ticket/${eventId}`)).data;
        const eventTicketList : TicketWithEvent[] = [DUMMY_TICKETWITHEVENT, DUMMY_TICKETWITHEVENT, DUMMY_TICKETWITHEVENT, DUMMY_TICKETWITHEVENT, DUMMY_TICKETWITHEVENT, DUMMY_TICKETWITHEVENT, DUMMY_TICKETWITHEVENT];
        // const eventTicketList : TicketWithEvent[] = [];
        return eventTicketList;
    } catch (error) {
        rejectWithValue(error);
    }
})

const ticketSlice = createSlice({
    name: "ticket",
    initialState: {
        data: INIT_TICKET as (Ticket | TicketWithEvent),
        list: [DUMMY_TICKET1, DUMMY_TICKET2],
        eventTicketList: [] as TicketWithUser[],
        userTicketList: [] as TicketWithEvent[],
        loading: false,
    },
    reducers: {
        setTicket: (state, action) => {
            state.data = action.payload;
        },
        setTicketList: (state, action) => {
            state.list = action.payload;
        },
        setEventTicketList: (state, action) => {
            state.eventTicketList = action.payload;
        },
        initTicket: (state) => {
            state.data = INIT_TICKET;
            state.list = [];
            state.eventTicketList = [];
            state.userTicketList = [];
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
        builder.addCase(getEventTicketList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEventTicketList.fulfilled, (state, action) => {
            state.eventTicketList = action.payload!;
            state.loading = false;
        });
        builder.addCase(getEventTicketList.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getUserTicketList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUserTicketList.fulfilled, (state, action) => {
            state.userTicketList = action.payload!;
            state.loading = false;
        });
        builder.addCase(getUserTicketList.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteTicket.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteTicket.fulfilled, (state) => {
            state.data = INIT_TICKET;
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
    setEventTicketList,
    initTicket,
} = ticketSlice.actions;

export default ticketSlice.reducer;