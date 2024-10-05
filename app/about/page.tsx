"use client";

import React, { useState } from "react";
import AboutHeader from "./AboutHeader";
import Button from "@mui/material/Button";

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
      <Button variant="contained" onClick={increment} sx={{ mr: 2 }}>
        プラス
      </Button>
      <Button variant="contained" onClick={decrement} sx={{ mr: 2 }}>
        マイナス
      </Button>
      <Button variant="outlined" onClick={reset}>
        リセット
      </Button>
    </div>
  );
}
