import React from "react";
import { Button } from "antd";
import styles from "./FormSubmitButton.module.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
export default function FormButton(props) {
  const loading = props?.loading;
  let content = <Button htmlType={props?.htmlType}>{props.children}</Button>;
  if (loading) {
    content = <LoadingSpinner color="white" />;
  }
  return (
    <button
      htmlType="submit"
      onClick={props.onClick}
      className={` ${props.round && styles["round"]} ${styles["form-button"]} ${
        props.className && props.className
      } text-center ${loading && styles["loading-con"]}`}
    >
      {content}
    </button>
  );
}
