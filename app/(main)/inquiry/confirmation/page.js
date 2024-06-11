"use client";

import React from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { Button } from "@/components";
import { changeLanguage } from "@/helper";

const InquiryConfirmationPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
  const formData = useSelector((state) => state.form.formData);
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
        <div className="content w-full pl-2 pr-2">
          <div>
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
              <div className="flex justify-center text-center w-full page-header">
                {t("confirmation_of_inquiry_details")}
              </div>
            </div>
            <div className="mt-5 mb-4">
              <div className="text-lg font-bold">{t("name")}</div>
              <div className="mb-1 font-normal">
                {formData.firstName + " " + formData.secondName}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-lg font-bold">{t("userId")}</div>
              <div className="mt-1 font-normal">{formData.username}</div>
            </div>
            <div className="mb-4">
              <div className="text-lg font-bold">{t("inquiry_type")}</div>
              <div className="mt-1 font-normal">{formData.selectInquiry}</div>
            </div>
            <div className="mb-4">
              <div className="text-lg font-bold">{t("content_of_inquiry")}</div>
              <div className="mt-1 font-normal">{formData.content}</div>
            </div>
            <div className="">
              <Button
                buttonProps={{
                  type: "submit",
                  text: t("send"),
                  buttonClass: "update-button w-full",
                  onClick:()=>router.push("/inquiry/success")
                }}
                parentClassName={"update-button w-full"}
              />
            </div>
          </div>
        </div>
        <div className="right-sidebar"></div>
      </div>
    </>
  );
};

export default InquiryConfirmationPage;
