import React from 'react';

const Category = () => {
  return(
      <div className='bg-white mt-10 rounded-lg px-8 py-5'>
          <h1 className="font-bold text-2xl font-sans mb-5">
              Category
          </h1>
          <div className="flex flex-col gap-2" >
              <a href="/">Politics</a>
              <a href="/">National</a>
              <a href="/">International</a>
              <a href="/">Regulation</a>
              <a href="/">Business</a>
              <a href="/">Finance</a>
              <a href="/">Health Care</a>
              <a href="/">Jobs</a>
              <a href="/">Bollywood</a>
              <a href="/">Kids</a>
              <a href="/">Media</a>
          </div>
      </div>
  )
};

export default Category;
