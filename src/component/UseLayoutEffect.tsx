import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {

    const paragraphRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("UseEffect Hook is Called ...");
        // inputRef.current.defaultValue = "Riya singh"
        // const getInputRef = inputRef.current.defaultValue;
        // console.log(getInputRef);

    }, [])

    useLayoutEffect(() => {
        console.log("UseLayoutEffect Hook is Called ...");
        const getParagraphRef = paragraphRef.current;
        console.log(getParagraphRef);
        // getParagraphRef.style.opacity = 0;
        setTimeout(() => {
            // getParagraphRef.style.opacity = 1;
            // getParagraphRef.style.color = "orange"
        }, 2000);
        // const getInputRef = inputRef.current.defaultValue;
        // console.log(getInputRef);

    }, []);

    return (
        <>
            <h1>UseLayoutEffect Example ---</h1>
            <p ref={paragraphRef}>Hello World</p>
            <input ref={inputRef} type="text" defaultValue={"Shyam"} />
        </>

    )
}

export default UseLayoutEffect