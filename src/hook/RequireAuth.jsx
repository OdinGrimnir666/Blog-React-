import { useEffect } from "react";
import { useSelector } from "react-redux";
import {Navigate, useLocation, useNavigate } from "react-router-dom";

const RequiteAuth = ({ children }) => {
  const { auth } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  // useEffect(() => {

  // },)

  const location = useLocation();

  if (!auth) {

    return <Navigate to="/login" state={{from: location}}/>
  }

  return children;
};

export { RequiteAuth };
