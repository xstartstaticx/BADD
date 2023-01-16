import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";
import Logo from "../images/caduceus.png";
import { Card } from "flowbite-react";

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
  const handleRegister = async (e) => {

    e.preventDefault()

    const response = await axios.post("/users/register", data);
    console.log("🚀 ~ handleRegister ~ response", response);

    if (response.data.success === true) navigate("/login");
  };

  //   const handleChange = (e) => {
  //     console.log("E is", e.currentTarget.files[0]);
  //     const url = URL.createObjectURL(e.currentTarget.files[0]);
  //     console.log(url);
  //     setData({ ...data, image: url });
  //     setFile(e.currentTarget.files[0]);
  //   };
  return (
    <div className="flex flex-col justify-center align-center w-[100vw]  border border-solid min-h-screen ">  
    <div className="w-[390px] m-auto justify-center align-center ">
      <Card>
        <div className="flex justify-center ">
              <h1 className="text-2xl text-[#d2f4f4] bg-[#116666] p-[20px] rounded-lg  ">Register</h1>
              <img
              src={Logo}
              className=" w-[75px] border-2 border-solid rounded-lg bg-[#e8f9f9]  "
              alt=""
            />
        </div>
      <form className="flex flex-col gap-1 h-[500px] overflow-y-auto   ">   
      <div className="flex flex-col gap-4 h-screen items-center justify-center">
            <label className=" bg-[#116666] rounded-lg">
            <h2 className="p-2 font-bold  text-[#e8f9f9]  text-lg"> Username : </h2>  

              <input
                type="text"
                onChange={(e) => setData({ ...data, username: e.target.value })}
                className="w-full px-5 py-3  
                bg-[#d2f4f4] text-[#116666] 
                border-2
                border-[#d2f4f4]
                rounded-md font-bold 
                focus:border-[#062828]
                rounded-lg
                "
              />
            </label>
            <label className=" bg-[#116666] rounded-lg">
              <h2 className="p-2 font-bold text-lg"> Email : </h2>
              <input
                type="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full px-5 py-3  
                bg-[#d2f4f4] text-[#116666] 
                border-2
                border-[#d2f4f4]
                rounded-md font-bold 
                focus:border-[#062828]
                rounded-lg
              "
              />
            </label>
            <label className=" bg-[#116666] rounded-lg">
              <h2 className="p-2 font-bold text-lg">Password : </h2>
              <input
                type="text"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="w-full px-5 py-3  
              bg-[#d2f4f4] text-[#116666] 
              border-2
              border-[#d2f4f4]
              rounded-md font-bold 
              focus:border-[#062828]
              rounded-lg
              "
              />
            </label>

          
           
            <button
              onClick={handleRegister}
              className="p-3 px-[5rem] font-bold
              px-5 py-3  
              bg-[#116666]
              border-2
              border-[#d2f4f4]
              rounded-md font-bold 
           
              rounded-2xl
              motion-safe:hover:-translate-x-0.5 motion-safe:transition bg-[#116666] hover:border-[#EE1442] px-5 py-2 text-[1rem] border-2 
            "
            >
              Register
            </button>
          </div>   
    
        </form>   
      </Card>
    </div>
  </div>

         
           );
};
export default Register;
