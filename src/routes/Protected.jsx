import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/AuthContext";

// eslint-disable-next-line react/prop-types
export const Protected = ({ children }) => {

  const { authUser } = useContext(Context)

  if (!authUser) {
    return (
      <Navigate to="/signin" replace />
    )
  } else {
    return (
      <div>
        {children}
      </div>
    )
  }

}