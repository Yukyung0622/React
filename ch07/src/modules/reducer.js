import { combineReducers } from "@reduxjs/toolkit";
import addsubReducer from "./reducers/addsub";
import countReducer from "./reducers/count";


const rootReducer = combineReducers({
    value: addsubReducer,
    count: countReducer
})

export default rootReducer