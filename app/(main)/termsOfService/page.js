"use client";

import React from "react";

import { useTranslation } from "next-i18next";
import { Card } from "primereact/card";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import TermsComponent from "@/components/termsComponent";
import { termsData } from "@/utils/constant";

const TermsOfService = () => {
  const { t, i18n } = useTranslation("translation");

  const sidebar = [
    { text: t("Order History") },
    { text: t("User Guide") },
    { text: t("FAQs") },
    { text: t("Contact Us") },
    { text: t("Terms of Service") },
    { text: t("Terms of Service") },
    { text: t("Terms of Service") },
    { text: t("Terms of Service") },
    { text: t("Terms of Service") },
    { text: t("Terms of Service") },
    { text: t("Terms of Service") },
    { text: t("sssss") },
  ];

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "jp" : "en";
    i18n.changeLanguage(newLanguage);
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
            onClick={() =>
              i18n.language == "en"
                ? changeLanguage("jp")
                : changeLanguage("en")
            }
          ></i>
        </div>
        <h1 className="text-2xl text-center font-bold mb-[20px]">
          {t("terms_of_service")}
        </h1>
        <TermsComponent data={termsData} />
        <h6 className="mt-[20px]">以上</h6>
      </div>
      <div className="right-sidebar"></div>
    </div>
  );
};

export default TermsOfService;
