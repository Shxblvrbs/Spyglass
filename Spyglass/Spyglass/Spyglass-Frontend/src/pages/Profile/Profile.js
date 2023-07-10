import React, { useEffect } from "react";
import { useGetInfoQuery } from "../../api/apiSlice";
import axios from "axios";

export default function Profile() {
  const { data } = useGetInfoQuery();

  console.log("--------", data);
  // const getUser = () => {
  //   console.log("-----------");
  //   const { data } = axios.get("http://localhost:5000/api");
  //   console.log("Data", data);
  // };
  // useEffect(() => {
  //   console.log("=-=-");
  //   getUser();
  // }, []);

  return <div>Profile -=-</div>;
}
