// "use client";

// import React, { useState } from "react";

// import CustomHeader from "@/components/customHeader";
// import { CustomComponent, RadioBtn } from "@/components";
// import { Button } from "@/components";
// import Map from "../map/page";

// const OrderConfirmation = () => {
//   const [selectedValue, setSelectedValue] = useState(null);
//   // const handleRadioChange = (e) => {
//   //   setSelectedValue(e.value);
//   // };
//   const handleRadioChange = (e) => {
//     const selected = e.value === selectedValue ? null : e.value;
//     setSelectedValue(selected);
//   };

//   const CustomContent = [
//     {
//       titles: ["配布部数 :", "配布予定期間 :"],
//       description: ["2,000部", "10月10日〜10月11日"],
//       headerText: "ポスティング",
//     },
//     {
//       headerText: "ピッキング先",
//       customRadioBtn: (
//         <>
//           <div className="flex-col w-full">
//             <RadioBtn
//               parentClass="custom-radioBtn"
//               parentStyle={{ margin: "10px 0" }}
//               radioBtnProps={{
//                 inputId: "option1",
//                 name: (
//                   <>
//                     住所1 <br />
//                     <span style={{ marginLeft: "1rem" }}>〒1700013 </span>
//                     <br />
//                     <span style={{ marginLeft: "1rem" }}>
//                       東京都豊島区東池袋2－1－3MKビル3階
//                     </span>
//                     <br />
//                     <span style={{ marginLeft: "1rem" }}>
//                       店舗裏の業者用通用口から入ってください
//                     </span>
//                   </>
//                 ),
//                 value: "option1",
//                 onChange: handleRadioChange,
//                 checked: selectedValue === "option1",
//               }}
//             />
//             {selectedValue === "option1" && (
//               <div className="mt-4 ml-3 w-11">
//                 <Map />
//               </div>
//             )}

//             <RadioBtn
//               parentClass="custom-radioBtn"
//               parentStyle={{ margin: "10px 0" }}
//               radioBtnProps={{
//                 inputId: "option2",
//                 name: (
//                   <>
//                     住所2 <br />
//                     <span style={{ marginLeft: "1rem" }}>〒1700013 </span>
//                     <br />
//                     <span style={{ marginLeft: "1rem" }}>
//                       東京都豊島区東池袋2－1－3MKビル3階{" "}
//                     </span>
//                   </>
//                 ),
//                 value: "option2",
//                 onChange: handleRadioChange,
//                 checked: selectedValue === "option2",
//               }}
//             />
//             {selectedValue === "option2" && (
//               <div className="mt-4 ml-3 w-11">
//                 <Map />
//               </div>
//             )}
//           </div>
//         </>
//       ),
//       buttonProps: {
//         text: "編集",
//         link: true,
//       },
//     },
//     {
//       titles: [""],
//       description: ["クレジットカード"],
//       headerText: "お支払い方法",
//     },
//     {
//       titles: ["単価 :", "配布部数 :", "合計金額 :"],
//       description: [
//         "¥8.00/部",
//         "2,000部",
//         <>
//           ¥17,600
//           <br />
//           (税抜 : ¥16,000)
//         </>,
//       ],
//       headerText: "料金",
//     },
//   ];

//   const deleteButtonProps = {
//     text: "削除",
//     icon: "pi pi-trash",
//     bg: "bg-white",
//     buttonClass: "text-gray-600",
//     hoverBg: "",
//   };
//   const backButtonProps = {
//     text: "戻る",
//     icon: "pi pi-arrow-left",
//     bg: "bg-white",
//     buttonClass: "text-gray-600",
//     hoverBg: "hover:bg-gray-200",
//   };

//   const paymentButtonProps = {
//     text: "お支払いへ",
//     icon: "pi pi-angle-right",
//     bg: "bg-orange-500",
//     buttonClass: "text-white",
//     hoverBg: "hover:bg-orange-600",
//   };

//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen px-4">
//       <div className="text-center ">
//         <CustomHeader
//           header="ご注文内容の確認"
//           headerClass="text-lg font-semibold text-gray-800"
//           customParentClassName="mt-8"
//           requiredSymbol
//         />
//       </div>
//       <div className="w-full bg-white p-4 mt-4">
//         <h2 className="text-lg font-semibold text-gray-800">ご注文1</h2>
//       </div>
//       <div className="w-full">
//         <CustomComponent
//           parentClassName="content-card"
//           content={CustomContent}
//         />
//       </div>
//       <div className="flex justify-end w-full mt-4">
//         <Button
//           parentClassName="delete-button"
//           buttonProps={deleteButtonProps}
//         />
//       </div>
//       <div className="flex ">
//         <Button parentClassName="" buttonProps={backButtonProps} />
//         <Button
//           parentClassName="ml-4"
//           buttonProps={{
//             text: "お支払いへ",
//             forward: true,
//             iconPos: "right",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;

"use client";

import React, { useState, useEffect } from "react";
import {
  ContentCardDynamic,
  CustomHeader,
  StatusButton,
  StepsCard,
  Button,
  RadioBtn,
  CustomComponent,
} from "@/components";
import { Timeline } from "primereact/timeline";

import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";
import MapModal from "@/components";
import { changeLanguage } from "@/helper";

export default function OrderConfirmation() {
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
      titles: ["配布部数", "配布予定期間"],
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
                {/* <Map /> */}
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
                {/* <Map /> */}
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
      titles: ["単価", "配布部数", "合計金額"],
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
          <div className="flex flex-col items-center justify-start min-h-screen px-4">
            {/* {" "} */}
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
