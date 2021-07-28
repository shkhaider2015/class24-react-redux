import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";

const reducers = combineReducers({
    Account : AccountReducer,
})

export default reducers;