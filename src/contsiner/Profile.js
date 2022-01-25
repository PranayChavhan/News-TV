import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { auth } from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { setSignOutState } from "../features/user/userSlice";
import { signOut } from "firebase/auth";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleAuth = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    };


  return (
    <div className="bg-white mt-10 rounded-lg px-8 py-5 hidden lg:block">
      <div className="flex justify-between items-baseline">
        <img src="/images/facebook.svg" alt="" />
        <div className=" xl:block hidden cursor-pointer flex-col items-end ">
          <div className="hover:opacity-100">
            <FiSettings />
            <IoIosArrowDown />
          </div>
          <div className="min-h-fit pt-7 rounded-md absolute -mr-6 opacity-0 hover:opacity-100 ">
          <button 
          onClick={handleAuth}
          className="hover:opacity-70 bg-black text-white text-[16px] p-1 rounded-md">
            Sign out
          </button>
          </div>
        </div>
      </div>
      <span className="text-sm font-medium">Pranay Chavhan</span>
    </div>
  );
};

export default Profile;
