import React, { useState, useContext } from "react";
import axios from "axios";
import { store } from "./App";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const changeHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => setToken(res.data.token));
  };
  if (token) {
    return <Navigate to="/myprofile" />;
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h3>Login</h3>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={changeHandler}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </center>
    </div>
  );
};

export default Login;
