"use client";

import React, { useState } from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { Button, ImageComponent } from "@/components";
import { changeLanguage } from "@/helper";
import { MdMenuBook } from "react-icons/md";

const UserGuidePage = () => {
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
              <div className="flex justify-center text-center w-full">
                <MdMenuBook
                  className="text-primary"
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
            </div>
            <div className="flex justify-center text-center w-full font-bold text-2xl mb-3">
              {t("user_guide")}
            </div>
            <div className="flex align-items-center gap-2">
              <div className="text-center border-1 pl-[4px] pr-[5px] pt-0 pb-0 border-circle	border-primary bg-primary font-bold">
                01
              </div>
              <span className="font-bold">{t("order")}</span>
            </div>
            <div className="mt-4 mb-4 text-sm">
              {"1. " + t("user_guide_1")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <ImageComponent
                  imageProps={{
                    src: "/layout/images/userGuide1.png",
                    width: "240",
                    height: "264",
                    alt: "Logo",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 mb-4 text-sm">
              {"2. " + t("user_guide_2")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <ImageComponent
                  imageProps={{
                    src: "/layout/images/userGuide2.png",
                    width: "240",
                    height: "264",
                    alt: "Logo",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 mb-4 text-sm">
              {"3. " + t("user_guide_3")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <ImageComponent
                  imageProps={{
                    src: "/layout/images/userGuide3.png",
                    width: "240",
                    height: "264",
                    alt: "Logo",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 mb-4 text-sm">
              {"4. " + t("user_guide_4")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <ImageComponent
                  imageProps={{
                    src: "/layout/images/userGuide4.png",
                    width: "240",
                    height: "264",
                    alt: "Logo",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 mb-4 text-sm">
              {"5. " + t("user_guide_5")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <ImageComponent
                  imageProps={{
                    src: "/layout/images/userGuide5.png",
                    width: "240",
                    height: "264",
                    alt: "Logo",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar"></div>
      </div>
    </>
  );
};

export default UserGuidePage;
