import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const Ystore = configureStore({
    reducer :{
        user : userSlice
        
    }
})
export default Ystore