import React from "react";
import { Form, Input, InputNumber } from "antd";
import FormSubmitButton from "../components/GeneralUI/FormSubmitButton/FormSubmitButton";
import UploadImage from "./UploadImage";
import { getGoalRequrieRules, getMinRule } from "../util-fn/form-util.js";
import { useState } from "react";
import { useContext } from "react";
import { GoalsCtx } from "../store/GoalsCtxProvidr";
import { useNavigate } from "react-router-dom";
import Modal from "antd/es/modal/Modal";
import { useDeleteGoalMutation, useUpdateGoalMutation } from "../api/apiSlice";
export default function UpdateGoalForm(props) {
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  //const [isClick, setIsClick] = useState(false);
  const [updateGoal] = useUpdateGoalMutation();
  const [deleteGoal] = useDeleteGoalMutation();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const {
    title,
    description,
    targetAmount,
    curentAmount,
    _id: id,
  } = props.formData;
  const updateGoalHandler = async data => {
    //if (!fileList.length) return;
    // goalsCtx.updateGoal({ ...data, id, image: fileList[0] });
    console.log("----- data ----", data);
    await updateGoal({ ...data, id, image: fileList[0] });
    navigate("/goals");
  };

  const okModalHandler = async () => {
    setOpen(false);
    // goalsCtx.deleteGoal(id);
    await deleteGoal(id);
    navigate("/goals");
  };
  return (
    <div className="position-relative border mt-16 border-gray-300 px-4 py-6 rounded-lg min-w-[450px] max-w-[450px]">
      <Form
        initialValues={{ title, description, targetAmount, curentAmount }}
        layout="vertical"
        onFinish={updateGoalHandler}
      >
        <Form.Item
          label="Title"
          name={"title"}
          rules={[
            getGoalRequrieRules("Please enter goal's title"),
            getMinRule(3, "Please enter at lease 3 characters"),
          ]}
        >
          <Input
            className="rounded-none hover:border-r-0 focus:border-r-0 border-0 border-b-[1px] border-b-gray-400"
            placeholder="Enter your goal title"
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name={"description"}
          rules={[
            getGoalRequrieRules("Please enter goal's description"),
            getMinRule(60, "Please enter at lease 60 characters"),
          ]}
        >
          <Input.TextArea
            className="rounded-none hover:border-r-0 focus:border-r-0 border-0 border-b-[1px] border-b-gray-400"
            placeholder="Enter your goal description"
          />
        </Form.Item>

        <Form.Item
          label="Target amount"
          name={"targetAmount"}
          rules={[getGoalRequrieRules("Please enter target amount")]}
        >
          <InputNumber
            min={1}
            className="rounded-none hover:border-r-0 focus:border-r-0 w-full border-0 border-b-[1px] border-b-gray-400"
            placeholder="Enter your Target Amount"
          />
        </Form.Item>

        <Form.Item
          label="Curent amount"
          name={"curentAmount"}
          rules={[getGoalRequrieRules("Please Enter curent amount you have")]}
        >
          <InputNumber
            min={0}
            className="rounded-none hover:border-r-0 focus:border-r-0 w-full border-0 border-b-[1px] border-b-gray-400"
            placeholder="Enter curent amount"
          />
        </Form.Item>
        <div className=" font-medium my-2">
          <span className="text-lg text-black ">Image</span>{" "}
          <span className="text-gray-400">(optional)</span>
        </div>
        <UploadImage
          onAddImage={setFileList}
          images={fileList || props.image}
        />
        {/* {!fileList.length && isClick && (
          <p className="text-red-500">Please upload an image</p>
        )} */}
        <FormSubmitButton>UPDATE GOAL</FormSubmitButton>
      </Form>
      <div className="mt-8">
        <button
          onClick={showModal}
          className="w-full bg-red-500 hover:opacity-90 duration-100 text-white px-8 py-1.5 rounded-md"
        >
          Delete goal
        </button>
      </div>
      <Modal
        title="Modal"
        open={open}
        onOk={okModalHandler}
        onCancel={hideModal}
        okText="Sure"
        cancelText="Cancel"
      >
        <h1>Are you sure you want to delete this goal ?</h1>
        <p>You will not be able to undo this </p>
      </Modal>
    </div>
  );
}
