import React, { useEffect, useRef } from "react";
import CustomButton from "../Reusable-components/CustomButton";
import Loading from "../Reusable-components/Loading";
import { useDispatch } from "react-redux";
import { renderNextState, verifyOTP } from "../../redux/slice/authSlice";
import { showToast } from "../../utils/toast";

function OTPform() {
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));
  const dispatch = useDispatch();
  const status = "fulfilled";

  const handleOtpInputChange = (index, event) => {
    const value = event.target.value;
    // Move focus to the next input if a digit is entered
    if (value.length === 1 && index !== inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }

    // Handle backspace to delete and move focus to the previous input
    if (event.keyCode === 8) {
      event.preventDefault();
      if (index == 0) {
        inputRefs[index].current.value = "";
        inputRefs[index].current.focus();
        return;
      }
      inputRefs[index].current.value = "";
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const digits = inputRefs.map((ref) => ref?.current?.value).join("");

    const payload = { email: localStorage.getItem("email"), otp: digits };

    try {
      const response = await dispatch(verifyOTP(payload));
      const msg = response?.payload?.msg;
      const isError = response?.payload?.err;

      if (isError) {
        showToast(msg, "error");
        return;
      }

      showToast(msg, "success");
      dispatch(renderNextState());
    } catch (error) {
      console.log(error);
    }
    // Add your logic for handling the combined digits here
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="py-8 flex flex-col gap-5">
        <div className="flex gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="relative">
              <label htmlFor={`otpBox${index + 1}`} className="sr-only">
                OTP Box {index + 1}
              </label>
              <input
                type="text"
                id={`otpBox${index + 1}`}
                name={`otpBox${index + 1}`}
                ref={inputRefs[index]}
                className="w-12 h-12 border border-gray-300 rounded-md text-2xl text-center focus:outline-none focus:border-blue-500"
                maxLength="1"
                pattern="[0-9]"
                inputMode="numeric"
                onChange={(e) => handleOtpInputChange(index, e)}
                onKeyDown={(e) => handleOtpInputChange(index, e)}
              />
            </div>
          ))}
        </div>
        {status === "pending" ? (
          <Loading />
        ) : (
          <CustomButton
            type="submit"
            containerStyles={`inline-flex justify-center rounded-md bg-blue-700 px-8 py-3 text-sm font-medium text-white outline-none`}
            title="Verify OTP"
          />
        )}
      </form>
    </div>
  );
}

export default OTPform;
