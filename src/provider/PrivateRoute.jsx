import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);

  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    //if -> jodi user take tahole return children
    return children;
  }
  //r jodi na thake tahole navigate login
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;

  //   return (
  //     <div>
  //       <h2>This is from Private Route.</h2>
  //       {children}
  //     </div>
  //   );
};

export default PrivateRoute;
