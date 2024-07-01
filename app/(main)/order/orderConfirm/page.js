"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";

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
  const [cartEmpty, setCartEmpty] = useState(true); // State variable for cart empty

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
                    <span className="ml-2 font-bold text-[12px]">住所1 </span>

                    <br />

                    <span className="ml-[25px] text-[12px] font-normal">
                      〒1700013{" "}
                    </span>
                    <br />
                    <span className="ml-[25px] text-[12px] font-normal">
                      東京都豊島区東池袋2－1－3MKビル3階
                    </span>

                    <br />

                    <span className="ml-[25px] text-[12px] font-light">
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
                    <span className="ml-2 font-bold text-[12px] ">住所2 </span>
                    <br />
                    <div className="text-[12px]">
                      <span className="ml-[25px] text-[12px] font-normal">
                        〒1700013{" "}
                      </span>
                      <br />
                      <span className="ml-[25px]  text-[12px] font-normal">
                        東京都豊島区東池袋2－1－3MKビル3階
                      </span>
                    </div>
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
      titles: [
        <>
          <span className="font-bold">クレジットカード</span>
        </>,
      ],
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
      useSemicolon: true,
    },
  ];

  const deleteButtonProps = {
    text: "削除",
    icon: "pi pi-trash",
    bg: "bg-white",
    buttonClass: "text-gray-600",
    hoverBg: "",
  };

  return (
    <div className="dashboard-container">
      <div className="top-nav-bottom-view">
        【大田区限定】ポスティング(チラシ配布)サービス
      </div>
      <LeftSideBar />
      <div className="content pl-2 pr-2 ">
        {cartEmpty ? (
          <>
            <div className="flex flex-col items-center justify-start demo px-2">
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
                    parentClassName="content-card w-full"
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
                    text:
                      i18n.language == "en" ? "Picking" : "お支払い情報登録",
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
          </>
        ) : (
          <>
            <div className="text-center mt-4">
              <div className="relative flex justify-center items-center mt-4 mb-4">
                <div className="absolute left-4 cursor-pointer">
                  <IoIosArrowBack style={{ fontSize: "24px" }} />
                </div>
                <div className="font-bold text-[16px]">ご注文内容詳細</div>
              </div>
              <div className="mt-[100px] text-[14px]">
                カートには何も入っていません
              </div>
            </div>
          </>
        )}
      </div>
      <RightSideBar />
    </div>
  );
};

export default OrderConfirm;
