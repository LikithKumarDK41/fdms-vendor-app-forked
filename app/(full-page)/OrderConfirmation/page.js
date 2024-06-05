"use client";

import React, { useState } from "react";

import CustomHeader from "@/components/customHeader";
import { CustomComponent, RadioBtn } from "@/components";
import { Button } from "@/components";
import Map from "../map/page";

const OrderConfirmation = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  // const handleRadioChange = (e) => {
  //   setSelectedValue(e.value);
  // };
  const handleRadioChange = (e) => {
    const selected = e.value === selectedValue ? null : e.value;
    setSelectedValue(selected);
  };

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
          <div className="flex-col w-full">
            <RadioBtn
              parentClass="custom-radioBtn"
              parentStyle={{ margin: "10px 0" }}
              radioBtnProps={{
                inputId: "option1",
                name: (
                  <>
                    住所1 <br />
                    <span style={{ marginLeft: "1rem" }}>〒1700013 </span>
                    <br />
                    <span style={{ marginLeft: "1rem" }}>
                      東京都豊島区東池袋2－1－3MKビル3階
                    </span>
                    <br />
                    <span style={{ marginLeft: "1rem" }}>
                      店舗裏の業者用通用口から入ってください
                    </span>
                  </>
                ),
                value: "option1",
                onChange: handleRadioChange,
                checked: selectedValue === "option1",
              }}
            />
            {selectedValue === "option1" && (
              <div className="mt-4 ml-3 w-11">
                <Map />
              </div>
            )}

            <RadioBtn
              parentClass="custom-radioBtn"
              parentStyle={{ margin: "10px 0" }}
              radioBtnProps={{
                inputId: "option2",
                name: (
                  <>
                    住所2 <br />
                    <span style={{ marginLeft: "1rem" }}>〒1700013 </span>
                    <br />
                    <span style={{ marginLeft: "1rem" }}>
                      東京都豊島区東池袋2－1－3MKビル3階{" "}
                    </span>
                  </>
                ),
                value: "option2",
                onChange: handleRadioChange,
                checked: selectedValue === "option2",
              }}
            />
            {selectedValue === "option2" && (
              <div className="mt-4 ml-3 w-11">
                <Map />
              </div>
            )}
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

  const deleteButtonProps = {
    text: "削除",
    icon: "pi pi-trash",
    bg: "bg-white",
    buttonClass: "text-gray-600",
    hoverBg: "",
  };
  const backButtonProps = {
    text: "戻る",
    icon: "pi pi-arrow-left",
    bg: "bg-white",
    buttonClass: "text-gray-600",
    hoverBg: "hover:bg-gray-200",
  };

  const paymentButtonProps = {
    text: "お支払いへ",
    icon: "pi pi-angle-right",
    bg: "bg-orange-500",
    buttonClass: "text-white",
    hoverBg: "hover:bg-orange-600",
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4">
      <div className="text-center ">
        <CustomHeader
          header="ご注文内容の確認"
          headerClass="text-lg font-semibold text-gray-800"
          customParentClassName="mt-8"
          requiredSymbol
        />
      </div>
      <div className="w-full bg-white p-4 mt-4">
        <h2 className="text-lg font-semibold text-gray-800">ご注文1</h2>
      </div>
      <div className="w-full">
        <CustomComponent
          parentClassName="content-card"
          content={CustomContent}
        />
      </div>
      <div className="flex justify-end w-full mt-4">
        <Button
          parentClassName="delete-button"
          buttonProps={deleteButtonProps}
        />
      </div>
      <div className="flex ">
        <Button parentClassName="" buttonProps={backButtonProps} />
        <Button
          parentClassName="ml-4"
          buttonProps={{
            text: "お支払いへ",
            forward: true,
            iconPos: "right",
          }}
        />
      </div>
    </div>
  );
};

export default OrderConfirmation;
