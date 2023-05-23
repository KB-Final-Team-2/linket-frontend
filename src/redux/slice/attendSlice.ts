import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Attendance, DUMMY_ATTD, INIT_ATTD } from "../../interface/Attendance";

export const getAttend = createAsyncThunk('getAttend', async (attendId: string, { rejectWithValue }) => {
    try {
        const attendData = (await axios.get(`/api/getAttend/${attendId}`)).data;
        return attendData;
    } catch (error) {
        rejectWithValue(error)
    }
})

export const getAttendList = createAsyncThunk('getAttendList', async (_:void, {rejectWithValue, dispatch})=>{
    try{
        // const list = (await axios.get(`/api/getAttendList/${}`)).data;
        const list : Attendance[]= [DUMMY_ATTD,DUMMY_ATTD,DUMMY_ATTD,DUMMY_ATTD];
        return list;
    } catch (error) {
        rejectWithValue(error);
    }
})

const attendSlice = createSlice({
    name: "attend",
    initialState: {
        data: INIT_ATTD,
        list: [DUMMY_ATTD, DUMMY_ATTD, DUMMY_ATTD],
        days: [],
        startState: false,
        endState: false,
        loading: false,
    },
    reducers: {
        setAttend: (state, action) => {
            state.data = action.payload;
        },
        setAttendList: (state, action) => {
            state.list = action.payload;
        },
        updateStart: (state, action) => {
            state.startState = action.payload;
        },
        updateEnd: (state, action) => {
            state.endState = action.payload;
        },
        initAttend: (state)=>{
            state.data=INIT_ATTD;
            state.list=[];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAttend.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAttend.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getAttend.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getAttendList.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(getAttendList.fulfilled, (state, action)=>{
            state.list = action.payload || [];
            state.loading = false;
        });
        builder.addCase(getAttendList.rejected, (state)=>{
            state.loading = false;
        })
    }
})

export const {
    setAttend,
    setAttendList,
    updateStart,
    updateEnd,
    initAttend,
} = attendSlice.actions;

export default attendSlice.reducer;