import React, { useState } from "react";
import axios from "axios";

const Register = () => {
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
      .post("http://localhost:5000/register", data)
      .then((res) => alert(res.data));
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler} autoComplete="off">
          <h3>Register</h3>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={changeHandler}
          />
          <br />
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
          <input
            type="password"
            name="confirmpassword"
            placeholder="confirmpassword"
            onChange={changeHandler}
          />
          <br />
          <input type="submit" value="Register" />
        </form>
      </center>
    </div>
  );
};

export default Register;
