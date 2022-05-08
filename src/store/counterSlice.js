import { createSlice } from '@reduxjs/toolkit'

export const webPage = createSlice({
    name: 'web',
    initialState: {
        sideBar: ['DRESS', 'TOYS', 'BOOKS', 'GADGETS', ],
        name: 'sherin sukirtha',
        address: "232,LIG colony,Anna nagar Madurai-625020"
    },
    reducers: {
        updateName: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log(action.payload);
            state.name = action.payload;
        },
    },
})


// Action creators are generated for each case reducer function
export const { updateName } = webPage.actions
export default webPage.reducer