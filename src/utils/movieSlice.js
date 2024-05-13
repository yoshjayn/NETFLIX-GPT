import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movieSlice",
        initialState:{
            nowPlaying : null,
            trailerVideo: null
        },
        reducers:{
            addNowPLaying:(state,action)=>{
                state.nowPlaying=action.payload
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload
            }
        }
    }
)

export const { addNowPLaying , addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;