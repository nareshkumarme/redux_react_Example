const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    value:0,
    email:"hv@gmail.com",
}

export const counterSlice = createSlice ({
    name:'counter',
    initialState,
    reducers:{
        increment: (state) =>{
            state.value += 1
        },
        
        decrement: (state) =>{
            state.value -= 1
        },

        incrementbyvalue: (state,action) =>{
            state.value += action.payload
        }
    }

    
})

export const {increment,decrement,incrementbyvalue} = counterSlice.actions;
export default counterSlice.reducer;