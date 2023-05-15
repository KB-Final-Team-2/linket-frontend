import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../interface/User';

export const login = createAsyncThunk("loginState", async (_:void, {rejectWithValue})=>{
    try {
        const userData: User = (await axios.get(`/api/login/`)).data;
        return userData;
    } catch (error) {
        rejectWithValue(error);
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

export const logout = createAsyncThunk("logout", async(_:void,{rejectWithValue})=>{
    try {
        const res = (await axios.get("/api/auth/logout")).data;
        console.log(res);
        return res;
    } catch (error) {

    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        data: {},
        loading: false
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(login.pending,(state, action)=>{
            state.loading = true;
        });
        builder.addCase(login.fulfilled,(state, action)=>{
            state.data = action.payload as User;
            state.loading= false;
        });
        builder.addCase(login.rejected, (state)=>{
            state.data={};
            state.loading=false;
        });
        builder.addCase(logout.pending, (state)=>{
            state.loading=true;
        });
        builder.addCase(logout.fulfilled, (state)=>{
            state.data = {};
            state.loading = false;
        })
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer