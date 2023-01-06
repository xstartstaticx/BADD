import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  console.log(data);
  const handleLogin = async () => {
    const response = await axios.post("/users/login", data);
    console.log(response);
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg"> Username : </h2>
        <input
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className=" w-full px-2 py-3 custom-input border border-slate-500 rounded-md font-bold  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg"> Password : </h2>
        <input
          type="text"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="w-full px-2 py-3 custom-input border border-slate-500 rounded-md font-bold  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <br />
      <button
        onClick={handleLogin}
        className="p-3 px-[5rem] custom-button font-bold"
      >
        Login
      </button>
    </div>
  );
};
export default Login;
