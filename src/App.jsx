import { useState } from "react";
import { sitesDataArrObj } from "./config";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineOpenInBrowser } from "react-icons/md";

const Card = ({ img, hosted, siteName, url }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div className="rounded-lg overflow-hidden h-52">
        {isOpened ? (
          <iframe src={url} height={"100%"} width={"100%"} />
        ) : (
          <img src={img} alt="" className="" />
        )}
      </div>

      <div className="flex justify-between mt-3 text-slate-600 font-medium">
        <h3>
          {siteName.length > 18 ? `${siteName.substr(0, 18)}...` : siteName}
        </h3>
        <p>{hosted}</p>
      </div>

      <div>
        <a
          href="#"
          className="text-slate-400 flex items-center gap-1"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <MdOutlineOpenInBrowser className={isOpened ? "rotate-180" : ""} />
          {isOpened ? "Close" : "Open"}{" "}
        </a>
        <a
          href={url}
          target="_blank"
          className="text-slate-400 flex items-center gap-1"
        >
          <IoOpenOutline />
          Visit
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="h-screen bg-slate-100 flex justify-center flex-col overflow-auto">
      <div className="my-3 w-5/6 mx-auto">
        <h2 className="text-xl font-medium text-slate-500">
          LexusSite's | {sitesDataArrObj.length}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-5/6 h-4/5 overflow-auto mx-auto border bg-slate-50 p-12 rounded-lg border-slate-300">
        {sitesDataArrObj.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            hosted={item.hosted}
            siteName={item.siteName}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
