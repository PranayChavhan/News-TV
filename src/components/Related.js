import React, { useEffect, useState } from "react";
import RelatedNews from "../contsiner/RelatedNews";
import { GrView } from "react-icons/gr";

const Related = () => {
  const [article, setArticle] = useState([]);

  const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4d0cd325c25643cd82968865b76e41a0";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
          console.log(json.articles)
          setArticle(json.articles)
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);


  return (
    <div>
      <div className=" flex justify-between items-baseline px-3 sm:px-0">
        <h1 className="font-bold text-2xl font-sans">Related News</h1>
        <a className="text-sm font-sans font-medium" href="#">
          See all
        </a>
      </div>
      <div className="sm:flex-col flex overflow-x-auto gap-1">

      {article.map((item) => {
        return(
          <div className="bg-white rounded-lg px-2 py-2 mt-4">
          <div className="flex justify-center items-center">
            <img
              className="object-cover rounded-md sm:h-52 w-full"
              src={item.urlToImage}
              alt=""
            />
          </div>
    
          <div className="px-4 py-2">
            <div className=" pt-2 flex text-sm justify-between items-center">
              <button className="bg-red-100 sm:px-3 sm:py-1 px-1 -ml-4 sm:-ml-0 text-[#dc2f02] font-sans font-medium rounded-full text-[8px] sm:text-[12px]">
                CONGRESS
              </button>
              <a className="flex -mr-3 sm:-mr-0 justify-center items-center sm:gap-2 cursor-pointer">
                <GrView />
                <span>2.5m</span>
              </a>
            </div>
    
            <div>
              <h1 className=" pt-2 mb-2 font-semibold font-sans text-sm ">
               {item.title}
              </h1>
            </div>
          </div>
        </div>
        )
      })}
            

      </div>
    </div>
  );
};

export default Related;
