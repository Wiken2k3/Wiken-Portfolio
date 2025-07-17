import React, { useState } from "react";
import { useCounter } from "../hook/useCounter";

export const Counter: React.FC = () => {
    const [count , setCount] = useState(0);
    
    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };
    const decrease = () => {
        setCount(prevCount => prevCount - 1);
    };
    const reset = () => {
        setCount(0);
    };

    return(
        <div>
            <h2>Count : {count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
);