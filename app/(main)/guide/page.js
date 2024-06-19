"use client";

import React from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";

import { ImageComponent, Button } from "@/components";
import { changeLanguage } from "@/helper";

const UserGuidePage = () => {
  const { t, i18n } = useTranslation("translation");
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
              <div className="flex justify-center text-center w-full">
                <MdMenuBook
                  className="text-primary"
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
            </div>
            <div className="flex justify-center text-center w-full page-header mb-3">
              {t("user_guide")}
            </div>
            <div className="flex align-items-center gap-2">
              <div className="text-center border-1 pl-[5px] pr-[5px] pt-0 pb-0 border-circle	border-primary bg-primary font-bold">
                01
              </div>
              <span className="font-bold">{t("order")}</span>
            </div>
            <div className="mt-4 mb-4 info-text">
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
            <div className="mt-4 mb-4 info-text">
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
            <div className="mt-4 mb-4 info-text">
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
            <div className="mt-4 mb-4 info-text">
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
            <div className="mt-4 mb-4 info-text">
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

export default UserGuidePage;
