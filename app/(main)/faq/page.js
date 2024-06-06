"use client";

import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import PrivacyPolicy from "@/components/privacyPolicy";
import { useTranslation } from "next-i18next";
import { changeLanguage } from "@/helper";
import { QuestionPanel, PanelList } from "@/components";
import CustomHeader from "@/components/customHeader";
import { panelData } from "@/utils/constant";

const Faq = () => {
  const panelsData = [
    {
      header: "領収書は発行できますか？",
      content: (
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ),
    },
    {
      header: "質問が入ります質問が入ります",
      content: <p className="m-0">Another content goes here.</p>,
    },
    // Add more panels as needed
  ];
  const panelsData1 = panelData.map((panel) => ({
    header: panel.Title,
    content: (
      <div>
        {panel.QA.map((qa, idx) => (
          <div key={idx}>
            <h4>{qa.Question}</h4>
            <p>{qa.Answer}</p>
          </div>
        ))}
      </div>
    ),
  }));
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
      <div className="content">
        <div className="mt-2">
          <CustomHeader header="Question Panel" />
          <div className="mt-2 ">
            <QuestionPanel panelsData={panelData} />
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Panel List" />
          <div className="mt-2">
            <CustomHeader header="Without icon" />
            <PanelList panelsData={panelsData1} />
          </div>

          <style jsx>{`
            .borderLeftHeader {
              border-left: 3px solid var(--primary-color);
              transform: skewX(40deg);
              height: 20px;
            }
            .borderRightHeader {
              border-right: 3px solid var(--primary-color);
              transform: skewX(-40deg);
              height: 20px;
            }
          `}</style>
        </div>
      </div>

      <div className="right-sidebar"></div>
    </div>
  );
};

export default Faq;
