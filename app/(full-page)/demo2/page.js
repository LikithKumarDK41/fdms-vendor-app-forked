"use client";
import React, { useState } from "react";
import {
  ContentCardDynamic,
  ContentHeader,
  NormalCheckBox,
} from "@/components";
import { RadioBtn } from "@/components";
const CombinedContent = ({ header, content }) => {
  return (
    <div className="mt-2">
      <ContentCardDynamic parentClassName="content-card" content={content} />
    </div>
  );
};
const Demo = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleRadioChange = (e) => {
    setSelectedValue(e.value);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
    console.log("Checkbox changed");
  };
  const checkboxProps = {
    checkBoxProps: {
      id: "myCheckbox",
      name: "myCheckbox",
      value: "Checkbox Value",
      onChange: handleCheckboxChange,
      checked: isChecked,
      disabled: false,
      style: {},
      linkLabel: "Link Label",
    },
    parentClass: "custom-checkbox",
  };
  const contentData = [
    {
      titles: ["配布部数 :", "サブタイトル :", "追加情報 :"],
      description: ["2,000部", "サブ内容", "追加内容"],
      headerText: "注文番号",
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "ピッキング",
      status: "warningStatus",
    },
    {
      titles: ["Another Title 1:", "Another Title 2:", "Another Title 3:"],
      description: ["Description 1", "Description 2", "Description 3"],
      headerText: "注文番号",
      contentText: "1000106",
      buttonSymbol: true,
      buttonText: "ピッキング",
      status: "goldStatus",
    },
  ];
  return (
    <div>
      <RadioBtn
        parentClass="custom-radioBtn"
        parentStyle={{ margin: "10px 0" }}
        radioBtnProps={{
          inputId: "option1",
          name: "Option 1",
          value: "option1",
          onChange: handleRadioChange,
          checked: selectedValue === "option1",
        }}
      />
      <NormalCheckBox {...checkboxProps} />
      <ContentCardDynamic
        parentClassName="content-card"
        content={contentData}
      />
    </div>
  );
};
export default Demo;
