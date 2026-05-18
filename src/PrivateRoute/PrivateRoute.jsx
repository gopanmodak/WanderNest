import { useContext } from "react"
import { AuthProvider } from "../Context/AuthContext"
import { PuffLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

  const {user,loading} =useContext(AuthProvider);
  const location = useLocation()
  if(loading){
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    )
  }
if(!user){
  return ( <Navigate to="/login" state={{from: location}} replace/>)
}

  return (
    children
  )
}

export default PrivateRoute