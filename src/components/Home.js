import React from 'react';
import Navbar from './Navbar';
import Profile from '../contsiner/Profile';
import Category from '../contsiner/Category';
import Main from '../contsiner/Main';
import Related from '../components/Related';

const Home = () => {


  return(
      <div className="bg-[#f8f9fa] min-h-screen" >
          <Navbar/>
          <div className='grid grid-cols-6 gap-8 min-h-screen px-20  py-5' >
            <div className='col-start-1 col-end-2 mt-2'>
              <Profile/>
              <Category/>
            </div>
            <div className='col-start-2 col-end-5'>
              <Main/>
            </div>
            <div className='col-start-5 col-end-7'>
              <Related/>
            </div>
          </div>
      </div>
  );
};

export default Home;
