import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // redux toolkit uses emmer js behind the scene.

            //vanilla redux => DON'T MUTATE THE THE STATE DIRECTLY and returning was mandatory
            //INITIAL WAY OF WRITING THIS CODE WAS
            //   const newState = [...state];
            //   newState.item.push(action.payload)
            //   return newState;

            //  Redux Toolkit now
            //  we have to mutate the state which can be done directly. but it is still doing the same thing behind the scene
            //  which is written above but it doesn't ask developer to do it.

         

            state.items.push(action.payload)
        },

        removeItem: (state, action) => {
            state.items.pop();
        },

        clearCart: (state, action) => {
            state.items.length = 0;
               // rtk says ==> either mutate the existing state or return a new state.
               // use  state.items.length = 0;   or return {items: []};
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

