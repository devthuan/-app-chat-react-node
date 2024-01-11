import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "../../redux/friendSlice";
import FigmaImg from "../../assets/images/figma.png"
import {useNavigate} from "react-router-dom"


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [username, setUsername] = useState("")

  let handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addFriend({
      id: 10,
      name: username,
      avatar: FigmaImg,
      lassMessage: "chat with you...",
    }))

    navigate("/")
    

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-white"
        >
          Username
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="username"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Join
        </button>
      </div>
    </form>
  );
};

export default Login;
