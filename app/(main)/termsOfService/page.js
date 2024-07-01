"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { TermsAndConditions } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

const TermsOfService = () => {
  const { t, i18n } = useTranslation("translation");

  const [termsAndPrivacyData, settermsAndPrivacy] = useState();
  const [lang, setLang] = useState("jp");

  useEffect(() => {
    let terms = t("termsData", { returnObjects: true });
    terms && settermsAndPrivacy(JSON.parse(JSON.stringify(terms)));
  }, [lang]);

  const updateLang = () => {
    i18n.language == "en" ? changeLanguage("jp") : changeLanguage("en");
    setLang(i18n.language);
  };

  return (
    <div className="dashboard-container">
      <div className="top-nav-bottom-view">
        {t("Limited to Ota Ward: Posting (Flyer Distribution) Service")}
      </div>
      <LeftSideBar />
      <div className="content pl-2 pr-2">
        <div className="">
          <i
            className="pi pi-language text-2xl cursor-pointer"
            onClick={() => updateLang()}
          ></i>
        </div>
        <h1 className="text-center font-bold mb-[20px] page-header">
          {t("terms_of_service")}
        </h1>
        {termsAndPrivacyData && (
          <TermsAndConditions data={termsAndPrivacyData} />
        )}
        <h6 className="mt-[20px] text16">以上</h6>
      </div>
      <RightSideBar />
    </div>
  );
};

export default TermsOfService;
