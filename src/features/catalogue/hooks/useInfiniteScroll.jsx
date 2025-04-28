import { useEffect, useRef } from "react";

export default function useInfiniteScroll(setPage, loading) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const target = loaderRef.current;
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    });

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [loading, setPage]);

  return { loaderRef };
}
