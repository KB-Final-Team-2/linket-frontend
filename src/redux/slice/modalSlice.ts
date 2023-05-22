import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        current: ""
    },
    reducers: {
        setCreateEventModal: (state) => {
            state.current = "createEvent";
        },
        setUpdateEventModal: (state) => {
            state.current = "updateEvent";
        },
        setDeleteEventModal: (state) => {
            state.current = "deleteEvent"
        },
        setCreateHireModal: (state) => {
            state.current = "createHire"
        },
        setDeleteHireModal: (state) => {
            state.current = "deleteHire"
        },
        setUpdaateUserModal: (state) => {
            state.current = "updateUser"
        },
        closeModal: (state) => {
            state.current = "";
        }
    },
    extraReducers: (builder => {

    })
})

export const {
    setCreateEventModal,
    setUpdateEventModal,
    setDeleteEventModal,
    setCreateHireModal,
    setDeleteHireModal,
    setUpdaateUserModal,
    closeModal,
} = modalSlice.actions;

export default modalSlice.reducer;