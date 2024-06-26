"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { PrivacyPolicy } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

const PrivacyPage = () => {
  const { t, i18n } = useTranslation("translation");
  const [privacyPolicyData, setPrivacyPolicy] = useState();
  const [lang, setLang] = useState("jp");

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
      <LeftSideBar />
      <div className="content pl-2 pr-2">
        <div className="">
          <i
            className="pi pi-language text-2xl cursor-pointer"
            onClick={() => updateLang()}
          ></i>
        </div>
        <h1 className="text-center font-bold text-[18px] 2xl:text-[1.4vw] mb-[20px]">
          {t("privacy_policy")}
        </h1>
        {privacyPolicyData && <PrivacyPolicy data={privacyPolicyData} />}
        <h6 className="text-[16px] 2xl:text-[1.3vw]">{t("above")}</h6>
      </div>
      <RightSideBar />
    </div>
  );
};

export default PrivacyPage;
