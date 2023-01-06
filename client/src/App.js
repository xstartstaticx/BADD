import { useNavigate } from "react-router-dom";
import "./App.css";
import Logo from "./images/caduceus.png";

function App() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/register");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="h-[100vh] w-[70%] m-auto flex justify-center items-center">
      <div className="flex flex-col items-center justify-center border border-solid rounded-lg h-[625px]   ">
        <img
          src={Logo}
          className="w-[300px] p-5 border border-solid rounded-lg  "
          alt=""
        />
        <h1 className="my-8 text-4xl">Main Title</h1>
        <p className="w-[50%] text-[1rem] text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-row gap-8 mt-8">
          <button
            className="bg-blue-500 px-5 py-2 text-[1rem] rounded-lg"
            onClick={handleSignUpClick}
          >
            Sign up
          </button>
          <button
            className="bg-blue-500 px-6  py-2 text-[1rem] rounded-lg"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
