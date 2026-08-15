import React from "react";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen relative">
      {/* Back to Home */}
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral text-white rounded-md font-semibold text-sm hover:bg-gray-700 transition duration-200"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Login / Register */}
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
