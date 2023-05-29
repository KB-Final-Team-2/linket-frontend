import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Attend, AttendWithUser, DUMMY_ATTD, DUMMY_ATTD2, DUMMY_ATTDWITHUSER, DUMMY_ATTDWITHUSER2, INIT_ATTD } from "../../interface/Attendance";

export const getAttend = createAsyncThunk('getAttend', async (attendId: string, { rejectWithValue }) => {
    try {
        const attendData = (await axios.get(`/api/getAttend/${attendId}`)).data;
        return attendData;
    } catch (error) {
        rejectWithValue(error)
    }
})

export const getAttendList = createAsyncThunk('getAttendList', async (hireId:number, {rejectWithValue, dispatch})=>{
    try{
        const list : Attend[] = (await axios.get(`/api/getAttendList/${hireId}`)).data;
        const days: string[] = [];
        list.forEach((attend) => {
            if (!days.includes(attend.attDate)) days.push(attend.attDate);
        })
        return {list, days};
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getEventAttendList = createAsyncThunk('getEventAttendList', async (eventId:number, {rejectWithValue})=>{
    try {
        const list : AttendWithUser[] = (await axios.get(`/api/attendance/staff/${eventId}`)).data;
        const days: string[] = [];
        list.forEach((attend) => {
            if (!days.includes(attend.attDate)) days.push(attend.attDate);
        })
        return {list, days};
    } catch (error) {
        rejectWithValue(error);
    }
})

export const updateStaffStart = createAsyncThunk("updateStaffStart", async({attDate, attEventId, attStartBnt}:any, {rejectWithValue})=>{
    try {
        const result = (await axios.post("/api/attendance/staff/start",{attDate, attEventId, attStartBnt})).data;
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const updateStaffEnd = createAsyncThunk("updateStaffEnd", async({attDate, attEventId, attEndBnt}:any, {rejectWithValue})=>{
    try {
        const result = (await axios.post("/api/attendance/staff/end",{attDate, attEventId, attEndBnt})).data;
        return result;
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
        });
        builder.addCase(getEventAttendList.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(getEventAttendList.fulfilled, (state, action)=>{
            state.list = action.payload?.list || [];
            state.days = action.payload?.days || [];
            state.loading = false;
        });
        builder.addCase(getEventAttendList.rejected, (state)=>{
            state.loading = false;
        });
        builder.addCase(updateStaffStart.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateStaffStart.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(updateStaffStart.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(updateStaffEnd.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateStaffEnd.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(updateStaffEnd.rejected, (state) => {
            state.loading = false;
        });
    }
})

export const {
    setAttend,
    setAttendList,
    setDays,
    setDate,
    initAttend,
} = attendSlice.actions;

export default attendSlice.reducer;