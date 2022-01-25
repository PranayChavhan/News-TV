import React from "react";
import RelatedNews from "../contsiner/RelatedNews";

const Related = () => {
  return (
    <div>
      <div className=" flex justify-between items-baseline px-3 sm:px-0">
        <h1 className="font-bold text-2xl font-sans">Related News</h1>
        <a className="text-sm font-sans font-medium" href="#">
          See all
        </a>
      </div>
      <div className="sm:flex-col flex overflow-x-auto gap-1">
        <RelatedNews />
        <RelatedNews />
        <RelatedNews />
        <RelatedNews />
        <RelatedNews />
        <RelatedNews />
        <RelatedNews />
        <RelatedNews />
        <RelatedNews />
        <RelatedNews />
      </div>
    </div>
  );
};

export default Related;
