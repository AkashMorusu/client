import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "./App";

const Nav = () => {
  const [token, setToken] = useContext(store);
  return (
    <div>
      {!token && (
        <>
          <ul style={{ marginLeft: "75%" }}>
            <Link to="/register">Register</Link>&nbsp;&nbsp;
            <Link to="/login">Login</Link>
          </ul>
        </>
      )}
    </div>
  );
};

export default Nav;
