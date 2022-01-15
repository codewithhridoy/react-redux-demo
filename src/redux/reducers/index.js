// As we have multiple reduces so we have to combine all the reducers together.

import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
});

export default reducers;
