import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_EVENT1, DUMMY_EVENT2, Event, INIT_EVENT, RegistEvent } from "../../interface/Event";

export const getEvent = createAsyncThunk("getEventState", async (eventId: number, { rejectWithValue }) => {
    try {
        const eventData = (await axios.get(`/api/getEvent/${eventId}`)).data;
        return eventData;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getEventList = createAsyncThunk("getEventList", async (companyId:number, {rejectWithValue, dispatch})=>{
    try {
        const eventList = (await axios.get(`/api/event/${companyId}`)).data;
        return eventList;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const registEvent = createAsyncThunk("registEvent", (event:RegistEvent, {rejectWithValue})=>{
    try {
        const result = axios.post(`/api/event/regist`, event);
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const updateEvent = createAsyncThunk("updateEvent", (event:Event, {rejectWithValue})=>{
    try {
        const result = axios.post(`/api/event/update`, event);
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const deleteEvent = createAsyncThunk("deleteEvent", (eventId:number, {rejectWithValue, getState})=>{
    try{
        axios.delete(`/api/event/${eventId}`);
        return;
    } catch (error) {
        rejectWithValue(error);
    }
})

const eventSlice = createSlice({
    name: "event",
    initialState: {
        data: INIT_EVENT,
        list: [DUMMY_EVENT1, DUMMY_EVENT2],
        loading: false,
    },
    reducers: {
        setEvent: (state, action) => {
            state.data = action.payload;
        },
        setEventList: (state, action) => {
            state.list = action.payload;
        },
        initEvent: (state)=>{
            state.data = INIT_EVENT;
            state.list = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getEvent.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEvent.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(getEvent.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getEventList.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(getEventList.fulfilled, (state, action) =>{
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getEventList.rejected, (state)=>{
            state.loading = false;
        });
        builder.addCase(registEvent.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(registEvent.fulfilled, (state)=>{
            state.loading = false;
        });
        builder.addCase(registEvent.rejected, (state)=>{
            state.loading = false;
        });
        builder.addCase(updateEvent.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(updateEvent.fulfilled, (state)=>{
            state.loading = false;
        });
        builder.addCase(updateEvent.rejected, (state)=>{
            state.loading = false;
        });
        builder.addCase(deleteEvent.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(deleteEvent.fulfilled, (state)=>{
            state.data = INIT_EVENT;
            state.loading = false;
        });
        builder.addCase(deleteEvent.rejected, (state)=>{
            state.loading = false;
        });
    }
})

export const {
    setEvent,
    setEventList,
    initEvent,
} = eventSlice.actions;

export default eventSlice.reducer;