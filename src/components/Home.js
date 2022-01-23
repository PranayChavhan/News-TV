import React from 'react';
import { useDispatch } from "react-redux";
import { auth } from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { setSignOutState } from "../features/user/userSlice";
import { signOut } from "firebase/auth";

const Home = () => {
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

  return(
      <div>
          <button className="bg-blue-500 p-5" onClick={handleAuth}>Sign out</button>
      </div>
  );
};

export default Home;
