import React from "react";
import useFetch from "./UseFetchCustomHook.tsx";
function DataFetcher() {
  const { data, isLoading, error } = useFetch(
    "https://dummyjson.com/product",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Render your data here */}
      <pre>{JSON.stringify(data,null, 2)}</pre>
    </div>
  );
}

export default DataFetcher;
