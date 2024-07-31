import React, { useReducer } from 'react';

const initalState = {
    count: 0,
    showCountFlag: true,
}
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'RESET':
            return { ...state, count: 0 };
        default:
            return state;
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initalState);
    return (
        <>
            <h1>UseReducer Example --- </h1>
            <h3>Count: {state.count}</h3>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </>
    )
}

export default UseReducer