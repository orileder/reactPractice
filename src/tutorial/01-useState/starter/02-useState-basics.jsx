import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h4>you clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>{" "}
    </div>
  );
};

export default UseStateBasics;
