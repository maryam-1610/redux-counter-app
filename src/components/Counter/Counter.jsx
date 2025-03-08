import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from "../../redux/ducks/counter";


export const Counter = () => {
    const count = useSelector((state) => state?.counter?.count);
    const dispatch = useDispatch();
   
    const incrementHandler = () => {
        dispatch(increment());
    };

    const decrementHandler = () => {
        dispatch(decrement());
    }
  return (
    <div style={{ background: "grey" }}>
      <h2>Count is {count}</h2>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};
