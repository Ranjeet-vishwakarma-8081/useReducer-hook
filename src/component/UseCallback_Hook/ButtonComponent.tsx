import React, { memo } from "react";

const ButtonComponent = ({ text, onclick }) => {
  console.log(`Button Component has renderd !! ${text}`);
  
  return (
    <button type="button" onClick={onclick}>
      {text}
    </button>
  );
};

export default memo(ButtonComponent);
