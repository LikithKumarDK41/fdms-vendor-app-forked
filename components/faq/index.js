import React from "react";

import { QuestionPanel } from "@/components";

const FaqComponent = ({ panelData }) => {
  return (
    <div>
      {panelData.map((item, index) => (
        <div key={index} className="mb-[30px] custom-panel">
          <span className="mb-[15px] font-bold text-[16px] ">
            {" "}
            {item.Title}{" "}
          </span>
          <QuestionPanel
            panelsData={item.QA}
            parentClassName={"mt-[20px]  "}
            headerClassName="border-round-3xl"
            headerTextClassName="bg-[#FDEEEA]"
          />
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
