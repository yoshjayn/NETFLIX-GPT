import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movieSlice",
        initialState:{
            nowPlaying : null,
        },
        reducers:{
            addNowPLaying:(state,action)=>{
                state.nowPlaying=action.payload
            }
        }
    }
)

export const { addNowPLaying}=movieSlice.actions;
export default movieSlice.reducer;