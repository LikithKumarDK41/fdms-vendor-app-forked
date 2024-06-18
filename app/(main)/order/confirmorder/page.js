"use client";

import React, { useState } from "react";
import { CustomComponent, RadioBtn } from "@/components";
import CustomHeader from "@/components/customHeader";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Map from "@/app/(full-page)/map/page";

import { Button, ImageComponent } from "@/components";
import { changeLanguage } from "@/helper";

const OrderConfirm = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  // const handleRadioChange = (e) => {
  //   setSelectedValue(e.value);
  // };
  const handleRadioChange = (e) => {
    const selected = e.value === selectedValue ? null : e.value;
    setSelectedValue(selected);
  };

  const CustomContent = [
    {
      titles: ["配布部数 :", "配布予定期間 :"],
      description: ["2,000部", "10月10日〜10月11日"],
      headerText: "ポスティング",
    },
    {
      headerText: "ピッキング先",
      customRadioBtn: (
        <>
          <div className="flex-col w-full">
            <RadioBtn
              parentClass="custom-radioBtn"
              parentStyle={{ margin: "10px 0" }}
              radioBtnProps={{
                inputId: "option1",
                name: (
                  <>
                    住所1 <br />
                    <span style={{ marginLeft: "1rem" }}>〒1700013 </span>
                    <br />
                    <span style={{ marginLeft: "1rem" }}>
                      東京都豊島区東池袋2－1－3MKビル3階
                    </span>
                    <br />
                    <span style={{ marginLeft: "1rem" }}>
                      店舗裏の業者用通用口から入ってください
                    </span>
                  </>
                ),
                value: "option1",
                onChange: handleRadioChange,
                checked: selectedValue === "option1",
              }}
            />
            {selectedValue === "option1" && (
              <div className="mt-4 ml-3 w-11">
                <Map />
              </div>
            )}

            <RadioBtn
              parentClass="custom-radioBtn"
              parentStyle={{ margin: "10px 0" }}
              radioBtnProps={{
                inputId: "option2",
                name: (
                  <>
                    住所2 <br />
                    <span style={{ marginLeft: "1rem" }}>〒1700013 </span>
                    <br />
                    <span style={{ marginLeft: "1rem" }}>
                      東京都豊島区東池袋2－1－3MKビル3階{" "}
                    </span>
                  </>
                ),
                value: "option2",
                onChange: handleRadioChange,
                checked: selectedValue === "option2",
              }}
            />
            {selectedValue === "option2" && (
              <div className="mt-4 ml-3 w-11">
                <Map />
              </div>
            )}
          </div>
        </>
      ),
      buttonProps: {
        text: "編集",
        link: true,
      },
    },
    {
      titles: [""],
      description: ["クレジットカード"],
      headerText: "お支払い方法",
    },
    {
      titles: ["単価 :", "配布部数 :", "合計金額 :"],
      description: [
        "¥8.00/部",
        "2,000部",
        <>
          ¥17,600
          <br />
          (税抜 : ¥16,000)
        </>,
      ],
      headerText: "料金",
    },
  ];

  const deleteButtonProps = {
    text: "削除",
    icon: "pi pi-trash",
    bg: "bg-white",
    buttonClass: "text-gray-600",
    hoverBg: "",
  };
  const backButtonProps = {
    text: "戻る",
    icon: "pi pi-arrow-left",
    bg: "bg-white",
    buttonClass: "text-gray-600",
    hoverBg: "hover:bg-gray-200",
  };

  const paymentButtonProps = {
    text: "お支払いへ",
    icon: "pi pi-angle-right",
    bg: "bg-orange-500",
    buttonClass: "text-white",
    hoverBg: "hover:bg-orange-600",
  };
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
        {/* <div className="content w-full pl-2 pr-2">
          <div className="text-center ">
            <CustomHeader
              header="ご注文内容の確認"
              headerClass="text-lg font-semibold text-gray-800"
              customParentClassName="mt-8"
              requiredSymbol
            />
          </div>
          <div className="w-full bg-white p-4 mt-4">
            <h2 className="text-lg font-semibold text-gray-800">ご注文1</h2>
          </div>
          <div className="w-full">
            <CustomComponent
              parentClassName="content-card"
              content={CustomContent}
            />
          </div>
          <div className="flex justify-end w-full mt-4">
            <Button
              parentClassName="delete-button"
              buttonProps={deleteButtonProps}
            />
          </div>
          <div className="flex ">
            <Button parentClassName="" buttonProps={backButtonProps} />
            <Button
              parentClassName="ml-4"
              buttonProps={{
                text: "お支払いへ",
                forward: true,
                iconPos: "right",
              }}
            />
          </div>
        </div> */}
        <div className="content w-full pl-2 pr-2">
          <div className="flex justify-center mt-4">
            <CustomHeader
              header="ご注文内容の確認"
              headerClass="text-lg font-semibold text-gray-800 text-center"
              customParentClassName=""
              requiredSymbol
            />
          </div>

          {/* <div className="w-full bg-white p-4 mt-4 rounded shadow">
            <div>
              <div className="flex justify-center mt-8">
                <CustomHeader
                  header="ご注文内容の確認"
                  headerClass="text-lg font-semibold text-gray-800 text-center"
                  customParentClassName=""
                  requiredSymbol
                />
              </div>
            </div>
          </div> */}
          <div className="w-full mt-4">
            <CustomComponent
              parentClassName="content-card"
              content={CustomContent}
            />
          </div>
          <div className="flex justify-end w-full mt-4">
            <Button
              parentClassName="delete-button"
              buttonProps={deleteButtonProps}
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full mt-4 space-y-2 md:space-y-0">
            <Button
              parentClassName="w-full md:w-auto"
              buttonProps={backButtonProps}
            />
            <Button
              parentClassName="ml-0 md:ml-4 w-full md:w-auto"
              buttonProps={{
                text: "お支払いへ",
                forward: true,
                iconPos: "right",
              }}
            />
          </div>
        </div>
        <div className="right-sidebar"></div>
      </div>
    </>
  );
};

export default OrderConfirm;
