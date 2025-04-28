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
        if (err.message.includes("Failed to fetch")) {
          setError(
            new Error(
              "Unable to connect to the server, please try agian later."
            )
          );
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
}
