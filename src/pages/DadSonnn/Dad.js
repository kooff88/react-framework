import React from 'react';
import { createStore } from 'redux';

import { Provider, useSelector, useDispatch } from "react-redux";
import { reducer1 } from "../utils";

const initialState = { num1: 0 };



const store = createStore(reducer1, initialState);

const ComponentUseReactRedux = () => {
  return (
    <div>
      <h2>ComponentUseReactRedux</h2>
      <Provider store={store}>
        <ChildComponentUseReactRedux />
      </Provider>
    </div>
  )
}

const ChildComponentUseReactRedux = () => {
    const num1 = useSelector(state => state.num1);
    const dispatch = useDispatch();
    return (
        <div>
            <h3> useSelector, useDispatch </h3>
            Number: {num1}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>

        </div>
    )
}



export default ComponentUseReactRedux