import {createSlice} from '@reduxjs/toolkit';
const cartinitial = {show:false}
const cartSlice = createSlice({
    name:'cart',
    initialState:cartinitial,
    reducers:{
        showHide(state){
            state.show = !state.show;
        }
    }
});
export const  cartActions = cartSlice.actions;
export default cartSlice.reducer;
