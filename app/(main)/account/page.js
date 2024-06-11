"use client";

import React, { useState } from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

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
        <div className="right-sidebar"></div>
      </div>
    </>
  );
};

export default AccountPage;
