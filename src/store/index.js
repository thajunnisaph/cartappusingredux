import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import UIreducer from "./UIreducer";
 
const store = configureStore({
    reducer:{
        cart:cartReducer, ui:UIreducer
    }
})
export default store;