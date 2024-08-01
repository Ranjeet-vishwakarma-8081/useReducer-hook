import React, { useMemo, useState } from "react";
import { useEffect } from "react";

const UseMemo = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(false);

  async function fetchAllproducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      // setData(result);
      if (result && result.products) setData(result.products);
      console.log("Data is loaded in dataset");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    fetchAllproducts();
  }, []);

  function filterProductByPrice(getProduct) {
    console.log("filterProductByPrice Function is running");

    return getProduct && getProduct.length > 0
      ? getProduct.filter((item) => item.price > 50)
      : [];
  }
  const memorizeFilterProductByPrice = useMemo(() => {
    return filterProductByPrice(data);
  }, [data]);
  return (
    <>
      <h1>UseMemo Example ...</h1>
      <ul>
        {memorizeFilterProductByPrice.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <h2>{theme ? "Light" : "dark"}</h2>
    </>
  );
};

export default UseMemo;

// Simple Example  of useMemo ---
// import { useState, useMemo } from "react";
// import React from "react";

// const UseMemo = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("John");

//   // Memoize the calculation of a message
//   const message = useMemo(() => {
//     return `Hello ${name}, you clicked ${count} times`;
//   }, [count, name]); // Only recalculate if count or name changes

//   return (
//     <div>
//       <p>{message}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setName("Ranjeet");
//         }}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// };

// export default UseMemo;
