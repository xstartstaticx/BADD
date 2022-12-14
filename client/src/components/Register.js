import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";
import Logo from "../images/caduceus.png";

const Register = () => {
  const navigate = useNavigate();
  //   const [file, setFile] = useState(null);
  //   console.log(file);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    // image: "",
  });
  console.log(data);
  // const handleRegister = async () => {
  //   const formdata = new FormData();
  //   formdata.set("username", data.username);
  //   formdata.set("email", data.email);
  //   formdata.set("password", data.password);
  //   // formdata.set("image", file, "imageName");
  //   const response = await axios.post("/users/register", formdata);
  //   navigate("/login");
  // };
  const handleRegister = async () => {
    const response = await axios.post("/users/register", data);
    console.log("🚀 ~ handleRegister ~ response", response);

    if (response.data.success) navigate("/login");
  };

  //   const handleChange = (e) => {
  //     console.log("E is", e.currentTarget.files[0]);
  //     const url = URL.createObjectURL(e.currentTarget.files[0]);
  //     console.log(url);
  //     setData({ ...data, image: url });
  //     setFile(e.currentTarget.files[0]);
  //   };
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center ">
      <img
        src={Logo}
        className="w-[50px] h-[50px] absolute top-8 right-8"
        alt=""
      />
      {/* <a
        href="https://www.flaticon.com/free-icons/caduceus"
        title="caduceus icons"
        className="text-[5px]"
      >
        Caduceus icons created by wanicon - Flaticon
      </a> */}

      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg"> Username : </h2>

        <input
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className="w-full px-5 py-3 custom-input border border-slate-500 rounded-md font-bold  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
          "
        />
      </label>
      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg"> Email : </h2>
        <input
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-full px-5 py-3 custom-input border border-slate-500 rounded-md font-bold  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg">Password : </h2>
        <input
          type="text"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className=" w-full px-5 py-3 custom-input border border-slate-500 rounded-md font-bold  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>

      {/* <label className="border-2 border-black p-2 cursor-pointer rounded-md bg-red-200">
        Select Image
        <input onChange={handleChange} className="hidden" type="file" />
      </label>
      <img src={data.image} className="w-[300px] h-[300px]" alt="" /> */}
      <br />
      <button
        onClick={handleRegister}
        className="p-3 px-[5rem] custom-button font-bold"
      >
        Register
      </button>
    </div>
  );
};
export default Register;
