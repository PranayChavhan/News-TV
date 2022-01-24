import React from 'react';
import { GrView } from "react-icons/gr";


const RelatedNews = () => {
  return(
      <>
    <div className="bg-white rounded-lg px-2 py-2 mt-4">
      <div className="flex justify-center items-center">
        <img
          className="object-cover rounded-md h-52 w-full"
          src="https://www.unhcr.org/thumb1/58ca90ff4.jpg"
          alt=""
        />
      </div>

      <div className="px-4 py-2">
        <div className=" pt-2 flex text-sm justify-between items-center">
          <button className="bg-red-100 px-3 py-1 text-[#dc2f02] font-sans font-medium rounded-full text-[12px]">
            CONGRESS
          </button>
          <a className="flex  justify-center items-center gap-2 cursor-pointer">
            <GrView />
            <span>2.5m</span>
          </a>
        </div>

        <div>
          <h1 className=" pt-2 mb-2 font-semibold font-sans text-sm ">
            For a complete list of all available state modifiers, check out
            the Hover, Focus, Other States documentation.
          </h1>
        </div>
      </div>
    </div>
  </>
  )
};

export default RelatedNews;
