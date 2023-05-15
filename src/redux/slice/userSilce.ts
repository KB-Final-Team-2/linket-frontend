import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk("loginState", async (_:void, {rejectWithValue})=>{
    try {
        const userData = (await axios.get("/api/login",{data:{userId:"abcd", password:"defg"}})).data;
        return userData;
    } catch (error) {
    }
})

export const postLogin = createAsyncThunk("loginPostState", async(_:void, {rejectWithValue})=>{
    try {
        const userData = (await axios.post("/api/postLogin",{email:"abcd",password:"defg"})).data;
        console.log(userData);
        return userData;
    } catch (error) {

    }
})

const userSlice = createSlice({
    name: 'user',
    initialState:{
        data: {},
        loading: false
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(login.pending,(state, action)=>{
            state.loading = true;
        })
        builder.addCase(login.fulfilled,(state, action)=>{
            state.data = action.payload;
            state.loading = false;
        });
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer