import React, { useState } from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import FormButtonDivider from "./GeneralUI/FormButtonDivider/FormButtonDivider";
import FormSubmitButton from "./GeneralUI/FormSubmitButton/FormSubmitButton";
import ContinueWithGoogle from "./GeneralUI/ContinueWithGoogle/ContinueWithGoogle";
import { getRequrieRules, getValidateEmailRules } from "../util-fn/form-util";
import { Typography } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useLoginQuery } from "../store/rtk query store/loginApi";
const { Paragraph } = Typography;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [user, loading, error] = useLoginQuery(
  //   {
  //     email: "",
  //     password: "",
  //   },
  //   { manual: true }
  // );
  const loginHandler = async () => {
    console.log("---------");

    const { data } = await axios.post("http://localhost:5000/api/user/login", {
      email,
      password,
    });
    console.log(data);
    localStorage.setItem("spyUser", JSON.stringify(data));
    navigate("/");

    // useLoginQuery.execute();
  };

  return (
    <div className="position-relative border border-gray-300 px-4 py-6 rounded-lg min-w-[450px] max-w-[450px]">
      <h2 className="text-center text-xl italic mb-6">
        Remember everything important.
      </h2>
      <Form layout="vertical" onFinish={loginHandler}>
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
            placeholder="Enter your Password"
          />
        </Form.Item>
        <FormSubmitButton>LOGIN IN</FormSubmitButton>
      </Form>
      <FormButtonDivider />
      <ContinueWithGoogle
        onClick={() => window.location.replace("http://localhost:8080/signin")}
      >
        Continue With Google
      </ContinueWithGoogle>
      <Paragraph className="mb-0 mt-3 text-center">
        Don't have an account?
        <Link className="ms-1" to={"/register"}>
          Signup now
        </Link>
      </Paragraph>
    </div>
  );
}
