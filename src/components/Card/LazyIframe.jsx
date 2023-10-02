import React, { useState, useEffect, useRef } from "react";

const LazyIframe = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeContainerRef = useRef(null);

  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.onload = () => {
      setIsLoading(false);
    };
    iframe.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };

    iframe.className = "w-full h-full";

    iframeContainerRef.current.appendChild(iframe);

    return () => {
      if (iframe && iframeContainerRef.current) {
        iframeContainerRef.current.removeChild(iframe);
      }
    };
  }, [url]);

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="h-full flex justify-center items-center w-full">
          <p className="text-slate-600 text-xl font-medium">Loading...</p>
        </div>
      )}
      {hasError && <p className="text-red-500 text-xl font-medium">Error</p>}
      <div
        ref={iframeContainerRef}
        className={`${isLoading || hasError ? "hidden" : ""} w-full h-full`}
      ></div>
    </div>
  );
};

export default LazyIframe;
