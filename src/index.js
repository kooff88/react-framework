import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Hello from "./hello";
import "./css/style.css";

render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root")
);
