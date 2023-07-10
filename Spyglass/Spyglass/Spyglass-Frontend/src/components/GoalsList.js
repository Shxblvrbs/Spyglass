import React from "react";
import GoalItem from "./GoalItem";
export default function GoalsList({ goals }) {
  
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {goals?.map((goal) => (
        <GoalItem key={goal._id} {...goal} />
      ))}
    </div>
  );
}
