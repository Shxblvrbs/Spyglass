import React from "react";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";
import Progress from "../components/GeneralUI/Progess/Progress";

// Goal Name (text): This column will store the name of the financial goal, such as "House", "Car", "College Fund," etc.
// - Description (text): Provide a brief description of the goal to provide additional context or details.
// - Picture (image): Allow users to attach a picture related to the goal, if desired.
// - Target Date (date): Capture the intended date for reaching the goal.
// - Target Amount (numeric): Specify the desired dollar amount needed to achieve the goal.
// - Currently Saved (numeric): Track the current amount of money saved towards the goal.
export default function GoalItem(props) {
  // const {
  //   title,
  //   description,
  //   targetAmount,
  //   date,
  //   id,
  //   curentAmount,
  //   image: { thumbUrl },
  // } = props;

  const title = props?.title;
  const description = props?.description;
  const targetAmount = props?.targetAmount;
  const date = props?.date;
  const id = props?._id;
  const curentAmount = props?.curentAmount;
  const thumbUrl =
    props?.image?.thumbUrl ||
    "https://c8.alamy.com/comp/M45CP6/man-dream-house-money-car-M45CP6.jpg";

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden shadow-md transform ease-in-out duration-300 hover:scale-110">
      <img className="w-full h-[225px] object-cover" src={thumbUrl} />
      <div className="p-3">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="line-clamp-2 mb-2.5 text-slate-500">{description}</p>
        <div className="flex space-x-4 items-center">
          <div className="px-4 py-2 bg-cyan-400 rounded-md text-white">
            {curentAmount}
          </div>
          <Progress current={curentAmount} target={targetAmount} />
          <div className="px-4 py-2 bg-cyan-400 rounded-md text-white">
            {targetAmount}
          </div>
        </div>
        <div className="flex items-center justify-between space-x-4 mt-5">
          <Link
            className="border border-gray-500 bg-gray-100 rounded-lg w-[110px] text-center py-2.5 text-gray-500 text-sm"
            to={`/details/${id}`}
          >
            View Details
          </Link>
          <Link
            className="border border-gray-500 bg-gray-100 rounded-lg w-[110px] text-center py-2.5 text-gray-500 text-sm"
            to={`/edit/${id}`}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
//   return (
//     <li className="border rounded-lg border-gray-200 p-4">
//       <div className="flex gap-12 justify-between">
//         <div>
//           <h2 className="text-3xl font-semibold">
//             {title.slice(0, 1).toUpperCase() + title.slice(1)}
//           </h2>
//           <p>{description}</p>
//           <div className="flex gap-2 mt-4">
//             <p className="bg-blue-500  px-4 text-white  rounded-2xl text-lg ">
//               Target amount: ${targetAmount}
//             </p>
//             <p className="bg-blue-500  px-4 text-white  rounded-2xl text-lg">
//               Current saving: ${curentAmount}
//             </p>
//             <p>
//               <TimeAgo timestamp={date} />
//             </p>
//           </div>
//           <div className="flex space-x-6">
//             <p className="mt-6">
// <Link
//   className="hover:text-blue-600 underline"
//   to={`/details/${id}`}
// >
//   View Details
// </Link>
//             </p>
//             <p className="mt-6">
// <Link
//   className="hover:text-blue-600 underline"
//   to={`/edit/${id}`}
// >
//   Edit
// </Link>
//             </p>
//           </div>
//         </div>
//         <div className="w-[200px] rounded-lg overflow-hidden">
//           <img className="w-full" alt={description} src={thumbUrl} />
//         </div>
//       </div>
//     </li>
//   );
// }
