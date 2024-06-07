import React from "react";
import { PanelList, QuestionPanel } from "../panel";

const FaqComponent = ({ panelData }) => {
  return (
    <div>
      {panelData.map((item, index) => (
        <div key={index} className="mb-[30px] custom-panel">
          <span className="mb-[15px] font-bold text-[16px] ">
            {" "}
            {item.Title}{" "}
          </span>
          <QuestionPanel panelsData={item.QA} parentClassName={"mt-[20px]  "} />
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
