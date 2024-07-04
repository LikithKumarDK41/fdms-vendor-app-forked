"use client";

import React, { useState, useEffect } from "react";
import { Timeline } from "primereact/timeline";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import {
  ContentCardDynamic,
  CustomHeader,
  StatusButton,
  StepsCard,
} from "@/components";
import { LeftSideBar, RightSideBar } from "@/template";

export default function Progress() {
  const initialEvents = [
    {
      id: 1,
      status: "Ordered",
      text:"注文受付",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      id: 2,
      status: "Processing",
      text:"ピッキング",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      id: 3,
      status: "Shipped",
      text:"配布中",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      id: 4,
      status: "Delivered",
      text:"配布完了",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  const [statusButtonClass, setStatusButtonClass] = useState("aquaStatus");
  const [events, setEvents] = useState(initialEvents);
  const [status, setStatus] = useState("Delivered"); // Example status: "Processing"
  const [statusButtonText, setStatusButtonText] = useState("未決済");

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
      useSemicolon: false,
      useHeaderSemicolon: false,
    },
    {
      titles: ["住所 "],
      description: [
        <>
          <span>〒1700013</span> <br /> 東京都豊島区東池袋2－1－3MKビル3階
        </>,
      ],
      headerText: "ピッキング先",
      useSemicolon: false,
      useHeaderSemicolon: false,
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
          <div className="flex orderDetailButton flex-wrap w-full">
            <div>クレジット決済</div>
            <div className="2xl:mx-6 orderButtonPadding">
              <StatusButton
                statusButtonProps={{
                  text: statusButtonText,
                  status: statusButtonClass,
                  custom: "h-[20px]",
                  icon: false,
                  buttonClass: "orderProgressSubmitButton",
                }}
                parentClassName={"pl-2"}
              />
            </div>
          </div>
        </>,
      ],
      headerText: "料金",
      useSemicolon: false,
      useHeaderSemicolon: false,
    },
  ];

  const customizedMarker = (item, index) => {
    const itemStatusIndex = statusOrder.indexOf(item.status);
    const isActive = itemStatusIndex <= currentStatusIndex;
    return (
      <span
        className={`flex w-[1rem] h-[1rem] 5xl:w-[3rem] 5xl:h-[3rem] align-items-center justify-content-center text-white border-circle z-1 shadow-1 ${
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
            headerClass="text-[18px] 2xl:text-[1.4vw] font-bold  "
            customParentClassName="mt-4  2xl:mx-6 "
          />
        </div>
        <div className="w-full  mb-4">
          <ContentCardDynamic
            parentClassName="w-full"
            content={contentData}
            contentHeaderTextClassName={
              "lg:text-[1vw]  6xl:text-[0.9vw] font-bold"
            }
            contentTextClassName={"lg:text-[1.1vw] 6xl:text-[0.7vw]"}
            titleClassName={"lg:text-[1vw] font-normal"}
            descriptionClassName={"lg:text-[1vw] font-bold"}
            className={"mb-2"}
            customContentHeaderStatusButton={"contentCardHomePage"}
            linkClassName={"link-button"}
            linkButtonParentClassName={"6xl:mb-[20px]"}
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
                      <p className="text-[16px] 2xl:text-[1.2vw]">
                        配布員とのマッチングを行なっています。
                      </p>
                    </div>
                  ),
                  stepCardStyle: { background: "#FDEEEA" },
                  stepCardClassName:
                    "w-full md:w-[350px] 2xl:w-full lg:w-full xl:w-full",
                  imageProps: {
                    src: "/layout/images/handshake.png",
                    className: "w-[60px] h-[60px] 4xl:w-[200px] 4xl:h-[200px]",
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
                    className: "m-0 2xl:text-[1.2vw] 2xl:mb-4",
                  },
                  content: (
                    <div className="flex justify-center mt-2 ml-2">
                      <p className="text-[16px] 2xl:text-[1.2vw] text-center">
                        <div className="text-center text-[16px] 2xl:text-[1.2vw]">
                          配布員がピッキングにまいります。
                        </div>
                        配布物をご用意の上お待ちください。
                      </p>
                    </div>
                  ),
                  stepCardStyle: { background: "#FDEEEA" },
                  stepCardClassName:
                    "w-full md:w-[350px] 2xl:w-full lg:w-full xl:w-full",
                  imageProps: {
                    src: "/layout/images/Cycle.png",
                    className: "w-[60px] h-[60px] 4xl:w-[200px] 4xl:h-[200px]",
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
                      <p className="text-[16px] 2xl:text-[1.2vw]">
                        <div className="text-center text-[16px] 2xl:text-[1.2vw]">
                          配布員が配布を行なっています。
                        </div>
                        <div className="font-bold text-[24px]">
                          配布完了予定 : 10月11日
                        </div>
                      </p>
                    </div>
                  ),
                  stepCardStyle: { background: "#FDEEEA" },
                  stepCardClassName:
                    "w-full md:w-[350px] 2xl:w-full lg:w-full xl:w-full",
                  imageProps: {
                    src: "/layout/images/Shipping.png",
                    className: "w-[60px] h-[60px] 4xl:w-[200px] 4xl:h-[200px]",
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
                      <p className="text-[16px] 2xl:text-[1.2vw]">
                        <div className="text-center text-[16px] 2xl:text-[1.2vw]">
                          配布が完了しました。
                        </div>
                      </p>
                    </div>
                  ),
                  stepCardStyle: { background: "#FDEEEA" },
                  stepCardClassName:
                    "w-full md:w-[350px] 2xl:w-full lg:w-full xl:w-full",
                  imageProps: {
                    src: "/layout/images/delivered.png",
                    className: "w-[60px] h-[60px] 4xl:w-[200px] 4xl:h-[200px]",
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
        <LeftSideBar />
        <div className="content w-full 2xl:pr-6 2xl:pl-6  3xl:pr-4 3xl:pl-4 4xl:pr-6 4xl:pl-6">
          <div className="flex justify-center items-center mt-2">
            <div className=" mx-2 2xl:mx-2  mt-1">
              <IoIosArrowBack
                fontWeight={900}
                className="text-[20px] 2xl:text-[1.2vw]"
              />
            </div>
            <div className="flex-grow  text-center items-center mt-2">
              <CustomHeader
                header={"ご注文内容詳細"}
                headerClass={"font-bold text16"}
                customParentClassName={"flex justify-center items-center"}
              />
            </div>
          </div>
          <div className="mr-2 ml-2 ">
            <Timeline
              value={events}
               
              content={(events) => events.text}
              layout="horizontal"
              align="top"
              className={currentStatusIndex >= 0? "activeLineConnector orderProgressTimeLine w-full ": "disabledLineConnector orderProgressTimeLine"}
              marker={customizedMarker}
            />
            {renderContentByStatus(status)}
          </div>
        </div>
        <RightSideBar />
      </div>
    </>
  );
}