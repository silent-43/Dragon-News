import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("You Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      {/* User Email */}
      <div className="min-w-[220px]">
        {user ? (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-lg">
            <span className="text-sm font-semibold text-secondary">
              {user.email}
            </span>
          </div>
        ) : (
          <span className="text-gray-400 text-sm">Welcome, Guest</span>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-lg text-base font-bold transition-all duration-300 ${
              isActive
                ? "bg-accent text-white shadow-md"
                : "text-accent hover:bg-accent hover:text-white hover:shadow-md"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-lg text-base font-bold transition-all duration-300 ${
              isActive
                ? "bg-accent text-white shadow-md"
                : "text-accent hover:bg-accent hover:text-white hover:shadow-md"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/career"
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-lg text-base font-bold transition-all duration-300 ${
              isActive
                ? "bg-accent text-white shadow-md"
                : "text-accent hover:bg-accent hover:text-white hover:shadow-md"
            }`
          }
        >
          Career
        </NavLink>
      </div>

      {/* User / Login */}
      <div className="flex gap-4 justify-center items-center min-w-[220px] justify-end">
        {/* Profile Image */}
        <div className="w-12 h-12 overflow-hidden border-2 rounded-full">
          <img
            src={user ? user.photoURL : userIcon}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login / Logout */}
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-primary px-7 text-base font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary px-7 text-base font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
