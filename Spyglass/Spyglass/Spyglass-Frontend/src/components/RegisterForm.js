import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import FormButtonDivider from "./GeneralUI/FormButtonDivider/FormButtonDivider";
import FormSubmitButton from "./GeneralUI/FormSubmitButton/FormSubmitButton";
import ContinueWithGoogle from "./GeneralUI/ContinueWithGoogle/ContinueWithGoogle";
import { getRequrieRules, getValidateEmailRules } from "../util-fn/form-util";
import { useRegisterMutation } from "../api/apiSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Paragraph } = Typography;


export default function LoginForm() {
  const [register, { isLoading }] = useRegisterMutation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const formSumbitHandler = async data => {
    try {
      console.log(firstName, lastName, email, password);
      const { data } = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      localStorage.setItem("spyUser", JSON.stringify(data));
      console.log("--- data of register", data);
      toast.success("Signed Up successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error(err, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    navigate("/");

    // console.log(data);
    // const res = await fetch("https://localhost:3000/signin", {
    //   body: JSON.stringify(data),
    // });
    // if (!res.ok) {
    //   return;
    // }
  };
  return (
    <div className="position-relative border border-gray-300 px-4 py-6 rounded-lg min-w-[450px] max-w-[450px]">
      <h2 className="text-center text-xl italic mb-6">
        Remember everything important.
      </h2>
      <ContinueWithGoogle>Continue With Google</ContinueWithGoogle>
      <FormButtonDivider />

      <Form layout="vertical" onFinish={formSumbitHandler}>
        <Form.Item
          label="First Name"
          name={"firstName"}
          rules={[getRequrieRules("firstName")]}
        >
          <Input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Enter your Name"
          />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name={"lastName"}
          rules={[getRequrieRules("lastName")]}
        >
          <Input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Enter your Last Name"
          />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name={"emailAddress"}
          rules={[getRequrieRules("Email"), getValidateEmailRules()]}
        >
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name={"password"}
          rules={[getRequrieRules("Password")]}
        >
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Item>
        <FormSubmitButton>REGISTER NOW</FormSubmitButton>
      </Form>
      <Paragraph className="mb-0 mt-3 text-center">
        Already have an account?
        <Link className="ms-1" to={"/login"}>
          Login now
        </Link>
      </Paragraph>
    </div>
  );
}
