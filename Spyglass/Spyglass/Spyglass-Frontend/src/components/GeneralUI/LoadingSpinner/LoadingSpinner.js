import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./LoadingSpinner.module.scss";
import { Spin } from "antd";

export default function LoadingSpinner(props) {
  return (
    <div
      className={styles["loading-spiner"]}
      indicator={<AiOutlineLoading3Quarters color={props.color} />}
    />
  );
}
