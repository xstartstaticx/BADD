import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Context } from "./Context";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  Label,
  TextInput,
  Checkbox,
  Button,
  Select,
  Radio,
  Dropdown,
} from "flowbite-react";

const Overview = () => {

  const {id} = useParams ()
  const { state, dispatchState } = useContext(Context);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/users/list");
      dispatchState({ type: "loadUsers", payload: response.data.users });
    };
    getData();
  }, [dispatchState]);

  return (
    <div className="flex flex-col justify-center align-center w-[100vw]  border border-solid min-h-screen ">
      {state?.users?.filter(item => item._id === id).map((item,idx) => (
        <div className="w-[375px] m-auto ">
          <Card>
            <h1 className="text-2xl text-[#d2f4f4] bg-[#116666] p-[20px] rounded-lg m-auto">Health Pass</h1>
            <form className="flex flex-col gap-1 h-[500px] overflow-y-auto  ">
              
              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        {/* <Label htmlFor="name" value="Name:"  /> */}
                        <p className="text-xl">Name:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.username}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        {/* <Label htmlFor="name" value="Name:"  /> */}
                        <p className="text-xl">Age:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.age}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        {/* <Label htmlFor="name" value="Name:"  /> */}
                        <p className="text-xl">Age:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.age}</p>
                  </div>
                </div>
              </div>
              

              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        <p className="text-xl">Medical Conditions:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.medicalConditions}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        <p className="text-xl">Allergies:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.allergies}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        <p className="text-xl">Medication:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.medication}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        <p className="text-xl">Bloodtype:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.bloodType}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        <p className="text-xl">Weight:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.weight}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#116666] rounded-lg h-[100px]">
                <div className="flex my-5 items-center p-1" key={idx}>
                  <div className="">
                        <p className="text-xl">Height:</p>
                        <p className="w-[10rem] text-base bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.height}</p>
                  </div>
                </div>
              </div>
              
            
            </form>
            <div className="flex justify-center sticky ">
              <Link to={"/Dashboard/users/edit/" + item._id}>
                <button className="border-2 border-black bg-[#116666] rounded-lg p-2">
                Edit
                </button>
              </Link>
              </div>
          </Card>
      </div>
      ))}   
  </div>)
};
export default Overview;


/* 
<Link to={"/Dashboard/users/edit/" + item._id}>
<button className="border-2 border-black bg-blue-400 p-2">
  Edit
</button>
</Link> */