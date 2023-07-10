import React from "react";
import placeholder from "./Screenshot 2023-06-27 163808.png"
import { GrFormCheckmark } from "react-icons/gr";
import { useEffect, useState } from "react";
import ContactForm from "../../components/ContactUs";

// const loadingSpinnerStyles = `
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 20px;
//   font-weight: bold;
// `;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col  items-center">
        <div className="w-full">
          <main className="flex flex-col lg:-mt-20 justify-center items-center w-full flex-1 ">
            <div className="lg:flex block container px-2 lg:py-0 sm:py-2 sm:pb-20 pb-10 lg:px-10 sm:mt-6 mt-4 mx-auto lg:min-h-screen items-center  gap-2">
              <div className="lg:w-[55%] w-full">
                <p className="xl:text-4xl lg:text-2xl  lg:text-start text-center sm:text-xl font-extrabold uppercase lg:mb-4 sm:mb-4 mb-4 ">
                  Let's meet your Financial Goals!
                </p>
                <h1 className="xl:text-2xl lg:text-xl sm:text-3xl text-2xl lg:text-left text-center font-medium text-gray-900  xl:leading-[1.15] leading-[1.1]">
                  Spyglass is an interactive goal setting software that helps
                  you organize, track, and meet your financial goals on an easy
                  to use platform
                </h1>
                <ul className="flex flex-col xl:gap-3 lg:gap-2 justify-start items-start xl:text-xl lg:text-lg font-medium text-gray-700 xl:mt-8 lg:mt-5 sm:mt-4 mt-3 lg:p-0 sm:pl-10 pl-6">
                  <li className="flex items-center gap-1">
                    <span>
                      <GrFormCheckmark className="text-4xl text-red-600 " />
                    </span>{" "}
                    Sign-in using google
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <GrFormCheckmark className="text-4xl text-red-600 " />
                    </span>{" "}
                    Create, read, update, and delete all of your goals
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <GrFormCheckmark className="text-4xl text-red-600 " />
                    </span>{" "}
                    Chat with our AI Chatbot "Spydey" for tips on how to meet
                    your goals
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <GrFormCheckmark className="text-4xl text-red-600 " />
                    </span>{" "}
                    Maximize your financials
                  </li>
                </ul>
                <p className="xl:mt-9 lg:mt-6 mt-8 lg:text-left text-center">
                  Sign up for free today and gain access to our comprehensive
                  goal-setting, campaign creation, tracking, and editing
                  platform.
                </p>
                <div className="mt-3 lg:block flex justify-center">
                  {/* {!session && (
                    <button
                      onClick={() => signIn("magiclink")}
                      className="button"
                    >
                      <span>Get started for free</span>
                    </button>
                  )}
                  {session && (
                    <Link href={"/toplist"}>
                      <button className="button">
                        <span>Get started for free</span>
                      </button>
                    </Link>
                  )} */}
                </div>
              </div>
              <div className="w-[45%] lg:block hidden relative">
                <img
                  className="w-[1000px] h-[500px]"
                  alt="It's nice to be here"
                  width={1000}
                  height={500}
                  src={placeholder}
                />
              </div>
            </div>
            {/* <FAQ /> */}

            {/* <Testimonial /> */}

            {/* <div className="bg-light-gray w-full xl:py-28 lg:py-20 sm:py-20 py-14">
              <div className="container mx-auto px-2 sm:px-6 lg:px-10 flex items-center flex-col">
                <h3 className="text-center font-bold xl:text-5xl lg:text-4xl sm:text-4xl text-3xl text-gray-800 xl:mb-6 lg:mb-0 leading-[1.15]">
                  {" "}
                  Everything you need for the <br /> best ads experience
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-2xl">
                  <a
                    href="#"
                    className="border border-gray-300 rounded p-6 hover:text-blue-600 hover:border-blue-600"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      Paid Membership &rarr;
                    </h3>
                    <p>
                      Unlock powerful insights into competitor advertising
                      strategies by becoming a paid member.
                    </p>
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded p-6 hover:text-blue-600 hover:border-blue-600"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      Tutorials &rarr;
                    </h3>
                    <p>
                      Master the art of ad spying and outperform your
                      competitors by learning how to use the ad spy tool.
                    </p>
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded p-6 hover:text-blue-600 hover:border-blue-600"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      Top Performers &rarr;
                    </h3>
                    <p>
                      Get ahead of the competition by accessing the
                      top-performing ads of the month.
                    </p>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 rounded p-6 hover:text-blue-600 hover:border-blue-600"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      Community &rarr;
                    </h3>
                    <p>
                      Join our Discord community of successful dropshippers and
                      take your business to the next level.
                    </p>
                  </a>
                </div>
              </div>
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
}
