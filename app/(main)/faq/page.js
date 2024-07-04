"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { PanelList, ImageComponent, FaqComponent } from "@/components";
import { changeLanguage } from "@/helper";
import { panelData } from "@/utils/constant";
import { LeftSideBar, RightSideBar } from "@/template";

const Faq = () => {
  const { t, i18n } = useTranslation("translation");
  const panelsData1 = [
    {
      header: (
        <span className="font-bold text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px] ">
          ご注文について
        </span>
      ),
      content: <p className="m-0"></p>,
      headerClassName: "2xl:mb-6",
    },
    {
      header: (
        <span className="font-bold text-[16px] 2xl:text-[17px]  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
          お支払いについて
        </span>
      ),
      content: <p className="m-0"></p>,
      headerClassName: "2xl:mb-6",
    },
    {
      header: (
        <span className="font-bold text-[16px] 2xl:text-[17px] 3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
          ピッキングについて
        </span>
      ),
      content: <p className="m-0"></p>,
      headerClassName: "2xl:mb-6",
    },
    {
      header: (
        <span className="font-bold text-[16px] 2xl:text-[17px] 3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
          ポスティングについて
        </span>
      ),
      content: <p className="m-0"></p>,
      headerClassName: "2xl:mb-6",
    },
  ];

  const [privacyPolicyData, setPrivacyPolicy] = useState();
  const [lang, setLang] = useState("jp");

  useEffect(() => {
    let privacy = t("privacyPolicy", { returnObjects: true });
    privacy && setPrivacyPolicy(JSON.parse(JSON.stringify(privacy)));
  }, [lang]);

  return (
    <div className="dashboard-container 2xl:px-[100px] 3xl:px-[200px] 4xl:px-[300px] 5xl:px-[400px] 6xl:px-[500px]">
      <div className="top-nav-bottom-view">
        【大田区限定】ポスティング(チラシ配布)サービス
      </div>
      <LeftSideBar />
      <div className="content pl-2 pr-2 mb-200px  ">
        <div className="flex translateIcon">
          <i
            className="pi pi-language cursor-pointer"
            onClick={() =>
              i18n.language == "en"
                ? changeLanguage("jp")
                : changeLanguage("en")
            }
          ></i>
        </div>
        <div className="flex justify-center ">
          <img
            src="/layout/images/question.png"
            className="w-[64px] h-[64px] 2xl:h-full 2xl:w-[100px] 4xl:w-[200px]  3xl:h-full 3xl:w-[100px] 5xl:w-[200px] 5xl:h-full 4xl:h-full 6xl:h-full 6xl:w-[200px]"
          />
        </div>
        <span className="font-bold text-[16px] flex justify-center mt-4 mb-4 2xl:text-[17px]  2xl:mb-6 2xl:mb-[20px]  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
          {t("faq")}
        </span>
        <div className="panelPadding">
          <PanelList panelsData={panelsData1} />
        </div>
        <div className="mt-4">
          <FaqComponent panelData={panelData} />
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default Faq;
