import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message, type = "info") => {
  const options = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "warning":
      toast.warn(message, options);
      break;
    default:
      toast.info(message, options);
  }
};
