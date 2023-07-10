import React, { useEffect, useState } from "react";
import GoalsList from "../../components/GoalsList";
import { GoalsCtx } from "../../store/GoalsCtxProvidr";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGetGoalsQuery } from "../../api/apiSlice";

//import { useGetGoalsQuery } from "../../api/apiSlice";

import { useContext } from "react";
export default function Goals() {
  const [user, setUser] = useState({});
  const { data: goal } = useGetGoalsQuery(user?._id);
  const navigate = useNavigate();

  console.log("goals-----", goal);

  useEffect(() => {
    let user_ = localStorage.getItem("spyUser") || "{}";

    setUser(JSON.parse(user_));
  }, []);

  console.log("]]]]]", user);

  return (
    <div className=" mx-auto px-10 mb-8 max-w-[1400px]">
      <h1 className="text-center  text-4xl font-semibold pt-16 pb-6">
        Let's meet your Financial Goals!
      </h1>
      {goal?.length <= 0 ? <h1>No Goal Present</h1> : <GoalsList goals={goal} />}
      <div className="flex justify-center mt-12">
        <button>
          <Link
            className="bg-blue-500 rounded-lg px-6 py-3 hover:opacity-95 text-white"
            to={"new-goal"}
          >
            Add New Goal
          </Link>
        </button>
      </div>
    </div>
  );
}
