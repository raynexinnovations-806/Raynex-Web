import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setNotify } from "@/redux";
import { color } from "@/utils/constants/color";

const style = {
  positiveToast: {
    borderRadius: "10px",
    background: color.success,
    color: color.white,
  },
  negativeToast: {
    borderRadius: "10px",
    background: color.error,
    color: color.white,
  },
};

let toastId: string;
const notify = (type: string, message: string) => {
  toast.remove();
  switch (type) {
    case "LOADING":
      toastId = toast.loading(message ?? "Loading...");
      break;
    case "SUCCESS":
      toast.success(message, {
        id: toastId ?? "",
        style: style.positiveToast,
        iconTheme: {
          primary: "#fff",
          secondary: "#039855",
        },
        duration: 4000,
      });
      break;
    case "ERROR":
      toast.error(message, {
        id: toastId ?? "",
        style: style.negativeToast,
        iconTheme: {
          primary: "#fff",
          secondary: "#D92D20",
        },
        duration: 4000,
      });
      break;
    default:
      break;
  }
};

const Notify = () => {
  const dispatch = useDispatch();
  const messageData = useSelector((state: any) => state.notify);

  useEffect(() => {
    if (messageData) {
      dispatch(setNotify(null));
      notify(messageData?.type, messageData?.message);
    }
  }, [messageData]);

  return <Toaster position="top-center" reverseOrder={false} gutter={8} />;
};

export default Notify;
