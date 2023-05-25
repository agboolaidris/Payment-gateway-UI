import { AiOutlineBook } from "react-icons/ai";
import { BsSim, BsWifi } from "react-icons/bs";

export const SummaryCard = () => {
  return (
    <div className="bg-gray-100 py-8 space-y-4 rounded-md mt-20">
      <div className="px-4 lg:px-10  -mt-32">
        <div className="bg-white shadow-md h-72 rounded  mx-auto p-3 lg:p-6 flex flex-col">
          <div className="flex justify-between">
            <BsSim className="w-8 h-8 text-zinc-500" />
            <BsWifi className="w-6 h-6 text-gray-700" />
          </div>
          <div className="mt-auto">
            <div className="text-gray-700">
              <p className="text-sm">Idris Agboola</p>
              <p className="flex items-center gap-1 text-sm font-semibold text-blue-950">
                <div className="[&>span]:bg-gray-900 flex  [&>span]:w-1 [&>span]:h-1 gap-1  [&>span]:rounded-full ">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <span>9826</span>
              </p>
            </div>
            <div className="flex justify-between items-center text-gray-700 text-sm font-semibold">
              <p>09/20</p>
              <img src="/mastercard.svg" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-8 space-y-4 font-medium text-sm text-gray-600">
        <div className="flex justify-between flex-wrap">
          Company
          <span className="text-blue-900 font-semibold">Apple</span>
        </div>
        <div className="flex justify-between flex-wrap">
          Order Number
          <span className="text-blue-900 font-semibold">09825</span>
        </div>
        <div className="flex justify-between flex-wrap">
          Product
          <span className="text-blue-900 font-semibold">Macbook Air</span>
        </div>
      </div>
      <div className="flex items-center flex-wrap">
        <span className="bg-white w-4 h-7  rounded-r-full" />
        <div className="flex-1 h-[1px] border-dashed border-gray-300 border" />
        <span className="bg-white w-4 h-7  rounded-l-full" />
      </div>
      <div className="px-4 lg:px-8 flex justify-between text-gray-700">
        <div className="text-sm">
          <p>You have to pay</p>
          <p className="text-xl text-blue-950 font-semibold">
            549.
            <span className="text-xs font-normal">
              99 <span className="pl-1">USD</span>
            </span>
          </p>
        </div>
        <AiOutlineBook className="h-5 w-5" />
      </div>
    </div>
  );
};
