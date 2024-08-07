"use client";

import React from "react";
import { useTranslation } from "react-i18next";

import { ContentCardDynamic, StatusButton } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

export default function Widget() {
  const { i18n } = useTranslation("translation");

  const contentData = [
    {
      titles: ["配布エリア", "配布部数", "発注日", "配布完了日"],
      description: [
        <>
          <a className="text-blue-300" href="#">
            マップで確認する
          </a>
        </>,
        "2,000部",
        "2024年10月10日",
        "2024年10月11日",
      ],
      headerText: "ポスティング",
      useSemicolon: false,
      useHeaderSemicolon: false,
    },
    {
      titles: ["単価"],
      description: [
        <>
          <div className="2xl:pb-6 mb-2">〒1700013</div>
          <div>東京都豊島区東池袋2－1－3MKビル3階</div>
        </>,
      ],
      headerText: "ピッキング先",
      useSemicolon: false,
      useHeaderSemicolon: false,
    },
    {
      titles: ["単価", "配布部数", "合計金額", "決済方法"],
      description: [
        "¥8.00/部",
        "2,000部",
        <>
          <span className="lg:text-[1.3vw] font-bold">¥17,600</span>
          <br />
          (税抜 : ¥16,000)
        </>,
        <>
          <div className="flex orderDetailButton flex-wrap w-full">
            <div className="">
              クレジット決済
            </div>
            <div className="flex orderButtonPadding 2xl:mx-6 ">
              <StatusButton
                statusButtonProps={{
                  text:
                    i18n.language == "en" ? "Aqua Status" : "アクアステータス",
                  status: "aquaStatus",
                  custom: "h-[20px]  orderbuttonSize",
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
      useHeaderSemicolon: false,
    },
  ];
  return (
    <>
      <div className="dashboard-container">
        <LeftSideBar />
        <div className="content w-full pl-2 pr-2">
          <div className="mb-3 mt-3 2xl:pb-6 2xl:pt-4">
            <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
              <div className="flex absolute right-0 translateIcon">
                <i
                  className="pi pi-language cursor-pointer"
                  onClick={() =>
                    i18n.language == "en"
                      ? changeLanguage("jp")
                      : changeLanguage("en")
                  }
                ></i>
              </div>
              <div className="flex justify-center text-center text-[18px] 2xl:text-[1.4vw] w-full">
                {i18n.language == "en" ? "Order Details" : "ご注文内容詳細"}
              </div>
            </div>
          </div>
          <div className="pl-4 font-bold 2xl:pb-6 text-[18px] 2xl:text-[1.3vw] 2xl:mx-6">
          注文番号 : 1000105
          </div>
          <div className="m-2 contentPadding">
            <ContentCardDynamic
              parentClassName="w-full"
              content={contentData}
              contentHeaderTextClassName={"lg:text-[1vw] 6xl:text-[0.9vw] font-bold"}
              contentTextClassName={"lg:text-[1.1vw]  6xl:text-[0.7vw]"}
              titleClassName={"lg:text-[1vw] font-normal"}
              descriptionClassName={"lg:text-[1vw] font-bold"}
              className={"mb-2"}
              customContentHeaderStatusButton={"contentCardHomePage"}
              linkClassName={"link-button"}
              linkButtonParentClassName={"6xl:mb-[20px]"}
            />
          </div>
        </div>
        <RightSideBar />
      </div>
    </>
  );
}
