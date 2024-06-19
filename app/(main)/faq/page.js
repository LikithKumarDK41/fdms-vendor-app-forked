"use client";

import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { changeLanguage } from "@/helper";
import { PanelList, ImageComponent, Button } from "@/components";
import { panelData } from "@/utils/constant";
import FaqComponent from "@/components/faq";

const Faq = () => {
  const { t, i18n } = useTranslation("translation");
  const panelsData1 = [
    {
      header: <span className="font-bold text-[12px]">ご注文について</span>,
      content: <p className="m-0"></p>,
    },
    {
      header: <span className="font-bold text-[12px]">お支払いについて</span>,
      content: <p className="m-0"></p>,
    },
    {
      header: <span className="font-bold text-[12px]">ピッキングについて</span>,
      content: <p className="m-0"></p>,
    },
    {
      header: (
        <span className="font-bold text-[12px]">ポスティングについて</span>
      ),
      content: <p className="m-0"></p>,
    },
  ];

  const [privacyPolicyData, setPrivacyPolicy] = useState();
  const [lang, setLang] = useState("jp");
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

  useEffect(() => {
    let privacy = t("privacyPolicy", { returnObjects: true });
    privacy && setPrivacyPolicy(JSON.parse(JSON.stringify(privacy)));
  }, [lang]);

  const updateLang = () => {
    i18n.language == "en" ? changeLanguage("jp") : changeLanguage("en");
    setLang(i18n.language);
  };

  return (
    <div className="dashboard-container">
      <div className="top-nav-bottom-view">
        【大田区限定】ポスティング(チラシ配布)サービス
      </div>
      <div className="left-sidebar h-full">
        <Card className="sidebar-card relative flex flex-col flex-grow">
          <div className="left-sidebar-header">
            <div className="logoContainer">
              <img
                src="/layout/images/logo.png"
                alt="logo"
                className="w-3 h-auto"
              />
            </div>
            <hr className="horizontalLine" />
            <div className="header-first">大田区限定</div>
            <div className="header-second">
              ポスティング(チラシ配布)サービス
            </div>
            <hr className="horizontalLine" />
          </div>
          <div className="mb-3 mt-3">
            <Button
              parentClassName="w-full shadow-1"
              buttonProps={{
                text: t("start_ordering"),
                forward: true,
                iconPos: "right",
                buttonClass: "w-full userGuide-button h-auto",
              }}
            />
          </div>
          <div className="left-sidebar-content flex-grow">
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
          <div className="left-sidebar-footer absolute bottom-[20px] 2xl:bottom-[25px] left-0 w-full">
            <p className="footer-header text-center">
              ©︎2024 BE Messenger All Rights Reserved
            </p>
          </div>
        </Card>
      </div>
      <div className="content pl-2 pr-2">
        <div className="flex ">
          <i
            className="pi pi-language text-2xl cursor-pointer"
            onClick={() =>
              i18n.language == "en"
                ? changeLanguage("jp")
                : changeLanguage("en")
            }
          ></i>
        </div>
        <div className="flex justify-center">
          <ImageComponent
            imageProps={{
              src: "/layout/images/question.png",
              width: "64",
              height: "64",
              alt: "Logo",
            }}
          />
        </div>
        <span className="font-bold text-[18px] flex justify-center mt-4 mb-4">
          {t("faq")}
        </span>

        <PanelList panelsData={panelsData1} />

        <div className="mt-4">
          <FaqComponent panelData={panelData} />
        </div>
      </div>
      <div className="right-sidebar lg:flex md:flex sm:flex flex-col justify-content-end items-end">
        <div className="right-side-content">
          <div className="w-full">
            <Button
              parentClassName="w-full register-button"
              buttonProps={{
                text: "カート",
                icon: (
                  <i className="text-[1.3vw]">
                    {" "}
                    <FiShoppingCart />
                  </i>
                ),
                iconPos: "top",
                buttonClass: "w-full border-white border-2",
                custom: "userGuide-button h-auto",
              }}
            />
          </div>
          <div className="w-full">
            <Button
              parentClassName="w-full"
              buttonProps={{
                text: "アカウント",
                icon: (
                  <i className="text-[1.3vw]">
                    <FiUser />
                  </i>
                ),
                iconPos: "top",
                custom: "userGuide-button h-auto",
                buttonClass: "w-full border-white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
