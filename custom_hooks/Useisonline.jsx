import { useState, useEffect } from "react";

function useIsOnline() {
  const [isonline, setisonline] = useState(navigator.onLine);

  function updateisonline() {
    setisonline(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener("online", updateisonline);
    window.addEventListener("offline", updateisonline);

    return () => {
      window.removeEventListener("online", updateisonline);
      window.removeEventListener("offline", updateisonline);
    };
  }, []);

  return { isonline };
}

export default useIsOnline;
