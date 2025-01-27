import { useEffect } from "react";

export default function useDebounce<T>(
  cb: (value?: T) => void,
  value: T,
  delay: number
) {
  useEffect(() => {
    const handler = setTimeout(cb, delay, value);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
}
