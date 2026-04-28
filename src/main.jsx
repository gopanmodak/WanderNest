import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import AuthContext from "./Context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <AuthContext >
    
    <RouterProvider router={router} />

    <ToastContainer />
    
    </AuthContext>
  </StrictMode>
);
