import { useEffect, useState } from "react";

function useActiveJobId() {
  const [activeJobId, setActiveJobId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveJobId(+id); // the plus sign covert the string to a number
    };

    handleHashChange(); // run this function initially

    window.addEventListener("hashchange", handleHashChange); // run on hash change

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeJobId;
}

export default useActiveJobId;
