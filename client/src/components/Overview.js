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
            <h1 className="text-2xl text-[black] m-auto">Health Pass</h1>
            <form className="flex flex-col gap-4 h-[500px] overflow-y-auto">
              
              <div className="bg-[#a6eaea] rounded-lg h-[100px]">
                <div className="flex gap-2 my-5 items-center p-2" key={idx}>
                  <div className="">
                        <Label htmlFor="age1" value="Name:"  />
                        <p className="w-[10rem]  bg-[#d2f4f4] rounded p-[10px] text-[black]">{item.username}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex gap-4 my-5 items-center p-4" key={idx}>
                  <div className="">
                        <Label htmlFor="age1" value="Email:" className="bg-[#d2f4f4]" />
                        <p className="w-[10rem] bg-[#d2f4f4] text-[black]">{item.email}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-4 my-5 items-center p-4" key={idx}>
                  <div className="">
                        <Label htmlFor="age1" value="Password:" />
                        <p className="w-[10rem] text-[black]">{item.username}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-4 my-5 items-center p-4" key={idx}>
                  <div className="">
                        <Label htmlFor="age1" value="Age:" />
                        <p className="w-[10rem] text-[black]">{item.age}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-4 my-5 items-center p-4" key={idx}>
                  <div className="">
                        <Label htmlFor="age1" value="Age:" />
                        <p className="w-[10rem] text-[black]">{item.age}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-4 my-5 items-center p-4" key={idx}>
                  <div className="">
                        <Label htmlFor="age1" value="Age:" />
                        <p className="w-[10rem] text-[black]">{item.age}</p>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex justify-center sticky ">
              <Link to={"/Dashboard/users/edit/" + item._id}>
                <button className="border-2 border-black bg-blue-400 p-2">
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