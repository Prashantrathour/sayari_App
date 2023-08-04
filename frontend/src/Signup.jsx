import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postuser } from "./Redux/siginup/action";

const SignupForm = () => {
  // const userdata={}
  const  [userdata, setdata ] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const data = useSelector((store) => store.signupreducer);
  console.log(data);
  const inputhandler = (e) => {
    const { value, name } = e.target;

    setdata({ ...userdata, [name]:value });
   
  };
 const formsubmit=()=>{
    dispatch(postuser(userdata))
 }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <form onSubmit={formsubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={inputhandler}
              name="name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={inputhandler}
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={inputhandler}
              name="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
