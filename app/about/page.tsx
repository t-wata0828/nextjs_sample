"use client";

import React, { useState } from "react";
import AboutHeader from "./AboutHeader";

export default function About() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <AboutHeader
        title="About"
        description="This is the about page"
        reset={reset}
        count={count}
      />
      <br />
      <br />
      <br />
      <br />
      <p>カウント: {count}</p>
      <button onClick={increment}>プラス</button>
      <button onClick={decrement}>マイナス</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}
