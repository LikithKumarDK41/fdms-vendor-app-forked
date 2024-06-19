"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

import {
  ContentCardDynamic,
  CustomHeader,
  StatusButton,
  StepsCard,
  Button,
} from "@/components";

export default function Progress() {
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

  const initialEvents = [
    {
      id: 1,

      status: "Ordered",

      date: "15/10/2020 10:30",

      icon: "pi pi-shopping-cart",

      color: "#9C27B0",

      image: "game-controller.jpg",
    },

    {
      id: 2,

      status: "Processing",

      date: "15/10/2020 14:00",

      icon: "pi pi-cog",

      color: "#673AB7",
    },

    {
      id: 3,

      status: "Shipped",

      date: "15/10/2020 16:15",

      icon: "pi pi-shopping-cart",

      color: "#FF9800",
    },

    {
      id: 4,

      status: "Delivered",

      date: "16/10/2020 10:00",

      icon: "pi pi-check",

      color: "#607D8B",
    },
  ];

  const [statusButtonClass, setStatusButtonClass] = useState("aquaStatus");

  const [events, setEvents] = useState(initialEvents);

  const [status, setStatus] = useState("Ordered"); // Example status: "Processing"

  const [statusButtonText, setStatusButtonText] = useState("未決済");

  const contentData = [
    {
      titles: ["配布エリア ", "配布部数  ", "発注日 ", "配布予定期間 "],

      description: [
        "マップで確認する",

        "2,000部",

        "2024年10月10日",

        "10月10日〜10月11日",
      ],

      headerText: "ポスティング",
    },

    {
      titles: ["住所 "],

      description: [
        <>
          <span>〒1700013</span> <br /> 東京都豊島区東池袋2－1－3MKビル3階
        </>,
      ],

      headerText: "ピッキング先",
    },

    {
      titles: ["単価", "配布部数 ", "合計金額", "決済方法"],

      description: [
        "¥8.00/部",

        "2,000部",

        <>
          <>
            <span className="lg:text-[1.3vw] font-bold">¥17,600</span>
            <br />
            (税抜 : ¥16,000)
          </>
        </>,

        <>
          <div className="flex">
            <div>クレジット決済</div>

            <div>
              <StatusButton
                statusButtonProps={{
                  text: "未決済",

                  status: statusButtonClass,

                  custom: "h-[20px]",
                }}
                parentClassName={"pl-2"}
              />
            </div>
          </div>
        </>,
      ],

      headerText: "料金",
    },
  ];

  const statusOrder = ["Ordered", "Processing", "Shipped", "Delivered"];

  const currentStatusIndex = statusOrder.indexOf(status);

  useEffect(() => {
    switch (status) {
      case "Ordered":
        setStatusButtonClass("orangeStatus");

        setStatusButtonText("未決済");

        break;

      case "Processing":
        setStatusButtonClass("aquaStatus");

        setStatusButtonText("未決済");

        break;

      case "Shipped":
        setStatusButtonClass("aquaStatus");

        setStatusButtonText("未決済");

        break;

      case "Delivered":
        setStatusButtonClass("aquaStatus");

        setStatusButtonText("決済済み");

        break;

      default:
        setStatusButtonClass("defaultStatus");

        setStatusButtonText("未決済");

        break;
    }
  }, [status]);

  const customizedMarker = (item, index) => {
    const itemStatusIndex = statusOrder.indexOf(item.status);

    const isActive = itemStatusIndex <= currentStatusIndex;

    return (
      <span
        className={`flex w-1rem h-1rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 ${
          isActive ? "bg-primary" : "bg-white"
        }`}
      >
        <i className={`${isActive ? "bg-primary" : "bg-white disabled"}`}></i>
      </span>
    );
  };

  const details = () => {
    return (
      <>
        <div>
          <CustomHeader
            header="注文番号 : 1000105"
            headerClass="text-[16px] font-bold "
            customParentClassName="mt-4 "
          />
        </div>

        <div>
          <ContentCardDynamic
            parentClassName="content-card"
            content={contentData}
          />
        </div>
      </>
    );
  };

  const renderContentByStatus = (status) => {
    switch (status) {
      case "Ordered":
        return (
          <div className="w-full flex justify-center">
            <div className="flex flex-col w-[100%] mr-2 ml-2">
              <StepsCard
                stepsCardProps={{
                  topHeaderProps: {
                    text: "",

                    className: "m-0",
                  },

                  content: (
                    <div className="flex justify-center">
                      <p>配布員とのマッチングを行なっています。</p>
                    </div>
                  ),

                  stepCardStyle: { background: "#FDEEEA" },

                  stepCardClassName: "w-full md:w-[350px] lg:w-full xl:w-full",

                  imageProps: {
                    src: "/layout/images/handshake.png",

                    width: "100",

                    height: "60",
                  },
                }}
                parentClassName="flex justify-center"
              />

              {details()}
            </div>
          </div>
        );

      case "Processing":
        return (
          <div className="flex justify-content-center">
            <div className="flex flex-col w-[100%] mr-2 ml-2">
              <StepsCard
                stepsCardProps={{
                  topHeaderProps: {
                    text: "10月10日13:00〜14:00",

                    className: "m-0",
                  },

                  content: (
                    <div className="flex justify-content-center mt-2 ml-2">
                      <p>
                        <div className="text-center">
                          配布員がピッキングにまいります。
                        </div>
                        配布物をご用意の上お待ちください。
                      </p>
                    </div>
                  ),

                  stepCardStyle: { background: "#FDEEEA" },

                  stepCardClassName: "w-[326px]",

                  imageProps: {
                    src: "/layout/images/Cycle.png",

                    width: "100",

                    height: "60",
                  },
                }}
                parentClassName="flex justify-content-center"
              />

              {details()}
            </div>
          </div>
        );

      case "Shipped":
        return (
          <div className="flex justify-content-center">
            <div className="flex flex-col w-[100%] mr-2 ml-2">
              <StepsCard
                stepsCardProps={{
                  topHeaderProps: {
                    text: "",

                    className: "m-0",
                  },

                  content: (
                    <div className="flex justify-content-center mt-2 ml-2">
                      <p>
                        <div className="text-center">
                          配布員が配布を行なっています。
                        </div>

                        <div className="font-bold text-[24px]">
                          配布完了予定 : 10月11日
                        </div>
                      </p>
                    </div>
                  ),

                  stepCardStyle: { background: "#FDEEEA" },

                  stepCardClassName: "w-[326px]",

                  imageProps: {
                    src: "/layout/images/Shipping.png",

                    width: "100",

                    height: "60",
                  },
                }}
                parentClassName="flex justify-content-center"
              />

              {details()}
            </div>
          </div>
        );

      case "Delivered":
        return (
          <div className="flex justify-content-center">
            <div className="flex flex-col w-[100%] mr-2 ml-2">
              <StepsCard
                stepsCardProps={{
                  topHeaderProps: {
                    text: "",

                    className: "m-0",
                  },

                  content: (
                    <div className="flex justify-content-center mt-2 ml-2">
                      <p>
                        <div className="text-center">配布が完了しました。</div>
                      </p>
                    </div>
                  ),

                  stepCardStyle: { background: "#FDEEEA" },

                  stepCardClassName: "w-[326px]",

                  imageProps: {
                    src: "/layout/images/delivered.png",

                    width: "100",

                    height: "60",
                  },
                }}
                parentClassName="flex justify-content-center"
              />

              {details()}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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

        <div className="content w-full ">
          <div className=" mt-4 font-bold text-[16px] text-center">
            ご注文内容詳細
          </div>

          <div className="">
            <Timeline
              value={events}
              layout="horizontal"
              align="top"
              className={
                currentStatusIndex >= 0
                  ? "activeLineConnector"
                  : "disabledLineConnector"
              }
              marker={customizedMarker}
            />

            {renderContentByStatus(status)}
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
}
