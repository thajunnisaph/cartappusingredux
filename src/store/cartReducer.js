import {createSlice} from '@reduxjs/toolkit';
const cartinitial = {show:false,items:[],totalQnty:0}
const cartSlice = createSlice({
    name:'cart',
    initialState:cartinitial,
    reducers:{
        showHide(state){
            state.show = !state.show;
        },
        addItemTocart(state,action){
            const item = action.payload;
            state.totalQnty++;
            const existingItem = state.items.find((items) => items.id ===item.id);
            if(!existingItem){
                state.items.push({id:item.id, price:item.price,quantity:1,totalPrice:item.price,title: item.title})
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice+item.price;

            }
        },
        removeItemFromCart(state,action){
            state.totalQnty--;
        const id =action.payload;
        const existingitem = state.items.find((item) => item.id === id);
        if(existingitem.quantity === 1){
           state.items = state.items.filter((item) => item.id !== id)
        }
        else{
            existingitem.quantity--;
            existingitem.totalPrice = existingitem.totalPrice-existingitem.price;
        }

        }
    }
});
export const  cartActions = cartSlice.actions;
export default cartSlice.reducer;
