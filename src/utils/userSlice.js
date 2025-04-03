
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action)=>{
            console.log("ACTION IN ADD USER ", action)
        }
    }
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;