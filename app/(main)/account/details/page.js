"use client";
import { Button } from "@/components";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/helper";
    

export default function AccountInfo() {
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
    <div className="content w-full pb-2 pl-2 pr-2">
      <div className="">
        <div>
          <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
            <div className="flex absolute right-0">
              <i className="pi pi-language text-2xl cursor-pointer"    onClick={() =>
                      i18n.language == "en"
                        ? changeLanguage("jp")
                        : changeLanguage("en")
                    }></i>
            </div>
            <div className="flex justify-center text-center w-full page-header">
              <div className="font-bold text-xl mb-2 text-center">
                アカウント情報
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="mb-4">
              <div className="font-bold">{t("name")}</div>
              <div className="font-normal">山田 太郎</div>
            </div>
            <div className="mb-4">
              <div className="font-bold">{t("furigana")}</div>
              <div className="font-normal">ヤマダ タロウ</div>
            </div>
            <div className="mb-4">
              <div className="font-bold">{t("phone_number")}</div>
              <div className="font-normal">0311112222</div>
            </div>
            <div className="mb-4">
              <div className="font-bold">{t("address")}</div>
              <div className="font-normal">
                〒1700013
                <br />
                東京都豊島区東池袋2-1-3MKビル3階
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold">{t("password")}</div>
              <div className="font-normal">********</div>
            </div>
            <div className="mb-4">
              <div className="font-bold">{t("company_name")}</div>
              <div className="font-normal">株式会社ビーメッセンジャー</div>
            </div>
            <div className="mb-4">
              <div className="font-bold">{t("company_address")}</div>
              <div className="font-normal">
                〒1700013
                <br />
                東京都豊島区東池袋2-1-3MKビル3階
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold">{t("industry")}</div>
              <div className="font-normal">広告・マーケティング</div>
            </div>
            <div className="text-center">
              <Button
                buttonProps={{
                  type: "button",
                  text: t("edit_account_information"),
                  icon: <i className="pi pi-user-edit"></i>,
                  buttonClass: " w-full",
                }}
                parentClassName={"register-button w-full"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="right-sidebar"></div>
    </div>
  );
}
