import React, { useCallback, useState } from "react";
import ButtonComponent from "./ButtonComponent.tsx";

const UseCallBack = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const memorizeSetCountFunc_1 = useCallback(
    () => setCount1(count1 + 1),
    [count1]
  );
  const memorizeSetCountFunc_2 = useCallback(
    () => setCount2(count2 + 1),
    [count2]
  );

  return (
    <>
      {count1} {count2}
      <ButtonComponent text={"Button One"} onclick={memorizeSetCountFunc_1} />
      <ButtonComponent text={"Button Two"} onclick={memorizeSetCountFunc_2} />
    </>
  );
};

export default UseCallBack;
