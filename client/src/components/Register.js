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
    <div className="h-[100vh]  m-auto flex justify-center items-center">
      <div className="flex flex-col items-center justify-center border-4  rounded-lg h-[500px] w-[400px]  border-solid border-[#1eb7b7] bg-[#116666] ">
      <img
        src={Logo}
        className="w-[100px] h-[100px] p-2 mb-5 border-2 border-solid rounded-lg bg-[#e8f9f9] "
        alt=""
      />
      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg"> Username : </h2>

          <input
            type="text"
            onChange={(e) => setData({ ...data, username: e.target.value })}
            className="w-full px-5 py-3  
            bg-[#062828]
            border-2
            border-[#d2f4f4]
            rounded-md font-bold 
            focus:border-[#116666]
            rounded-xl
            "
          />
      </label>
      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg"> Email : </h2>
        <input
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-full px-5 py-3  
          bg-[#062828]
          border-2
          border-[#d2f4f4]
          rounded-md font-bold 
          focus:border-[#116666]
          rounded-xl
          "
        />
      </label>
      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg">Password : </h2>
        <input
          type="text"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="w-full px-5 py-3  
          bg-[#062828]
          border-2
          border-[#d2f4f4]
          rounded-md font-bold 
          focus:border-[#116666]
          rounded-xl
        
          "
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
        className="p-3 px-[5rem] font-bold
          px-5 py-3  
          bg-[#062828]
          border-2
          border-[#d2f4f4]
          rounded-md font-bold 
          focus:border-[#116666]
          rounded-2xl
          motion-safe:hover:-translate-x-0.5 motion-safe:transition bg-[#116666] hover:border-[#EE1442] px-5 py-2 text-[1rem] border-2 
        "
      >
        Register
      </button>
      </div>
    </div>
  );
};
export default Register;
