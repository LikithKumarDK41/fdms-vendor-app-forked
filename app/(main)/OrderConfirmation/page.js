"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  CustomHeader,
  Button,
  RadioBtn,
  CustomComponent,
  GoogleMapComponent,
} from "@/components";
import { LeftSideBar, RightSideBar } from "@/template";

const OrderConfirm = () => {
  const { i18n } = useTranslation("translation");
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
      titles: ["配布部数", "配布予定期間"],
      description: ["2,000部", "10月10日〜10月11日"],
      headerText: "ポスティング",
      useHeaderSemicolon: false,
    },
    {
      headerText: "ピッキング先",
      useHeaderSemicolon: false,
      customRadioBtn: (
        <div className=" w-full h-full">
          <div>
            <RadioBtn
              parentClass="custom-radioBtn"
              parentStyle={{ margin: "10px 0" }}
              radioBtnProps={{
                inputId: "option1",
                name: (
                  <>
                    <span className="ml-2">住所1 </span>
                    <br />
                    <span className="ml-[25px]">〒1700013 </span>
                    <br />
                    <span className="ml-[25px]">
                      東京都豊島区東池袋2－1－3MKビル3階
                    </span>
                    <br />
                    <span className="ml-[25px]">
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
              <div className="mt-4 ml-3 ">
                <GoogleMapComponent
                  initialPosition={{
                    lat: 12.932518841599157,
                    lng: 77.5404829347857,
                  }}
                  height={145}
                  searchResult={{
                    lat: 12.932518841599157,
                    lng: 77.5404829347857,
                  }}
                />
              </div>
            )}
          </div>
          <div>
            <RadioBtn
              parentClass="custom-radioBtn"
              parentStyle={{ margin: "10px 0" }}
              radioBtnProps={{
                inputId: "option2",
                name: (
                  <>
                    <span className="ml-2">住所1 </span>
                    <br />
                    <span className="ml-[25px]">〒1700013 </span>
                    <br />
                    <span className="ml-[25px]">
                      東京都豊島区東池袋2－1－3MKビル3階
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
                <GoogleMapComponent
                  initialPosition={{
                    lat: 12.932518841599157,
                    lng: 77.5404829347857,
                  }}
                  height={145}
                  searchResult={{
                    lat: 12.932518841599157,
                    lng: 77.5404829347857,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ),
      buttonProps: {
        text: "編集",
        link: true,
      },
    },
    {
      titles: ["クレジットカード"],
      description: [""],
      headerText: "お支払い方法",
      useSemicolon: false,
      useHeaderSemicolon: false,
    },
    {
      titles: ["単価", "配布部数", "合計金額"],
      description: [
        "¥8.00/部",
        "2,000部",
        <>
          <span className="lg:text-[1.3vw] font-bold">¥17,600</span>
          <br />
          (税抜 : ¥16,000)
        </>,
      ],
      headerText: "料金",
      useHeaderSemicolon: false,
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
    <div className="dashboard-container">
      <div className="top-nav-bottom-view">
        【大田区限定】ポスティング(チラシ配布)サービス
      </div>
      <LeftSideBar />
      <div className="content pl-2 pr-2 ">
        <div className="flex flex-col items-center justify-start demo px-4">
          <div className="text-center ">
            <CustomHeader
              header="ご注文内容の確認"
              headerClass="text-lg font-semibold text-gray-800"
              customParentClassName="mt-4"
            />
          </div>
          <div className="border w-full">
            <div className="w-full bg-white  ">
              <h2 className="text-md mt-2 ml-4 font-semibold text-gray-800">
                ご注文1
              </h2>
            </div>
            <div className="w-full">
              <CustomComponent
                parentClassName="content-card"
                content={CustomContent}
              />
            </div>
          </div>
          <div className="flex justify-end w-full mt-1">
            <Button
              parentClassName="back-button"
              buttonProps={deleteButtonProps}
            />
          </div>
        </div>

        <div className="flex  mt-4 mb-2 p-2 ml-0 mr-0 flex-end shadow-md shadow-top space-x-4 ">
          <div className="flex-1 ">
            <Button
              buttonProps={{
                text: i18n.language == "en" ? "Back " : "戻る",
                className:
                  "w-full h-[50px] text-center text-sm sm:text-[10px] md:text-sm lg:text-sm flex items-center justify-center ", // Centered text with varying font sizes
              }}
              parentClassName="back-button"
            />
          </div>
          <div className="flex-1">
            <Button
              buttonProps={{
                text: i18n.language == "en" ? "Picking" : "お支払い情報登録",
                forward: true,
                iconPos: "right",
                className:
                  "w-full h-[50px] text-center text-sm sm:text-[10px] md:text-sm lg:text-sm flex items-center justify-center", // Centered text with varying font sizes
                onClick: () => {
                  setActiveIndex(activeIndex + 1);
                },
              }}
            />
          </div>
        </div>
      </div>

      <RightSideBar />
    </div>
  );
};

export default OrderConfirm;
