"use client";

import React from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { Button, ImageComponent } from "@/components";
import { changeLanguage } from "@/helper";

const ConfirmOrder = () => {
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
              <div className="flex flex-col items-center mt-8 ml-4 mr-4">
                {" "}
                {/* Added mt-8 for top margin */}
                <div className="text-center mb-4">
                  <span className="text-[#EA5532] mr-2 ">\</span>
                  ご注文を受け付けました
                  <span className="text-[#EA5532] ml-2">/</span>
                </div>
                <div className="flex items-center justify-center mb-8">
                  {" "}
                  {/* Added flex and justify-center for centering */}
                  <ImageComponent
                    imageProps={{
                      src: "/layout/images/orderConfirm.png",
                      width: "123",
                      height: "164",
                      alt: "Logo",
                    }}
                  />
                </div>
                <div className="text-[12px] font-weight-[light] text-center">
                  <div>※まだご注文は確定していません※</div>
                  これから配布員とのマッチングを行い
                  成立しましたらご注文確定となり、決済が行われます。
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-content-center mt-3 mb-5 w-full ">
                <Button
                  buttonProps={{
                    type: "submit",
                    text: t("back_to_top"),
                    buttonClass: "update-button w-full",
                    onClick: () => router.push("/"),
                  }}
                  parentClassName={"update-button w-full"}
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

export default ConfirmOrder;
