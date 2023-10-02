import { useState } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ img, hosted, siteName, url, github }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="h-48 flex flex-col justify-between">
      <div className="h-32 flex justify-center items-center">
        {isOpened ? (
          <>
            {isLoading && (
              <p className="text-slate-600 text-xl font-medium">Loading...</p>
            )}
            {hasError && (
              <p className="text-red-500 text-xl font-medium">Error</p>
            )}
            <iframe
              src={url}
              className={`h-full ${isLoading || hasError ? "hidden" : ""}`}
              width={"100%"}
              onLoad={handleLoad}
              onError={handleError}
            />
          </>
        ) : (
          <LazyLoadImage
            alt="siteImage"
            className="rounded-lg"
            src={img}
            effect="blur"
            placeholderSrc={`/compressed${img}`}
          />
        )}
      </div>

      <div>
        <div className="flex justify-between mt-3 text-slate-600 font-medium">
          <a href={`https://github.com/${github}/`} target="_blank">
            <p>{github.length > 19 ? `${github.substr(0, 19)}...` : github}</p>
          </a>
          <p>{hosted}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <a
              href="#"
              className="text-slate-400 flex items-center gap-1"
              onClick={() => setIsOpened((prev) => !prev)}
            >
              <MdOutlineOpenInBrowser
                className={isOpened ? "rotate-180" : ""}
              />
            </a>
            <a
              href={url}
              target="_blank"
              className="text-slate-400 flex items-center gap-1"
            >
              <IoOpenOutline />
            </a>
          </div>
          <h3 className="text-slate-600 font-medium">
            {siteName.length > 20 ? `${siteName.substr(0, 20)}...` : siteName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
