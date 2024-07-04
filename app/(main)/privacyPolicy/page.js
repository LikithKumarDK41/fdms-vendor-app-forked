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
      <div className="content pl-2 pr-2 ">
        <div className="translateIcon">
          <i
            className="pi pi-language cursor-pointer"
            onClick={() => updateLang()}
          ></i>
        </div>
        <h1 className="text-center font-bold mb-[20px] page-header">
          {t("privacy_policy")}
        </h1>
        {privacyPolicyData && <PrivacyPolicy data={privacyPolicyData} />}
        <h6 className="mt-[20px] text16">{t("above")}</h6>
      </div>
      <RightSideBar />
    </div>
  );
};

export default PrivacyPage;