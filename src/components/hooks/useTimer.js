import { useEffect, useState } from "react";

export function useTimer({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return { visible };
}
