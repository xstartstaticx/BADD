import { useNavigate } from "react-router-dom";
import Logo from "./images/caduceus.png";
import Overview from "./components/Overview";

function App() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/register");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="h-[100vh] w-[100%] m-auto flex justify-center items-center">
      <div className="flex flex-col items-center justify-center border border-solid rounded-lg h-[625px]   ">
        <img
          src={Logo}
          className="w-[300px] p-5 border border-solid rounded-lg  "
          alt=""
        />
        <h1 className="my-8 text-4xl">BADD Healthcare</h1>
        <p className="w-[50%] text-[1rem] text-center ">
          Please register an account or login to use all the BADD features!
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
