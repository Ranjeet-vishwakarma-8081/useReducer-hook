import React, { useRef } from 'react'

const UseRef = () => {
    const ref = useRef(0);
    const handleClick = () => { 
        ref.current += 1;
        console.log('Current value of ref is:', ref.current);  // Output: Current value of ref is: 1
    }
    return (
        <>
            <h1>UseRef Example --- </h1>
            <button onClick={handleClick}>Click me for Action</button>

        </>
    )
}

export default UseRef