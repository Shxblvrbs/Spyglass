import { createContext } from "react";
import tesla from "../imgs/tesla.jpg";
import { useState } from "react";
export const GoalsCtx = createContext({
  goals: [],
  deleteGoal: () => {},
  addGoal: () => {},
  //  addGoal: () => {},
});
const GoalsCtxProvider = (props) => {
  const [goals, setGoals] = useState([]);
  const addGoal = (goalData) => {
    setGoals((preGoals) => {
      console.log(preGoals);
      return [
        ...preGoals,
        { ...goalData, date: new Date().toISOString(), id: Date.now() },
      ];
    });
  };
  const deleteGoal = (id) => {
    setGoals((preGoals) => {
      return preGoals?.filter((goal) => goal.id != id);
    });
  };
  const updateGoal = (data) => {
    console.log(data, "updateDAta");
    const id = data.id;
    setGoals((preGoals) => {
      let updateGoal = preGoals.find((goal) => goal.id == data.id);
      updateGoal.id = data.id;
      updateGoal.title = data.title;
      updateGoal.image = data.image;
      updateGoal.description = data.description;
      updateGoal.targetAmount = data.targetAmount;
      updateGoal.curentAmount = data.curentAmount;
      updateGoal.date = new Date().toISOString();
      return preGoals;
    });
    // setGoals((preGoals) => {
    //   preGoals?.map((goal) => {
    //     if (goal.id === data.id) {
    //       console.log(data, "updateDAta");
    //       console.log(goal, "current goal");
    //     }
    //     return goal;
    //   });
    // });
  };
  const ctxData = { goals, addGoal, deleteGoal, updateGoal };

  return (
    <GoalsCtx.Provider value={ctxData}>{props.children}</GoalsCtx.Provider>
  );
};
export default GoalsCtxProvider;
