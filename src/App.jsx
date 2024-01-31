import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import { useSelector } from "react-redux";
import Login from "./Pages/Login";
import "./index.css";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Pages/ForgotPassword";
import NewPasswordForm from "./components/ResetPassword/NewPasswordForm";

export default function App() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div data-theme={theme} className="w-full min-h-[100vh]">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPasswordForm />} />
      </Routes>
    </div>
  );
}
