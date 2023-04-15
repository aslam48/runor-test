import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false,
    },
    reducers: {
        closeSidebar: (state) => {
            state.isOpen = false
        }, 
        openSidebar: (state) => {
            state.isOpen = true
        }
    }
})

export const {closeSidebar, openSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer