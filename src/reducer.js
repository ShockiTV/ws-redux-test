import { combineReducers } from "redux";
import accountsReducer from "./reducers/accountsReducer";
import socketReducer from "./reducers/socketReducer";

const finalReducer = combineReducers({
  socket: socketReducer,
  accounts: accountsReducer,
});

export default finalReducer;