import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_HIRE1, DUMMY_HIRE2, Hire, INIT_HIRE, RegistHire } from "../../interface/Hire";

export const getHire = createAsyncThunk("getHireState", async (hireId: number, { rejectWithValue }) => {
    try {
        let hireData = (await axios.get(`/api/event/hire/getHire/${hireId}`)).data;
        return hireData;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getHireList = createAsyncThunk("getHireList", async (eventId: number, { rejectWithValue, dispatch }) => {
    try {
        const eventHireList = (await axios.get(`/api/event/hire/getAllHires/${eventId}`)).data;
        return eventHireList;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const registHire = createAsyncThunk("registHire", (hire: RegistHire, { rejectWithValue }) => {
    try {
        const result = axios.post(`/api/event/hire/registerHire`, hire);
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const updateHire = createAsyncThunk("updateHire", (hire: Hire, { rejectWithValue }) => {
    try {
        const result = axios.post(`/api/hire/update`, hire);
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const deleteHire = createAsyncThunk("deleteHire", (hireId: number, { rejectWithValue, getState }) => {
    try {
        axios.delete(`/api/hire/${hireId}`);
        return;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getPartHireList = createAsyncThunk("getPartHireLIst", async (email:string, {rejectWithValue})=>{
    try {
        const eventList = (await axios.get(`/api/attendance/part-time/${email}`)).data;
        return eventList;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const registPartHire = createAsyncThunk("registPartHire", async (hireId:number, {rejectWithValue}) => {
    try {
        const result = (await axios.post(`/api/attendance/join/${hireId}`)).data;
        return result;
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
        },
        initHire: (state) => {
            state.data = INIT_HIRE;
            state.list = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getHire.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getHire.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(getHire.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getHireList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getHireList.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getHireList.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(registHire.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registHire.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(registHire.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(updateHire.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateHire.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(updateHire.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteHire.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteHire.fulfilled, (state) => {
            state.data = INIT_HIRE;
            state.loading = false;
        });
        builder.addCase(deleteHire.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getPartHireList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getPartHireList.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getPartHireList.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(registPartHire.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registPartHire.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(registPartHire.rejected, (state) => {
            state.loading = false;
        });
    }
})

export const {
    setHire,
    setHireList,
    initHire,
} = hireSlice.actions;

export default hireSlice.reducer;