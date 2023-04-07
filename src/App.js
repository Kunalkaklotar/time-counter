import "./App.css";
import Timer from "./Timer";
import { useState, useEffect } from "react";

function App() {
  let [check, setCheck] = useState(false);
  let [count, setCount] = useState(0);
  let id;
  useEffect(() => {
    if (check) {
      id = setInterval(() => {
        setCount(++count);
      }, 1000);
    }
    else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [check, count]);

  return (
    <>
      <Timer count={count} setCount={setCount} setCheck={setCheck} />
    </>
  );
}

export default App;