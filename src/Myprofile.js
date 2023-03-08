import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { store } from "./App";

const Myprofile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {data && (
        <center>
          welcome to {data.username} dashboard!
          <br />
          <button onClick={() => setToken(null)}>Logout</button>
        </center>
      )}
    </div>
  );
};

export default Myprofile;
