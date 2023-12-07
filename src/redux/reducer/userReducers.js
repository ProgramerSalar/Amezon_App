import {createReducer} from "@reduxjs/toolkit"



export const userReducer = createReducer({}, (builder) => {


    // Request
    builder
    .addCase("registerRequest", (state) => {
        state.loading = true
    })
    .addCase("loginRequest", (state) => {
        state.loading = true
    })





    // Success
    builder
    .addCase("registerSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload
        
    })
    .addCase("loginSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.user = action.payload
    })



    // Fail 
    builder
    .addCase("registerFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    })
    .addCase("loginFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    })



    Error
    builder.addCase("clearError", (state) => {
        state.error = null
    })
    builder.addCase("clearMessage", (state) => {
        state.message = null
    })


})