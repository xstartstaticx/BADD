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
      <div className="flex flex-col items-center justify-center border-4  border-solid border-[#1eb7b7] rounded-lg h-[625px] bg-[#116666] ">
        <img
          src={Logo}
          className=" w-[300px] p-5 border-8 border-solid rounded-lg bg-[#e8f9f9]  "
          alt=""
        />
        <h1 className="my-8 text-4xl border-b-2 border-[#EE1442]">Take care!</h1>
        <p className="w-[50%] text-[1rem] text-center ">
         Take Care Take Care Take Care   Take Care Take Care Take Care  
        </p>
        <div className="flex flex-row gap-8 mt-8">
          <button
            className="motion-safe:hover:-translate-x-0.5 motion-safe:transition bg-[#116666] hover:border-[#EE1442] px-5 py-2 text-[1rem] border-2 rounded-lg"
            onClick={handleSignUpClick}
          >
            Sign up
          </button>
          <button
            className="motion-safe:hover:-translate-x-0.5 motion-safe:transition bg-[#116666] hover:border-[#EE1442] px-5 py-2 text-[1rem] border-2 rounded-lg"
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
