import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppAssets from "../assets/AppAssets";
import AppPaths from "../routes/AppPaths";
import { auth } from "../utils/firebase";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate(AppPaths.DEFAULT);
      })
      .catch((error) => {
        // An error happened.
        navigate(AppPaths.ERROR);
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 flex justify-between">
      <img className="w-52" src={AppAssets.logo} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img
            src={AppAssets.profileLogo}
            alt="profile-logo"
            className="w-12 h-12"
          />
          <button onClick={handleSignOut}>(Sign Out)</button>
        </div>
      )}
    </div>
  );
};

export default Header;
