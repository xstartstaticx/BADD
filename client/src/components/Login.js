import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { Context } from "./Context";
import { Card } from "flowbite-react";
import Logo from "../images/caduceus.png";


const Login = () => {
  const navigate = useNavigate();
  const { state, dispatchState } = useContext(Context);

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  console.log(data);

  const handleLogin = async () => {
    const response = await axios.post("/users/login", data);
    console.log(response);



    if (response.data.success) {
      dispatchState({
        type: "login",
        payload: response.data.user,
      });

      navigate("/adduser/" + response.data.user._id);
      // navigate("/overview/" + response.data.user._id);
    } else {
      if (response.data.errorId === 1) alert("Wrong email or password");
    }
  };
  return (
   
  <div className="flex flex-col justify-center align-center w-[100vw]  border border-solid min-h-screen ">  
    <div className="flex w-[375px] m-auto justify-center align-center ">
      <Card>
        <div className="flex justify-center ">
              <h1 className="text-2xl text-[#d2f4f4] bg-[#116666] p-[20px] rounded-lg  ">Login</h1>
              <img
              src={Logo}
              className=" w-[75px] border-2 border-solid rounded-lg bg-[#e8f9f9]  "
              alt=""
            />
        </div>
      <form className="flex flex-col gap-1 h-[500px] overflow-y-auto   ">      
        <div className="flex flex-col gap-4 h-screen items-center justify-center">
          <label htmlFor="" className=" bg-[#116666] rounded-lg">
            <h2 className="p-2 font-bold  text-[#e8f9f9]  text-lg"> Username : </h2>
            <input
              type="text"
              onChange={(e) => setData({ ...data, username: e.target.value })}
              className=" w-full px-2 py-3  bg-[#d2f4f4] text-[#116666] border rounded-md font-bold"
            />
          </label>
          <label htmlFor="" className=" bg-[#116666] rounded-lg">
            <h2 className="p-2 font-bold text-[#e8f9f9  ] text-lg"> Password : </h2>
            <input
              type="text"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full px-2 py-3  bg-[#d2f4f4] text-[#116666] border rounded-md font-bold "
            />
          </label>
          <br />
          <button
            type="submit"
            onClick={handleLogin}
            className="motion-safe:hover:-translate-x-0.5 motion-safe:transition bg-[#116666] hover:border-[#EE1442] px-5 py-2 text-[1rem] border-2 rounded-lg"
          >
            Login
          </button>
        </div>
        </form>   
      </Card>
    </div>
  </div>);
};
export default Login;
