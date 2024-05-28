"use client";

import React, { useState } from "react";

import {
  ContentCardDynamic,
  ContentHeader,
  Input,
  NormalCheckBox,
  NormalTable,
} from "@/components";
import { HiOutlineXMark } from "react-icons/hi2";
import { RadioBtn } from "@/components";

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

  let frozenData = [{ area: "蒲田2丁目", parts: 2000 }];

  const sampleData = [
    { area: "蒲田2丁目", parts: 500 },
    { area: "蒲田3丁目", parts: 900 },
    { area: "蒲田4丁目", parts: 600 },
  ];

  const columns = [
    { field: "area", header: "エリア" },
    {
      field: "parts",
      header: "2000部",
      body: (item) => {
        return (
          <div className="flex items-center">
            <Input
              inputProps={{
                labelProps: {
                  inputLabelClassName: "block",
                },
                inputClassName: "w-full",
                value: item.parts,
              }}
            />
            <span className="ml-3">部</span>
          </div>
        );
      },
    },
    {
      field: "actions",
      textAlign: "left",
      alignHeader: "left",
      minWidth: "6rem",
      body: (rowData) => {
        return (
          <div className="">
            <HiOutlineXMark fontSize={24} fontWeight={700} />
          </div>
        );
      },
    },
  ];

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
      <NormalTable
        lazy
        totalRecords={10}
        loading={false}
        stripedRows={true}
        className={"custom-table-cell"}
        frozenValue={frozenData}
        showGridlines={"true"}
        value={sampleData}
        columns={columns}
        filterDisplay="menu"
        emptyMessage={"data_not_found"}
      />

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
