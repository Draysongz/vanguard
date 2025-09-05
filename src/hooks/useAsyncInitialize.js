
import { useEffect, useState } from "react";

export function useAsyncInitialize(func) {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      setState(await func());
    })();
    return () => {};
  }, []);

  return state;
}