import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_EVENT1, DUMMY_EVENT2, INIT_EVENT } from "../../interface/Event";

export const getEvent = createAsyncThunk("getEventState", async (eventId: string, { rejectWithValue }) => {
    try {
        const eventData = (await axios.get(`/api/getEvent/${eventId}`)).data;
        return eventData;
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getEvent.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEvent.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getEvent.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const {
    setEvent,
    setEventList,
} = eventSlice.actions;

export default eventSlice.reducer;