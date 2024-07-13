import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/login")
  }

  return (
    <div className='w-screen h-[80px] border-b-2 flex items-center justify-between px-20'>
        <p className='text-4xl font-bold '>Smart-Finance</p>
        <div className='flex items-center justify-center w-auto h-[100px] '>
          <img className='w-[50px] h-[50px] rounded-full border-2 ' alt="" />
          <div className="ml-4">
            <p>Mr-Bellali</p>
            <div className='flex items-center'>
              <button><p className="mr-2">Settings </p></button>
              |
              <button className="ml-2" onClick={handleLogout}><p>LOGOUT</p></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;
