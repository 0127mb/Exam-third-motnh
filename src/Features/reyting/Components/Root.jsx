import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuth = false;
    if (!isAuth) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 100000);
         return () => clearInterval(timer);
    }
 
  }),
    [];
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
