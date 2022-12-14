import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <label htmlFor="">
        Username:
        <input
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className="border-2 border-black"
        />
      </label>
      <label htmlFor="">
        Password:
        <input
          type="text"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="border-2 border-black"
        />
      </label>
      <button
        onClick={handleLogin}
        className="p-2 border-2 bg-slate-500 text-white"
      >
        Register
      </button>
    </div>
  );
};
export default Login;
