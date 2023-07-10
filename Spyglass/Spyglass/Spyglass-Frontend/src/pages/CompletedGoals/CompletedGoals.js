// import {
//   useGetGoalsQuery
// } from "../api/apiSlice"

import React from "react";
import GoalsList from "../../components/GoalsList";
import { GoalsCtx } from "../../store/GoalsCtxProvidr";
import { Link } from "react-router-dom";

import { useContext } from "react";
export default function CompletedGoals() {
  const ctx = useContext(GoalsCtx);

  return (
    <div className=" mx-auto px-10 mb-8 max-w-[1400px]">
      <h1 className="text-center  text-4xl font-semibold pt-16 pb-6">
        Completed Goals
      </h1>
      <GoalsList
        goals={ctx.goals.filter(
          item => item?.curentAmount === item?.targetAmount
        )}
      />
    </div>
  );
}
