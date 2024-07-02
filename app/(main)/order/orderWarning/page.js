"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { LeftSideBar, RightSideBar } from "@/template";
import {
  ContentCardDynamic,
  CustomHeader,
  StepsCard,
  StatusButton,
} from "@/components";

const OrderWarning = () => {
  const [statusButtonClass] = useState("orangeStatus");

  const contentData = [
    {
      titles: ["配布エリア ", "配布部数  ", "発注日 ", "配布予定期間 "],
      description: [
        <>
          <a className="text-blue-300" href="#">
            マップで確認する
          </a>
        </>,
        "2,000部",
        "2024年10月10日",
        "10月10日〜10月11日",
      ],
      headerText: "ポスティング",
      useSemicolon: false,
      useHeaderSemicolon:false
    },
    {
      titles: ["住所 "],
      description: [
        <>
          <div className="2xl:pb-2 mb-2">〒1700013</div>
          <div>東京都豊島区東池袋2－1－3MKビル3階</div>
        </>,
      ],
      headerText: "ピッキング先",
      useSemicolon: false,
      useHeaderSemicolon:false
    },

    {
      titles: ["単価", "配布部数 ", "合計金額", "決済方法"],
      description: [
        "¥8.00/部",
        "2,000部",
        <>
          <>
            <span className="lg:text-[1.3vw] font-bold">¥17,600</span>
            <br />
            (税抜 : ¥16,000)
          </>
        </>,

        <>
          <div className="flex orderDetailButton flex-wrap w-full">
            <div>クレジット決済</div>
            <div className="flex orderButtonPadding 2xl:mx-6">
              <StatusButton
                statusButtonProps={{
                  text: "決済中止",
                  status: statusButtonClass,
                  custom: "h-[20px]",
                  icon: false,
                  buttonClass:"orderDetailSubmitButton"
                }}
                parentClassName={"pl-2"}
              />
            </div>
          </div>
        </>,
      ],
      headerText: "料金",
      useSemicolon: false,
      useHeaderSemicolon:false
    },
  ];

  const details = () => (
    <>
      <div>
        <CustomHeader
          header="注文番号 : 1000105"
          headerClass="text-[18px] 2xl:text-[1.4vw] font-bold "
          customParentClassName="mt-4 mx-2 "
        />
      </div>
      <div className="mb-4 contentPadding">
        <ContentCardDynamic
          parentClassName="w-full "
          content={contentData}
          contentHeaderTextClassName={"lg:text-[1vw]  6xl:text-[0.9vw] font-bold"}
          contentTextClassName={"lg:text-[1.1vw] 6xl:text-[0.7vw]"}
          titleClassName={"lg:text-[1vw] font-normal"}
          descriptionClassName={"lg:text-[1vw] font-bold"}
          className={"mb-2"}
          customContentHeaderStatusButton={"contentCardHomePage"}
          linkClassName={"link-button"}
          linkButtonParentClassName={"6xl:mb-[20px]"}
        />
      </div>
    </>
  );

  return (
    <div className="dashboard-container">
      <LeftSideBar />
      <div className="content pl-2 pr-2 2xl:pl-8">
        <div className="relative flex justify-center items-center mt-4 mb-4">
          <div className="absolute left-4 cursor-pointer">
            <IoIosArrowBack  className="text-[18px] 2xl:text-[1.4vw]"/>
          </div>
          <div className="font-bold text-[18px] 2xl:text-[1.4vw]">ご注文内容詳細</div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col w-[100%] mr-2 ml-2 2xl:mr-4 contentPadding">
            <StepsCard
              stepsCardProps={{
                topHeaderProps: {
                  text: "",
                  className: "m-0",
                },
                content: (
                  <div className="text-center">
                    <span className="text-[#EA5532] font-bold text-[16px] 2xl:text-[1.3vw]">
                      マッチングが成立しませんでした{" "}
                    </span>
                    <br />
                    <span className="text-[14px] 2xl:text-[1.1vw]">申し訳ございませんが、</span>
                    <br />
                    <span className="text-[14px] 2xl:text-[1.1vw]">
                      時間をおいて再度お試しください。
                    </span>
                  </div>
                ),
                stepCardStyle: { background: "#FDEEEA" },
                stepCardClassName: "w-full md:w-[350px] lg:w-full xl:w-full",
                imageProps: {
                  src: "/layout/images/warning.png",
                  className:"w-[60px] h-[60px] 4xl:w-[150px] 4xl:h-[150px]"
                },
              }}
              parentClassName="flex justify-center"
            />
            {details()}
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default OrderWarning;
