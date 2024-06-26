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
        <span className="font-bold text-[12px] 2xl:text-[22px] 3xl:text-[32px] 4xl:text-[42px] 5xl:text-[52px]">
          ご注文について
        </span>
      ),
      content: <p className="m-0"></p>,
    },
    {
      header: (
        <span className="font-bold text-[12px] 2xl:text-[22px] mb- 3xl:text-[32px] 4xl:text-[42px] 5xl:text-[52px]">
          お支払いについて
        </span>
      ),
      content: <p className="m-0"></p>,
    },
    {
      header: (
        <span className="font-bold text-[12px] 2xl:text-[22px] 3xl:text-[32px] 4xl:text-[42px] 5xl:text-[52px]">
          ピッキングについて
        </span>
      ),
      content: <p className="m-0"></p>,
    },
    {
      header: (
        <span className="font-bold text-[12px] 2xl:text-[22px] 3xl:text-[32px] 4xl:text-[42px] 5xl:text-[52px]">
          ポスティングについて
        </span>
      ),
      content: <p className="m-0"></p>,
    },
  ];

  const [privacyPolicyData, setPrivacyPolicy] = useState();
  const [lang, setLang] = useState("jp");

  useEffect(() => {
    let privacy = t("privacyPolicy", { returnObjects: true });
    privacy && setPrivacyPolicy(JSON.parse(JSON.stringify(privacy)));
  }, [lang]);

  return (
    <div className="dashboard-container">
      <div className="top-nav-bottom-view">
        【大田区限定】ポスティング(チラシ配布)サービス
      </div>
      <LeftSideBar />
      <div className="content pl-2 pr-2 ">
        <div className="flex ">
          <i
            className="pi pi-language text-2xl 2xl:text-[30px] 3xl:text-[40px] 4xl:text-[46px] 5xl:text-[50px] cursor-pointer"
            onClick={() =>
              i18n.language == "en"
                ? changeLanguage("jp")
                : changeLanguage("en")
            }
          ></i>
        </div>
        <div className="flex justify-center ">
          <ImageComponent
            imageProps={{
              src: "/layout/images/question.png",
              width: "64",
              height: "64",
              alt: "Logo",
              // imageClassname: "imageFaq",
            }}
          />
        </div>
        <span className="font-bold text-[18px] flex justify-center mt-4 mb-4 2xl:text-[28px] 3xl:text-[38px] 4xl:text-[48px] 5xl:text-[58px]">
          {t("faq")}
        </span>

        <PanelList panelsData={panelsData1} />

        <div className="mt-4">
          <FaqComponent panelData={panelData} />
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default Faq;
