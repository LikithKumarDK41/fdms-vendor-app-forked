"use client";
import { useState } from "react";
import { Card } from "primereact/card";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { Button } from "@/components";
import { changeLanguage } from "@/helper";

export default function AccountInfo() {
  const router = useRouter();
  
  const { t, i18n } = useTranslation("translation");
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="content w-full pb-2 pl-1 pr-2">
        {" "}
        <div className="" style={{ height: "100%" }}>
          <div className="">
            <div className="flex justify-end mr-5">
              <i
                className="pi pi-language text-2xl cursor-pointer"
                onClick={() =>
                  i18n.language === "en"
                    ? changeLanguage("jp")
                    : changeLanguage("en")
                }
              ></i>
            </div>

            <div className="flex items-center justify-center">
              <div className="ml-4">
                <IoIosArrowBack
                  style={{ fontSize: "24px", cursor: "pointer" }}
                />
              </div>

              <div className="font-bold text-[24px] text-center  flex-1 mr-6">
                アカウント情報
              </div>
            </div>

            <div className=" w-full py-4 px-4">
              <div className="mb-[12px]">
                <div className="mb-[12px] ">
                  <strong>{t("name")}</strong>
                </div>
                <div>
                  山田　
                  <span className="ml-2">太郎</span>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px]">
                  <strong>{t("phonetic_name")}</strong>
                </div>
                <div>
                  ヤマダ
                  <span className="ml-2">タロウ</span>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px]">
                  <strong>{t("phone_number")}</strong>
                </div>
                <div>0311112222</div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px]">
                  <strong>{t("address")}</strong>
                </div>
                <div>
                  〒1700013
                  <div className="mb-[12px]">
                    東京都豊島区東池袋2－1－3MKビル3階
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px]">
                  <div className="font-bold mb-2">{t("password")}</div>
                  <div
                    className="font-normal mb-[12px]"
                    onMouseEnter={() => setShowPassword(true)}
                    onMouseLeave={() => setShowPassword(false)}
                  >
                    {showPassword ? "Sandy100@" : "******"}
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px]">
                  <strong>{t("company_name")}</strong>
                </div>
                <div>株式会社ビーメッセンジャー</div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px]">
                  <strong>{t("company_address")}</strong>
                </div>
                <div>
                  〒1700013
                  <div className="mb-[12px]">
                    東京都豊島区東池袋2－1－3MKビル3階
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px]">
                  <strong>{t("industry")}</strong>
                </div>
                <div>広告・マーケティング</div>
              </div>
              <hr />
              <div className="flex justify-center">
                <Button
                  buttonProps={{
                    type: "button",
                    text: t("edit_account_information"),
                    icon: <i className="pi pi-user-edit"></i>,
                    buttonClass: "w-[326px] text-center", // Sets the button width and centers the text
                    onClick: () => {
                      router.push("/updateInfo");
                    },
                  }}
                  parentClassName={"register-button w-full flex justify-center"}
                />
              </div>
            </div>
          </div>
          <div></div>
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
  );
}
