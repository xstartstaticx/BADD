import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/users/findOne/" + id);
      if (response.data.success) setData(response.data.user);
    };
    getData();
  }, [id]);
  const handleEdit = async () => {
    const response = await axios.patch("/users/edit", data);
    console.log(response);
    if (response.data.success) navigate("/dashboard");
  };
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <label htmlFor="">
        <h2 className="p-2 font-bold text-lg"> Username : </h2>
        <input
          value={data.username}
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className="border-2 border-black"
        />
      </label>
      <label htmlFor="">
        Email:
        <input
          value={data.email}
          type="text"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="border-2 border-black"
        />
      </label>
      <label htmlFor="">
        Password:
        <input
          value={data.password}
          type="text"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="border-2 border-black"
        />
      </label>
      <button
        onClick={handleEdit}
        className="p-2 border-2 bg-slate-500 text-white"
      >
        Edit/Save
      </button>
    </div>
  );
};
export default EditUser;
