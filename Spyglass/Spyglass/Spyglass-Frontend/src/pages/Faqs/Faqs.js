import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
export default function Faqs() {
  return (
    <section className="w-full border-t-2  xl:pt-28 xl:pb-28 lg:pt-16 sm:pt-20 pb-10 pt-10 lg:pb-20 sm:pb-28 bg-light-gray">
      <div className="container mx-auto px-2 sm:px-6 lg:px-10">
        <h4 className="text-primary text-center font-bold xl:mb-4 lg:mb-2 sm:mb-2">
          FAQ
        </h4>
        <h3 className="text-center font-bold xl:text-5xl lg:text-4xl sm:text-4xl text-2xl mb-3 sm:mb-4 text-gray-800 xl:mb-6 lg:mb-4">
          Any Questions? Answered
        </h3>
        <p className="text-center text-gray-600 xl:text-xl lg:text-lg xl:mb-10 lg:mb-8 sm:mb-14 mb-10">
          Here you can find some FQAs that you may want to ask. <br />
          If you did not get your answer.You can ask by going to the contact us
          page.
        </p>
        <div className="grid gap-4 lg:grid-cols-2 grid-cols-1  mb-6 items-start">
          <div className="flex flex-col lg:gap-8 gap-4">
            <div className="rounded-lg xl:p-4 lg:p-2 lg:pb-4 bg-white border border-gray-200 shadow-sm">
              <Collapse ghost>
                <Panel header="What is Spyglass?" key="1">
                  <p>
                    Spyglass is an advertising intelligence tool built to fill
                    the missing link for marketers and advertisers looking to
                    leverage Snapchat’s advertising platform.
                  </p>
                </Panel>
              </Collapse>
            </div>
            <div className="xl:p-4 lg:p-2 lg:pb-4  rounded-lg bg-white border border-gray-200 shadow-sm">
              <Collapse ghost className="">
                <Panel header="How can I access Spyglass?" key="1">
                  <p>
                    To access Spyglass, head over to the pricing page and select
                    the plan of your choice, and complete the signup.
                  </p>
                </Panel>
              </Collapse>
            </div>
            <div className="xl:p-4 lg:p-2 lg:pb-4 border border-gray-200 shadow-sm rounded-lg bg-white">
              <Collapse ghost className="">
                <Panel header="How can I benefit from Spyglass?" key="1">
                  <p>
                    Spyglass is a rapidly growing platform that's not nearly as
                    saturated as Facebook, TikTok, and Google. Using our tool
                    you can help you to remember about your goals .
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
          <div className="flex flex-col lg:gap-8 gap-4">
            <div className="xl:p-4 lg:p-2 lg:pb-4  rounded-lg bg-white border border-gray-200 shadow-sm">
              <Collapse ghost>
                <Panel
                  header="What type of payment methods do you accept?"
                  key="1"
                >
                  <p>
                    We accept most credit cards as an acceptable payment method.
                  </p>
                </Panel>
              </Collapse>
            </div>
            <div className="xl:p-4 lg:p-2 lg:pb-4  rounded-lg bg-white border border-gray-200 shadow-sm">
              <Collapse ghost className="">
                <Panel header="How does Spyglass work?" key="1">
                  <p>Spyglass collects and displays your goals ..</p>
                </Panel>
              </Collapse>
            </div>
            <div className="xl:p-4 lg:p-2 lg:pb-4 rounded-lg bg-white border border-gray-200 shadow-sm">
              <Collapse ghost className="">
                <Panel
                  header="Will you add other platforms and features?"
                  key="1"
                >
                  <p>
                    In the near future we plan on adding a variety of other
                    features.like choosing between thems (dark and light) and a
                    lot more
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
