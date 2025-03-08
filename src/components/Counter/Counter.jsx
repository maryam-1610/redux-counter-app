import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from "../../redux/ducks/counter";


export const Counter = (props) => {
  
    const count = useSelector((state) => state?.counter?.count);
    const dispatch = useDispatch();
    const [votes, setVotes] = useState(0);
   
    const incrementHandler = () => {
        dispatch(increment());
        setVotes(votes + 1)
    };

    const decrementHandler = () => {
        dispatch(decrement());
        setVotes(votes - 1)

    }
  return (
    <div style={{ background: "grey" }}>
      <h2>Total votes of {props.name} are {votes}</h2>
      <p>{props.name}</p>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};
