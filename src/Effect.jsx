import React, { useEffect, useState } from "react";
import "./styles.css";

const Effect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(`count value is ${value}`);
  });

  return (
    <React.Fragment>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>Add</button>
    </React.Fragment>
  );
};

export default Effect;
