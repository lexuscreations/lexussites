import Card from "./components/Card";
import { sitesDataArrObj } from "./config";

const App = () => {
  return (
    <div className="h-screen bg-slate-100 flex justify-center flex-col overflow-auto">
      <div className="my-3 w-11/12 sm:w-5/6 mx-auto">
        <h2 className="text-xl font-medium text-slate-500">
          LexusSite's | {sitesDataArrObj.length}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full sm:w-5/6 h-full sm:h-4/5 overflow-auto mx-auto border bg-slate-50 p-2 sm:p-12 rounded-lg border-slate-300">
        {sitesDataArrObj.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            hosted={item.hosted}
            siteName={item.siteName}
            url={item.url}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
