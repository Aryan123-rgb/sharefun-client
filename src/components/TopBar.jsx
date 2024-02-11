import React from "react";
import { TbSocial } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import TextInput from "./Reusable-components/TextInput";
import CustomButton from "./Reusable-components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { SetTheme } from "../redux/slice/themeSlice";
import { useForm } from "react-hook-form";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import MobileMenu from "./MobileMenu";

const TopBar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.themeReducer);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = React.useState(false);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";
    dispatch(SetTheme(themeValue));
  };

  const handleLogout = () => {
    localStorage.removeItem("shareFunUserId");
    navigate("/");
  };

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
      <Link to="/" className="flex gap-2 items-center">
        <div className="p-1 md:p-2 bg-[#065ad8] rounded text-white">
          <TbSocial />
        </div>
        <span className="text-xl md:text-2xl text-[#065ad8] font-semibold">
          ShareFun
        </span>
      </Link>

      <div className="hidden md:flex items-center justify-center">
        <div className="w-full flex flex-col mt-2">
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className={`bg-secondary rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666] w-[18rem] lg:w-[38rem]  rounded-l-full`}
            />
          </div>
        </div>
        <CustomButton
          title="Search"
          type="submit"
          containerStyles="bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full"
        />
      </div>

      {/* ICONS */}
      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        <button onClick={handleTheme}>
          {theme === "dark" ? <BsMoon /> : <BsSunFill />}
        </button>
        <div className="mt-2">
          <MobileMenu handleLogout={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
