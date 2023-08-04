import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as signupreducer } from "./Redux/siginup/reducer";
const rootreducer=combineReducers({signupreducer})
const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
export default store;