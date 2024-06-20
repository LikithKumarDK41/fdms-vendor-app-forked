"use client";

import React, { useState, useEffect } from "react";
import {
  ContentCardDynamic,
  CustomHeader,
  StatusButton,
  StepsCard,
  Button,
  RadioBtn,
  CustomComponent,
  GoogleMapComponent,
  MapModal,
} from "@/components";
import { Timeline } from "primereact/timeline";

import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

export default function OrderConfirmation() {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
  const sidebar = [
    {
      text: "ご注文履歴",
    },
    {
      text: "ご利用ガイド",
    },
    {
      text: "よくある質問",
    },
    {
      text: "お問い合わせ",
    },
    {
      text: "利用規約",
    },
  ];
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
    },
    {
      headerText: "ピッキング先",
      customRadioBtn: (
        <div className=" w-full">
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
                  </>
                ),
                value: "option1",
                onChange: handleRadioChange,
                checked: selectedValue === "option1",
              }}
            />
            {selectedValue === "option1" && (
              <div className="mt-4 ml-3 w-11">
                <GoogleMapComponent
                  initialPosition={{
                    lat: 12.932518841599157,
                    lng: 77.5404829347857,
                  }}
                  height="500px"
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
                  height="500px"
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
    <>
      <div className="dashboard-container">
        <LeftSideBar />
        <div className="content w-full ">
          <div className="flex flex-col items-center justify-start  px-4">
            <div className="text-center ">
              <CustomHeader
                header="ご注文内容の確認"
                headerClass="text-lg font-semibold text-gray-800"
                customParentClassName="mt-4"
              />
            </div>
            <div className="w-full bg-white  ">
              <h2 className="text-lg font-semibold text-gray-800">ご注文1</h2>
            </div>
            <div className="w-full">
              <CustomComponent
                parentClassName="content-card"
                content={CustomContent}
              />
            </div>
            <div className="flex justify-end w-full mt-1">
              <Button
                parentClassName="delete-button"
                buttonProps={deleteButtonProps}
              />
            </div>
          </div>

          <div className="flex ml-4 mt-4 mb-2 space-x-4 mr-4">
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
    </>
  );
}
