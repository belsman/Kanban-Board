import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./AuthenticationSlice";

function Logout() {

  const dispatch = useDispatch();

  return (
      <button 
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    );
}

export default Logout;
