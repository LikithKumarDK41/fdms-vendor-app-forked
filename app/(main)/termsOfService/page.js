"use client";

import React, { useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import { Card } from "primereact/card";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

import { changeLanguage } from "@/helper";

import TermsAndConditions from "@/components/termsComponent";

const TermsOfService = () => {
  const { t, i18n } = useTranslation("translation");

  const [termsAndPrivacyData, settermsAndPrivacy] = useState();
  const [lang, setLang] = useState("jp");

  const sidebar = [
    { text: t("order_history") },
    { text: t("user_guide") },
    { text: t("faq") },
    { text: t("contact_us") },
    { text: t("terms_of_service") },
    { text: t("terms_of_service") },
    { text: t("terms_of_service") },
    { text: t("terms_of_service") },
    { text: t("terms_of_service") },
    { text: t("terms_of_service") },
    { text: t("terms_of_service") },
    { text: t("sssss") },
  ];
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
            <div className="header-first">{t("Limited to Ota Ward")}</div>
            <div className="header-second">
              {t("Posting (Flyer Distribution) Service")}
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
      <div className="content">
        <div className="">
          <i
            className="pi pi-language text-2xl cursor-pointer"
            onClick={() => updateLang()}
          ></i>
        </div>
        <h1 className="text-2xl text-center font-bold mb-[20px]">
          {t("terms_of_service")}
        </h1>
        {termsAndPrivacyData && (
          <TermsAndConditions data={termsAndPrivacyData} />
        )}
        <h6 className="mt-[20px]">以上</h6>
      </div>
      <div className="right-sidebar"></div>
    </div>
  );
};

export default TermsOfService;
