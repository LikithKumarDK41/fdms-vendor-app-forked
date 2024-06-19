"use client";

import React from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiUser } from "react-icons/fi";

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
  ];

  return (
    <>
      <div className="dashboard-container">
        <div className="left-sidebar h-full">
          <Card className="sidebar-card relative flex flex-col flex-grow">
            <div className="left-sidebar-header">
              <div className="logoContainer">
                <img
                  src="/layout/images/logo.png"
                  alt="logo"
                  className="w-3 h-auto"
                />
              </div>
              <hr className="horizontalLine" />
              <div className="header-first">大田区限定</div>
              <div className="header-second">
                ポスティング(チラシ配布)サービス
              </div>
              <hr className="horizontalLine" />
            </div>
            <div className="mb-3 mt-3">
              <Button
                parentClassName="w-full shadow-1"
                buttonProps={{
                  text: t("start_ordering"),
                  forward: true,
                  iconPos: "right",
                  buttonClass: "w-full userGuide-button h-auto",
                }}
              />
            </div>
            <div className="left-sidebar-content flex-grow">
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
            <div className="left-sidebar-footer absolute bottom-[20px] 2xl:bottom-[25px] left-0 w-full">
              <p className="footer-header text-center">
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
                  onClick: () => router.push("/inquiry/success"),
                }}
                parentClassName={"update-button w-full"}
              />
            </div>
          </div>
        </div>
        <div className="right-sidebar lg:flex md:flex sm:flex flex-col justify-content-end items-end">
          <div className="right-side-content">
            <div className="w-full">
              <Button
                parentClassName="w-full register-button"
                buttonProps={{
                  text: "カート",
                  icon: (
                    <i className="text-[1.3vw]">
                      {" "}
                      <FiShoppingCart />
                    </i>
                  ),
                  iconPos: "top",
                  buttonClass: "w-full border-white border-2",
                  custom: "userGuide-button h-auto",
                }}
              />
            </div>
            <div className="w-full">
              <Button
                parentClassName="w-full"
                buttonProps={{
                  text: "アカウント",
                  icon: (
                    <i className="text-[1.3vw]">
                      <FiUser />
                    </i>
                  ),
                  iconPos: "top",
                  custom: "userGuide-button h-auto",
                  buttonClass: "w-full border-white",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryConfirmationPage;
