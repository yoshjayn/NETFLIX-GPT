import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const Ystore = configureStore({
    reducer :{
        user : userSlice,
        movie: movieSlice
    }
})
export default Ystore