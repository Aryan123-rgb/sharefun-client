import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton";
import Loading from "../Loading";
import { showToast } from "../../utils/toast";
import { login, renderNextState, sendOTP } from "../../redux/slice/authSlice";

function EmailForm() {
  const { status } = useSelector((state) => state.authReducer);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(sendOTP(data));
      const msg = response?.payload?.msg;
      const isError = response?.payload?.err;

      if (isError) {
        showToast(msg, "error");
        return;
      }

      showToast(msg, "success");
      dispatch(renderNextState());
      localStorage.setItem("email", data?.email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="py-8 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-center">
          <p className="text-gray-600 mb-1">Email ID</p>
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
                placeholder="example@gmail.com"
                {...field}
                error={Boolean(errors?.email?.message)}
              />
            )}
          />
          {errors?.email?.message && (
            <span className="error-text text-sm mt-1">
              {errors?.email?.message}
            </span>
          )}
        </div>
        {status == "pending" ? (
          <Loading />
        ) : (
          <CustomButton
            type="submit"
            containerStyles={`inline-flex justify-center rounded-md bg-blue-700 px-8 py-3 text-sm font-medium text-white outline-none`}
            title="Send OTP"
          />
        )}
      </form>
    </div>
  );
}

export default EmailForm;
