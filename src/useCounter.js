import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((count) => count + 1);
  }
  function decrement() {
    setCounter((count) => count - 1);
  }
  function reset() {
    setCounter(0);
  }
  return { counter, increment, decrement, reset };
}
