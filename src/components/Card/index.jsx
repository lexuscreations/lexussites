import { useState, lazy, Suspense } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyIframe = lazy(() => import("./LazyIframe"));

const getShortenedGithubName = (github) => {
  return github.length > 19 ? `${github.substr(0, 19)}...` : github;
};

const getShortenedSiteName = (siteName) => {
  return siteName.length > 20 ? `${siteName.substr(0, 20)}...` : siteName;
};

const Card = ({ img, hosted, siteName, url, github }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIframe = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className="h-64 sm:h-72 md:h-56  flex flex-col justify-between">
      <div className="h-52 sm:h-60 md:h-36  w-full flex justify-center items-center overflow-hidden">
        <Suspense
          fallback={
            <div className="h-full flex justify-center items-center w-full">
              <p className="text-slate-600 text-xl font-medium">Loading...</p>
            </div>
          }
        >
          {isOpened && <LazyIframe url={url} />}
        </Suspense>
        <div className={`w-full h-full ${isOpened ? "hidden" : ""}`}>
          <LazyLoadImage
            alt="siteImage"
            className={`w-full h-full rounded-lg`}
            src={img}
            effect="blur"
            placeholderSrc={`/compressed${img}`}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-3 text-slate-600 font-medium">
          <a href={`https://github.com/${github}/`} target="_blank">
            <p>{getShortenedGithubName(github)}</p>
          </a>
          <p>{hosted}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <a
              href="#"
              className="text-slate-400 flex items-center gap-1"
              onClick={toggleIframe}
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
            {getShortenedSiteName(siteName)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
