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

  const infoData = () => {
    return (
      <>
        {/* 1 */}
        <div
          className="flex justify-content-space-between border-noround bg-white border-bottom-2"
          style={{ padding: "0.75rem" }}
        >
          <div className="flex align-items-center gap-2">
            <span>
              <i class="pi pi-user"></i>
            </span>
            <span class="font-bold">{t("account_info")}</span>
          </div>
          <div className="flex-grow-1 text-right">
            <a href="#" className="text-gray-500 hover:text-primary">
              <i class="pi pi-angle-right cursor-pointer"></i>
            </a>
          </div>
        </div>
        {/* 2 */}
        <div
          className="flex justify-content-space-between border-noround bg-white border-bottom-2"
          style={{ padding: "0.75rem" }}
        >
          <div className="flex align-items-center gap-2">
            <span>
              <i class="pi pi-map-marker"></i>
            </span>
            <span class="font-bold">{t("picking_info")}</span>
          </div>
          <div className="flex-grow-1 text-right">
            <a href="#" className="text-gray-500 hover:text-primary">
              <i class="pi pi-angle-right cursor-pointer"></i>
            </a>
          </div>
        </div>
        {/* 3 */}
        <div
          className="flex justify-content-space-between border-noround bg-white border-bottom-2"
          style={{ padding: "0.75rem" }}
        >
          <div className="flex align-items-center gap-2">
            <span>
              <i class="pi pi-lock"></i>
            </span>
            <span class="font-bold">{t("password_reset")}</span>
          </div>
          <div className="flex-grow-1 text-right">
            <a href="/forgot-password" className="text-gray-500 hover:text-primary">
              <i class="pi pi-angle-right cursor-pointer"></i>
            </a>
          </div>
        </div>
        {/* /4 */}
        <div
          className="flex justify-content-space-between border-noround bg-white"
          style={{ padding: "0.75rem" }}
        >
          <div className="flex align-items-center gap-2">
            <span>
              <i class="pi pi-user-minus"></i>
            </span>
            <span class="font-bold">{t("delete_account")}</span>
          </div>
          <div className="flex-grow-1 text-right">
            <a href="/account-delete" className="text-gray-500 hover:text-primary">
              <i class="pi pi-angle-right cursor-pointer"></i>
            </a>
          </div>
        </div>
      </>
    );
  };

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
        <div className="content w-full bg-gray-100">
          <div className="">
            <div className="py-0 px-0 lg:px-4 py-4 md:px-4 py-4 sm:px-4 py-4">
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
                <div className="flex justify-center text-center w-full auth-header font-bold text-2xl">
                  {t("account")}
                </div>
              </div>
              {infoData()}
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
