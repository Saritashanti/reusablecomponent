import React, { useState } from "react";
import "./LoginPage.css";
import CommanInput from "./Components/CommanInput";
import Button from './Components/Button'

const LoginPage = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // console.log(name, value);
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      ...login,
      id: new Date().getTime().toString(),
    };
    // console.log(data);
    setData([...data, newData]);
    // console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="imgBx">
          <img
            src={"https://wallpaperaccess.com/full/3214390.jpg"}
            alt="bgImage"
          />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBx">
                <span>Username</span>
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  id="username"
                  value={login.username}
                  onChange={handleChange}
                />
              </div>
              <div className="inputBx">
                <span>Password</span>
                {/*
              <input
                  type="Password" autoComplete="off" name="password" id="password" value={login.password} onChange={handleChange}
                />
              */}
                <CommanInput
                  type="Password"
                  // autoComplete="off"
                  name="password"
                  // id="password"
                  value={login.password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div className="inputBx">
                {/*<button className="btn" type="submit"> Continue </button>*/}
                <Button className="btn" type="submit" buttontext='Continue' />
              </div>
            </form>
            <br />
            <div className="mapdiv">
              {data.map((item) => {
                return (
                  <div className="row_data" key={item.id}>
                    <h4>{item.username}</h4>
                    <h4>{item.password}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
