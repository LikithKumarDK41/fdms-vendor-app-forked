"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { ContentCardDynamic } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

export default function Widget() {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();

  const contentData = [
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "マッチング不成立",
      status: "warningStatus",
      linkClick: () => router.push("/order/details"),
      useSemicolon: false,
    },
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "注文受付",
      status: "blueStatus",
      useSemicolon: false,
    },
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "ピッキング",
      status: "orangeStatus",
      useSemicolon: false,
    },
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: t("order_no"),
      contentText: "1000104",
      buttonSymbol: true,
      buttonText: "配布中",
      status: "goldStatus",
      useSemicolon: false,
    },
    {
      titles: ["配布完了日", "配布部数", "発注日"],
      description: ["9月8日", "1,000部", "2024年9月7日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "配布完了",
      status: "aquaStatus",
      useSemicolon: false,
    },
    {
      titles: ["配布完了日", "配布部数", "発注日"],
      description: ["9月8日", "1,000部", "2024年9月7日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "配布完了",
      status: "aquaStatus",
      useSemicolon: false,
      useHeaderSemicolon: true,
    },
  ];
  return (
    <>
      <div className="dashboard-container">
        <LeftSideBar />
        <div className="content w-full pl-2 pr-2">
          <div>
            <div className="flex w-full font-bold text-2xl relative mb-[5px] 2xl:mt-[10px] 2xl:mb-[10px] 3xl:mt-[15px] 3xl:mb-[15px] 4xl:mt-[20px] 4xl:mb-[20px] 5xl:mt-[25px] 5xl:mb-[25px] 6xl:mt-[50px] 6xl:mb-[50px]">
              <div className="flex absolute right-0">
                <i
                  className="pi pi-language text-2xl cursor-pointer"
                  onClick={() =>
                    i18n.language == "en"
                      ? changeLanguage("jp")
                      : changeLanguage("en")
                  }
                ></i>
              </div>
              <div className="flex justify-center text-center w-full page-header">
                {t("order_history")}
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <ContentCardDynamic
              parentClassName="w-full"
              content={contentData}
              contentHeaderTextClassName={"lg:text-[1vw] 6xl:text-[1vw]"}
              contentTextClassName={"lg:text-[1.1vw] 6xl:text-[1vw]"}
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
