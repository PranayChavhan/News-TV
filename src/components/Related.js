import React from "react";
import RelatedNews from "../contsiner/RelatedNews";

const Related = () => {
  return (
    <div>
      <div className=" flex justify-between items-baseline">
        <h1 className="font-bold text-2xl font-sans">Related News</h1>
        <a className="text-sm font-sans font-medium" href="#">
          See all
        </a>
      </div>
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
  );
};

export default Related;
