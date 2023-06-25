import SignInBar from "../Components/SignUpPageComponents/SignInBar";
import RegisterForm from "../Components/SignUpPageComponents/RegisterForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";

const SignIn = (): JSX.Element => {
  const toastifySuccess = () => {
    toast(`To login as a guest (me!) just click login!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  useEffect(() => {
    toastifySuccess();
  }, []);

  return (
    <>
      <SignInBar />
      <RegisterForm />
      <ToastContainer />
    </>
  );
};

export default SignIn;
