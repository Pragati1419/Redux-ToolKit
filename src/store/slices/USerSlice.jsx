import {createSlice}from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },
        deleteUsers(state, action) {
            state.splice(0, state.length);
        }
       
    },

});

console.log(userSlice.actions);

export default userSlice.reducer;
export const  {addUser} = userSlice.actions
