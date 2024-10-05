"use client";

import React, { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>カウント: {count}</p>
      <button onClick={increment}>プラス</button>
      <button onClick={decrement}>マイナス</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}
