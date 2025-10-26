import { useState, useEffect } from "react";
import { getComponentDataBySlug } from "@utils/componentDataLoader";

export function useComponentData(slug) {
  const [componentData, setComponentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      const data = getComponentDataBySlug(slug);
      setComponentData(data);
    } catch (err) {
      setError(err.message);
      setComponentData(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  return { componentData, loading, error };
}
