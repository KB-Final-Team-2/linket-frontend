import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_HIRE1, DUMMY_HIRE2, Hire, INIT_HIRE } from "../../interface/Hire";

export const getHire = createAsyncThunk("getEventState", async (eventId: string, { rejectWithValue }) => {
    try {
        const eventData = (await axios.get(`/api/getEvent/${eventId}`)).data;
        return eventData;
    } catch (error) {
        rejectWithValue(error);
    }
})

const hireSlice = createSlice({
    name: "hire",
    initialState: {
        data: INIT_HIRE,
        list: [DUMMY_HIRE1, DUMMY_HIRE2],
        loading: false,
    },
    reducers: {
        setHire: (state, action) => {
            state.data = action.payload;
        },
        setHireList: (state, action) => {
            state.list = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getHire.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getHire.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getHire.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const {
    setHire,
    setHireList,
} = hireSlice.actions;

export default hireSlice.reducer;