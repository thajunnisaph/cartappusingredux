import {createSlice} from '@reduxjs/toolkit';
const uiinitial = {show:false, isError:null}
const uiSlice = createSlice({
    name:'ui',
    initialState:uiinitial,
    reducers:{
        showHide(state){
            state.show = !state.show;
        },
        notification(state,action){
            state.isError={status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message}

        }
    }});

    export const uiActions = uiSlice.actions;
  export default uiSlice.reducer;
