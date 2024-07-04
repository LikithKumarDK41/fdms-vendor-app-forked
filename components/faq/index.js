import React from "react";

import { QuestionPanel } from "@/components";

const FaqComponent = ({ panelData }) => {
  return (
    <div>
      {panelData.map((item, index) => (
        <div key={index} className="mb-[30px] custom-panel">
          <span className="mb-[15px] font-bold text-[16px] 2xl:text-[17px] 3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
            {" "}
            {item.Title}{" "}
          </span>
          <div className="panelHeight qAndaHeight ">
            <QuestionPanel
              panelsData={item.QA}
              parentClassName={"mt-[20px]  "}
              headerClassName="border-round-3xl "
              headerTextClassName="bg-[#FDEEEA] "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
