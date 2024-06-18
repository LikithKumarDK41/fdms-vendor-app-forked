"use client";

import React from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { changeLanguage } from "@/helper";
import { ContentCardDynamic } from "@/components";
import { useRouter } from "next/navigation";

export default function Widget() {
  const { t, i18n } = useTranslation("translation");
  const router= useRouter();
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
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "sssss",
    },
  ];
  const contentData = [
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "マッチング不成立",
      status: "warningStatus",
      linkClick:()=>router.push("/order/details")
    },
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "注文受付",
      status: "blueStatus",
    },
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "ピッキング",
      status: "orangeStatus",
    },
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: t("order_no"),
      contentText: "1000104",
      buttonSymbol: true,
      buttonText: "配布中",
      status: "goldStatus",
    },
    {
      titles: ["配布完了日", "配布部数", "発注日"],
      description: ["9月8日", "1,000部", "2024年9月7日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "配布完了",
      status: "aquaStatus",
    },
    {
      titles: ["配布完了日", "配布部数", "発注日"],
      description: ["9月8日", "1,000部", "2024年9月7日"],
      headerText: t("order_no"),
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "配布完了",
      status: "aquaStatus",
    },
  ];
  return (
    <>
      <div className="dashboard-container">
        <div className="left-sidebar">
          <Card className="sidebar-card">
            <div className="left-sidebar-header">
              <div className="logoContainer">
                <Image
                  src="/layout/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </div>
              <hr className="horizontalLine" />
              <div className="header-first">大田区限定</div>
              <div className="header-second">
                ポスティング(チラシ配布)サービス
              </div>
              <hr className="horizontalLine" />
            </div>
            <div className="left-sidebar-content">
              {sidebar.map((v, i) => (
                <div
                  key={i}
                  className={`sampleDiv ${
                    i === sidebar.length - 1 ? "last" : ""
                  }`}
                >
                  <span className="text">{v.text}</span>
                  <AiOutlineRight className="icon" />
                </div>
              ))}
            </div>
            <div className="left-sidebar-footer">
              <p className="footer-header">
                ©︎2024 BE Messenger All Rights Reserved
              </p>
            </div>
          </Card>
        </div>
        <div className="content w-full pl-2 pr-2">
          <div>
            <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
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
              <div className="flex justify-center text-center w-full">
                {t("order_history")}
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <ContentCardDynamic
              parentClassName="w-full"
              content={contentData}
              contentHeaderTextClassName={"lg:text-[1vw] 6xl:text-[0.7vw]"}
              contentTextClassName={"lg:text-[1.1vw] 6xl:text-[0.7vw]"}
              titleClassName={"lg:text-[1vw] font-normal"}
              descriptionClassName={"lg:text-[1vw] font-bold"}
              className={"mb-2"}
              customContentHeaderStatusButton={"contentCardHomePage"}
              linkClassName={"link-button"}
              linkButtonParentClassName={"6xl:mb-[20px]"}
            />
          </div>
        </div>
        <div className="right-sidebar"></div>
      </div>
    </>
  );
}
