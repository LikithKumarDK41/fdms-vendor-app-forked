"use client";

import React, { useState } from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { Button, ImageComponent, LogoutConfirmationModal } from "@/components";
import { changeLanguage, hideOverFlow, showOverFlow } from "@/helper";

const InquiryPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
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
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "sssss",
    },
  ];

  return (
    <>
      <div className="dashboard-container">
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
        <div className="content w-full ">
          <div className="py-4 px-4">
            <form>
              <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
                <div className="flex absolute right-0">
                  <i
                    className="pi pi-language text-2xl cursor-pointer"
                    onClick={() =>
                      i18n.language == "en"
                        ? changeLanguage("jp")
                        : changeLanguage("en")
                    }
                  ></i>
                </div>
                <div className="flex justify-center text-center w-full">
                  <ImageComponent
                    imageProps={{
                      src: "/layout/images/mail-outline.png",
                      width: "80",
                      height: "80",
                      alt: "Logo",
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center text-center w-full font-bold text-2xl mb-3">
                {t("inquiry")}
              </div>
              <div className="text-center mb-4 text-sm">
                {t("please_fill_required_form")}
                <br />
                {t("representative_will_respond_in_3_days")}
                <br/>
                {t("if_in_hurry_contact_by_phone")}
              </div>
              <div>
                <div className="field custom_inputText">
                
                </div>
                <div className="flex justify-content-center mt-3 mb-5">
                  <Button
                    buttonProps={{
                      type: "submit",
                      text: t("to_the_confirmation_Screen"),
                      buttonClass: "update-button w-full",
                    }}
                    parentClassName={"update-button w-full"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="right-sidebar"></div>
      </div>
    </>
  );
};

export default InquiryPage;
