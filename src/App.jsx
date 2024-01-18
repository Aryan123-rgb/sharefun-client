import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import { useSelector } from "react-redux";
import Login from "./Pages/Login";
import "./index.css";
import Home from "./Pages/Home";
import MyComponent from "./components/MyComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div data-theme={theme} className="w-full min-h-[100vh]">
      <ToastContainer />
      <Routes>
        <Route path="/test" element={<MyComponent />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
