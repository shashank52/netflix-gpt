import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppAssets from "../assets/AppAssets";
import AppPaths from "../routes/AppPaths";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate(AppPaths.ERROR);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate(AppPaths.BROWSE);
        // ...
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        navigate(AppPaths.DEFAULT);
      }
    });
    // Unsubscribe when components unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-full px-8 py-2 flex justify-between z-10">
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
