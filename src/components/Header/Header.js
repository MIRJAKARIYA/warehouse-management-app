import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { GrMenu } from "react-icons/gr";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth)
  }
  return (
    <div className="navbar bg-blue-900 text-white py-7 z-50 sticky top-0">
      <div className="flex-1">
        <Link to="/" className="normal-case text-xl title-style">
          MILITARY WAREHOUSE
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="md:flex items-center hidden">
          <Link
            className="mr-8 font-semibold hover:text-red-800 duration-200"
            to="/home"
          >
            HOME
          </Link>
          <Link
            className="mr-8 font-semibold hover:text-red-800 duration-200"
            to="/manageitems"
          >
            MANAGE ITEMS
          </Link>

          <Link
            className="mr-8 font-semibold hover:text-red-800 duration-200"
            to="/additem"
          >
            ADD ITEM
          </Link>

          <Link
            className="mr-8 font-semibold hover:text-red-800 duration-200"
            to="/myitems"
          >
            MY ITEMS
          </Link>
          <Link
            className="mr-8 font-semibold hover:text-red-800 duration-200"
            to="/blogs"
          >
            BLOGS
          </Link>
          <Link
            className="mr-8 font-semibold hover:text-red-800 duration-200"
            to="/aboutus"
          >
           ABOUT US
          </Link>
          {
            user?<button onClick={handleSignOut}>sign out</button>:<Link
            className="mr-8 font-semibold hover:text-red-800 duration-200"
            to="/login"
          >
            LOGIN
          </Link>
          }
        </div>
        <div className="dropdown dropdown-end text-white">
          <button className="md:hidden block  text-2xl">
            <GrMenu></GrMenu>
          </button>
          <ul
            tabIndex="0"
            className="mt-3 text-black p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home" className="justify-between">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/manageitems" className="justify-between">
                MANAGE ITEMS
              </Link>
            </li>
            <li>
              <Link to="/additem" className="justify-between">
                ADD ITEM
              </Link>
            </li>
            <li>
              <Link to="/myitems" className="justify-between">
                MY ITEMS
              </Link>
              <Link to="/login" className="justify-between">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
