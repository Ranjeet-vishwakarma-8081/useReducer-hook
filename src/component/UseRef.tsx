import React, { useEffect, useRef } from 'react'

const UseRef = () => {

    const ref = useRef(0);
    const divRef = useRef(null);

    const handleClick = () => {
        ref.current += 1;
        console.log('Current value of ref is:', ref.current);  // Output: Current value of ref is: 1
    }
    useEffect(() => {
        console.log('Component Mounted');
        // divRef.current.style.color = 'red';
        console.log(divRef.current);
        

    })

    return (
        <>
            <h1>UseRef Example --- </h1>
            <button onClick={handleClick}>Click me for Action</button>
            <h2 ref={divRef}>This is Second Heading of the Website</h2>

        </>
    )
}

export default UseRef