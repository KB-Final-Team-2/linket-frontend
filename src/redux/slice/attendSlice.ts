import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Attend, AttendWithUser, DUMMY_ATTD, INIT_ATTD } from "../../interface/Attendance";

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
        // const list = (await axios.get(`/api/getAttendList/${eventId}`)).data;
        const list : Attend[]= [DUMMY_ATTD,DUMMY_ATTD,DUMMY_ATTD,DUMMY_ATTD];
        const days: string[] = [];
        list.forEach((attend) => {
            if (!days.includes(attend.attDate)) days.push(attend.attDate);
        })
        return {list, days};
    } catch (error) {
        rejectWithValue(error);
    }
})

const attendSlice = createSlice({
    name: "attend",
    initialState: {
        data: INIT_ATTD,
        list: [DUMMY_ATTD, DUMMY_ATTD, DUMMY_ATTD] as (AttendWithUser[] | Attend[]),
        days: [] as string[],
        date: "",
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
        setDays: (state, action) => {
            state.days = action.payload;
        },
        setDate: (state, action) =>{
            state.date = action.payload;
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
            state.list = action.payload?.list || [];
            state.days = action.payload?.days || [];
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
    setDays,
    setDate,
    updateStart,
    updateEnd,
    initAttend,
} = attendSlice.actions;

export default attendSlice.reducer;