import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import SignupForm from "./Signup";
import SigninForm from "./Signin";
import { NavLink } from "react-router-dom";
import MainRoute from "./Routes/MainRoute";

function App() {
  const getmessage = async () => {
    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: "hello how are you ?",
      }),
    };
    try {
      const response = await fetch(`http://localhost:8080/comp`, options);
      const data = response.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getmessage();
  }, []);
  return (
    <div className="App">
      <nav className="w-full">
        <ul className="flex justify-around mx-0 my-0 bg-yellow-300 p-5">
          <li className="cursor-pointer font-bold">Logo</li>
          <NavLink to={"/signup"}>
            <li className="cursor-pointer font-bold">Signup</li>
          </NavLink>
          <li className="cursor-pointer font-bold">Contect</li>
          <li className="cursor-pointer font-bold">about</li>
          <li className="cursor-pointer font-bold">services</li>
        </ul>
      </nav>

      <MainRoute />
    </div>
  );
}

export default App;
