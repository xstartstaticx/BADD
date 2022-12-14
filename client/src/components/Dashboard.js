import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/users/list");
      dispatch({ type: "loadUsers", payload: response.data.users });
    };
    getData();
  }, [dispatch]);
  const handleDelete = async (id) => {
    console.log(id);
    const response = await axios.delete("/users/delete/" + id);
    console.log(response);
    if (response.data.success) {
      dispatch({ type: "removeUser", payload: id });
    }
  };
  return (
    <div>
      {state?.users?.map((item) => (
        <div className="flex gap-4 my-5 items-center p-4" key={item._id}>
          <p className="w-[10rem]"> Username: {item.username}</p>
          <p className="w-[10rem]"> Email: {item.email}</p>
          <button
            onClick={() => handleDelete(item._id)}
            className="border-2 border-black bg-red-400 p-2"
          >
            Delete
          </button>
          <Link to={"/Dashboard/users/edit/" + item._id}>
            <button className="border-2 border-black bg-blue-400 p-2">
              Edit
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Dashboard;
