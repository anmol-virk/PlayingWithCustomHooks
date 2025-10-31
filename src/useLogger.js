import { useState } from "react";

export function useLogger(init, msg) {
  const [value, setValue] = useState(init);
  console.log(`${msg}: ${value}`);

  return { value, setValue };
}
