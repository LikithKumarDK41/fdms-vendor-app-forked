"use client";
import React, { useState } from "react";

import { ContentCard, ContentHeader, NormalCheckBox } from "@/components";
import { RadioBtn } from "@/components";

const CombinedContent = ({ header, content }) => {
  return (
    <div className="mt-2">
      <ContentHeader
        headerText={header.headerText}
        contentText={header.contentText}
        buttonText={header.buttonText}
        buttonSymbol={header.buttonSymbol}
        status={header.status}
        parentClassName={header.parentClassName}
      />
      <ContentCard parentClassName="content-card" content={content} />
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
    [
      { title: "配布部数 :", description: "2,000部" },
      { title: "配布予定期間 :", description: "10月10日〜10月11日" },
      { title: "発注日 :", description: "2024年10月10日" },
    ],
    [
      { title: "配布部数 :", description: "3,000部" },
      { title: "配布予定期間 :", description: "11月11日〜11月12日" },
      { title: "発注日 :", description: "2024年11月11日" },
    ],
  ];

  const headerData = [
    {
      headerText: "注文番号1",
      contentText: "1000105",
      buttonText: "ピッキング",
      buttonSymbol: true,
      status: "warningStatus",
      parentClassName: "header_class",
    },
    {
      headerText: "注文番号2",
      contentText: "1000106",
      buttonText: "ピッキング",
      buttonSymbol: true,
      status: "goldStatus",
      parentClassName: "header_class",
    },
  ];

  const combinedComponents = [];
  for (let i = 0; i < headerData.length && i < contentData.length; i++) {
    combinedComponents.push(
      <CombinedContent
        key={i}
        header={headerData[i]}
        content={contentData[i]}
      />
    );
  }

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
      <div>{combinedComponents}</div>
    </div>
  );
};

export default Demo;
