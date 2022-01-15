import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* 

We have to connect redux with the react here, Provided is used for that.
We have a props named  store to connect our store. 

*/
import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
