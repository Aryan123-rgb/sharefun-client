import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../Reusable-components/CustomButton";
import Loading from "../Reusable-components/Loading";
import { showToast } from "../../utils/toast";
import { changePassword, login } from "../../redux/slice/authSlice";

function NewPasswordForm() {
  const { status } = useSelector((state) => state.authReducer);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const payload = {
      email: localStorage.getItem("email"),
      password: data.password,
    };
    try {
      const response = await dispatch(changePassword(payload));
      const msg = response?.payload?.msg;
      const isError = response?.payload?.err;

      if (isError) {
        showToast(msg, "error");
        return;
      }

      showToast(msg, "success");
      localStorage.removeItem("email");
      navigate("/login");
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
        <div>
          <p className="text-gray-600 mb-1">Enter Your new password</p>
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
            <span className="error-text text-sm mt-1">
              {errors?.password?.message}
            </span>
          )}
        </div>
        <div>
          <p className="text-gray-600 mb-1">Re-enter your new password</p>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password is Required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            }}
            render={({ field }) => (
              <Input
                type="password"
                size="lg"
                {...field}
                placeholder="Re-type your password"
                error={Boolean(errors?.confirmPassword?.message)}
              />
            )}
          />
          {errors?.confirmPassword?.message && (
            <span className="error-text text-sm mt-1">
              {errors?.confirmPassword?.message}
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

export default NewPasswordForm;
