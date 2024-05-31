"use client";

import React, { useState } from "react";

import { ContentCardDynamic } from "@/components";
import { RadioBtn } from "@/components";
import CustomComponent from "@/components/customComponent";
import { Input, NormalCheckBox, NormalTable } from "@/components";
import { HiOutlineXMark } from "react-icons/hi2";

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

  const frozenData = [{ area: "蒲田2丁目", parts: 2000 }];

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
  const CustomContent = [
    {
      titles: ["配布部数 :", "配布予定期間 :"],
      description: ["2,000部", "10月10日〜10月11日"],
      headerText: "ポスティング",
    },
    {
      headerText: "ピッキング先",
      customRadioBtn: (
        <>
          <div className="flex-col">
            <RadioBtn
              parentClass="custom-radioBtn "
              parentStyle={{ margin: "10px 0" }}
              radioBtnProps={{
                inputId: "option1",
                name: (
                  <>
                    住所1 <br />
                    〒1700013 <br />
                    東京都豊島区東池袋2－1－3MKビル3階 <br />
                    店舗裏の業者用通用口から入ってください
                  </>
                ),
                value: "option1",
                onChange: handleRadioChange,
                checked: selectedValue === "option1",
              }}
            />

            <RadioBtn
              parentClass="custom-radioBtn"
              parentStyle={{ margin: "10px 0" }}
              radioBtnProps={{
                inputId: "option2",
                name: (
                  <>
                    住所2 <br />
                    〒1700013 <br />
                    東京都豊島区東池袋2－1－3MKビル3階
                  </>
                ),
                value: "option2",
                onChange: handleRadioChange,
                checked: selectedValue === "option2",
              }}
            />
          </div>
        </>
      ),
      buttonProps: {
        text: "編集",
        link: true,
      },
    },
    {
      titles: [""],
      description: ["クレジットカード"],
      headerText: "お支払い方法",
    },
    {
      titles: ["単価 :", "配布部数 :", "合計金額 :"],
      description: [
        "¥8.00/部",
        "2,000部",
        <>
          ¥17,600
          <br />
          (税抜 : ¥16,000)
        </>,
      ],
      headerText: "料金",
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
      {/* <ContentCardDynamic
        parentClassName="content-card"
        content={contentData}
      /> */}

      <NormalCheckBox {...checkboxProps} />
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
      <CustomComponent parentClassName="content-card" content={CustomContent} />
    </div>
  );
};

export default Demo;
