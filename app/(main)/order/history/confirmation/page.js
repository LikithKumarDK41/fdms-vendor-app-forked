// "use client";
// import React from "react";
// import { Button } from "@/components";
// import { ImageComponent } from "@/components";
// const confirmationOrder = () => {
//   return (
//     <div>
//       <div>
//         <span>\</span>ご注文を受け付けました<span>/</span>
//       </div>
//       <div>
//         <div className="flex justify-center text-center w-full">
//           <ImageComponent
//             imageProps={{
//               src: "/layout/images/orderConfirm.png",
//               width: "80",
//               height: "80",
//               alt: "Logo",
//             }}
//           />
//         </div>
//         <div>
//           ※まだご注文は確定していません※ これから配布員とのマッチングを行い
//           成立しましたらご注文確定となり、決済が行われます。
//         </div>
//         <div>
//           <div className="flex justify-content-center mt-3 mb-5">
//             <Button
//               buttonProps={{
//                 type: "submit",
//                 text: t("back_to_top"),
//                 buttonClass: "update-button w-full",
//                 onClick: () => router.push("/"),
//               }}
//               parentClassName={"update-button w-full"}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default confirmationOrder;

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

const ConfirmOrder = () => {
  // const { t, i18n } = useTranslation("translation");
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
        <div className="right-sidebar"></div>
      </div>
    </>
  );
};

export default ConfirmOrder;
