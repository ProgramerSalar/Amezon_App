import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducers";
import { register } from "./actions/userAction";


export const store = configureStore({
    reducer:{
        user:userReducer,
      
    }
})



// export const server = "https://auth-1-gdgn.onrender.com/api/v1/user"
export const server = "https://auth-1-gdgn.onrender.com/api/v1/user"