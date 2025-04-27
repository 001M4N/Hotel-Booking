import { useState, useEffect } from "react";

export default function useAPICall(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Loading Failed");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  console.log(error);

  return { data, loading, error };
}
