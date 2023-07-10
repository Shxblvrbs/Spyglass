import { Progress } from "antd";
import { useEffect, useState } from "react";
const ProgressBar = ({ current, target }) => {
  const [percentage, setPercentage] = useState("");
  useEffect(() => {
    let data = ((current / target) * 100).toFixed(1);
    setPercentage(data);
  }, [current, target]);
  return (
    <div className="w-[80%] mx-auto">
      <Progress percent={percentage} />
    </div>
  );
};
export default ProgressBar;
