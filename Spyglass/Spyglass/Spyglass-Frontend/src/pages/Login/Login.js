import React, { useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("spyUser") || "{}";
    if (data.firstName) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex min-h-[90vh]  justify-center items-center">
      {/* <h1>Spyglass</h1> */}
      <LoginForm />
    </div>
  );
}
