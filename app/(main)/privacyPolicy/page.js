"use client";

import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import PrivacyPolicy from "@/components/privacyPolicy";
import { useTranslation } from "next-i18next";
import { changeLanguage } from "@/helper";

const PrivacyPage = () => {
  const { t, i18n } = useTranslation("translation");
  const [privacyPolicyData, setPrivacyPolicy] = useState();
  const [lang, setLang] = useState("jp");
  let sidebar = [
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
      <div className="content pl-2 pr-2">
        <div className="">
          <i
            className="pi pi-language text-2xl cursor-pointer"
            onClick={() => updateLang()}
          ></i>
        </div>
        <h1 className="text-center font-bold text-[18px] mb-[20px]">
          {t("privacy_policy")}
        </h1>
        {privacyPolicyData && <PrivacyPolicy data={privacyPolicyData} />}
        <h6>{t("above")}</h6>
      </div>
      <div className="right-sidebar"></div>
    </div>
  );
};

export default PrivacyPage;
