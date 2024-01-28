import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSocial } from "react-icons/tb";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { register, registerUser } from "../redux/slice/authSlice";
import { BgImage } from "../assets";
import CustomButton from "../components/CustomButton";
import { showToast } from "../utils/toast";
import Loading from "../components/Loading";

const Register = () => {
  const { status } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(register(data));
      const msg = response?.payload?.msg;
      const isError = response?.payload?.err;

      if (isError) {
        showToast(msg, "error");
        return;
      } else {
        showToast(msg, "success");
        dispatch(registerUser(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center ">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8] font-semibold">
              ShareFun
            </span>
          </div>

          <p className="text-ascent-1 text-base font-semibold">
            Create your account
          </p>

          <form
            className="mb-6 mt-4 flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <p className="text-gray-600 mb-1">First Name</p>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: "FirstName is Required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                }}
                render={({ field }) => (
                  <Input
                    size="lg"
                    {...field}
                    placeholder="First Name"
                    error={Boolean(errors?.username?.message)}
                  />
                )}
              />
              {errors?.username?.message && (
                <span className="error-text">{errors?.username?.message}</span>
              )}
            </div>
            <div>
              <p className="text-gray-600 mb-1">Last Name</p>
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: "LastName is Required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                }}
                render={({ field }) => (
                  <Input
                    size="lg"
                    {...field}
                    placeholder="Last Name"
                    error={Boolean(errors?.username?.message)}
                  />
                )}
              />
              {errors?.username?.message && (
                <span className="error-text">{errors?.username?.message}</span>
              )}
            </div>
            <div>
              <p className="text-gray-600 mb-1">Email Id</p>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email ID is Required",
                  pattern: {
                    value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    message: "Email ID is invalid",
                  },
                }}
                render={({ field }) => (
                  <Input
                    type="email"
                    size="lg"
                    {...field}
                    placeholder="example@gmail.com"
                    error={Boolean(errors?.email?.message)}
                  />
                )}
              />
              {errors?.email?.message && (
                <span className="error-text">{errors?.email?.message}</span>
              )}
            </div>
            <div>
              <p className="text-gray-600 mb-1">Password</p>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is Required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                    message:
                      "Password not strong enough. Should contain one capital letter, one small letter, one number, and one special character",
                  },
                }}
                render={({ field }) => (
                  <Input
                    type="password"
                    size="lg"
                    {...field}
                    placeholder="Password"
                    error={Boolean(errors?.password?.message)}
                  />
                )}
              />
              {errors?.password?.message && (
                <span className="error-text">{errors?.password?.message}</span>
              )}
            </div>
            {status == "pending" ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyles={`inline-flex justify-center rounded-md bg-blue-700 px-8 py-3 text-sm font-medium text-white outline-none`}
                title="Create Account"
              />
            )}
          </form>

          <p className="text-ascent-2 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#065ad8] font-semibold ml-2">
              Login
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className="hidden bg-blue-500 w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={BgImage}
              alt="Bg Image"
              className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
            />

            <div className="absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full">
              <BsShare size={14} />
              <span className="text-xs font-medium">Share</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full">
              <ImConnection />
              <span className="text-xs font-medium">Connect</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full">
              <AiOutlineInteraction />
              <span className="text-xs font-medium">Interact</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white text-base">
              Connect with friends & have fun sharing
            </p>
            <span className="text-sm text-white/80">
              Share memories with friends and the world.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
