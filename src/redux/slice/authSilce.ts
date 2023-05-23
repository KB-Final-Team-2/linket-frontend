import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DUMMY_MEMBER, DUMMY_PART, INIT_USER, RegistUser, User } from '../../interface/User';
import { DUMMY_STAFF } from '../../interface/User';
import { useNavigate } from 'react-router-dom';

export const register = createAsyncThunk("registerUser", async (data: RegistUser, { rejectWithValue }) => {
    try {
        const userData = (await axios.post("/api/auth/register", data)).data;
        console.log(userData);
        return userData;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const logout = createAsyncThunk("logout", async (_: void, { rejectWithValue }) => {
    try {
        // const res = (await axios.get("/api/auth/logout")).data;
        // console.log(res);
        // return res;
        return 0;
    } catch (error) {

    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: INIT_USER,
        loading: false
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        },
        initUser: (state, action) => {
            state.data = INIT_USER;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logout.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.data = INIT_USER;
            state.loading = false;
        });
        builder.addCase(register.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
    }
})

export const {
    setUser,
    initUser,
} = authSlice.actions
export default authSlice.reducer