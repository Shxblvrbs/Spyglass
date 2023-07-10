import React from "react";
import { ToastContainer } from "react-toastify";
import RegisterForm from "../../components/RegisterForm";
export default function Register() {
  return (
    <div className="flex min-h-[90vh] justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <RegisterForm />
    </div>
  );
}
