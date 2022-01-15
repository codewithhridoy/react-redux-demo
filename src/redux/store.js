/*

We have to create a store to keep all the data (states and actions) in one place
so that we can use those data when we need.

*/

import { createStore } from "redux";
import reducers from "./reducers/index";

/*

For creating a store, we have to pass all the combined reducers inside the createStore
as the first argument and state as the second argument and
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
as the third argument

*/

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
