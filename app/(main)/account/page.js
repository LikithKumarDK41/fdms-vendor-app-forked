"use client";

import React, { useState } from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { Button, LogoutConfirmationModal } from "@/components";
import { changeLanguage, hideOverFlow, showOverFlow } from "@/helper";

const AccountPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
  const [logoutOpen, setLogoutOpen] = useState(false);
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

  const infoData = [
    {
      icon: "pi pi-user",
      title: t("account_info"),
      link: "#",
    },
    {
      icon: "pi pi-map-marker",
      title: t("picking_info"),
      link: "#",
    },
    {
      icon: "pi pi-lock",
      title: t("password_reset"),
      link: "/forgot-password",
    },
    {
      icon: "pi pi-user-minus",
      title: t("delete_account"),
      link: "/account-delete",
    },
  ];

  return (
    <>
      <LogoutConfirmationModal
        open={logoutOpen}
        close={() => {
          setLogoutOpen(false);
          showOverFlow();
        }}
        handleLogout={() => router.push("/login")}
      />
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
        <div className="content w-full bg-gray-100 pl-2 pr-2">
          <div className="">
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
                  {t("account")}
                </div>
              </div>
              {infoData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-content-space-between border-noround bg-white border-bottom-2"
                  style={{ padding: "0.75rem" }}
                >
                  <div className="flex align-items-center gap-2">
                    <span>
                      <i className={item.icon}></i>
                    </span>
                    <span className="font-bold">{item.title}</span>
                  </div>
                  <div className="flex-grow-1 text-right">
                    <a
                      href={item.link}
                      className="text-gray-500 hover:text-primary"
                    >
                      <i className="pi pi-angle-right cursor-pointer"></i>
                    </a>
                  </div>
                </div>
              ))}
              <div>
                <div className="flex justify-content-center mt-6 mb-5">
                  <Button
                    buttonProps={{
                      type: "button",
                      link: true,
                      icon: <i className="pi pi-sign-out pr-1"></i>,
                      text: t("logout"),
                      buttonClass: "update-button",
                      onClick: () => {
                        setLogoutOpen(true);
                        hideOverFlow();
                      },
                    }}
                    parentClassName={"update-button"}
                  />
                </div>
              </div>
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

export default AccountPage;
