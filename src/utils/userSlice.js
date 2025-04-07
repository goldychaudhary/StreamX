
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addUser: (state, action)=>{
            state.user = action.payload
        },
        removeUser: (state, action) => {
            state.user = {}
        }
    }
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;