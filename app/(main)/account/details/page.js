"use client";

import { useTranslation } from "react-i18next";

import { Button } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

export default function AccountInfo() {
  const { t, i18n } = useTranslation("translation");

  return (
    <div className="dashboard-container">
      <LeftSideBar />
      <div className="content w-full pb-2 pl-2 pr-2">
        <div className="">
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
              <div className="flex justify-center text-center w-full page-header">
                アカウント情報
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="mb-4">
                <div className="font-bold text16">{t("name")}</div>
                <div className="font-normal text16">山田 太郎</div>
              </div>
              <div className="mb-4">
                <div className="font-bold text16">{t("furigana")}</div>
                <div className="font-normal text16">ヤマダ タロウ</div>
              </div>
              <div className="mb-4">
                <div className="font-bold text16">{t("phone_number")}</div>
                <div className="font-normal text16">0311112222</div>
              </div>
              <div className="mb-4">
                <div className="font-bold text16">{t("address")}</div>
                <div className="font-normal text16">
                  〒1700013
                  <br />
                  東京都豊島区東池袋2-1-3MKビル3階
                </div>
              </div>
              <div className="mb-4">
                <div className="font-bold text16">{t("password")}</div>
                <div className="font-normal text16">********</div>
              </div>
              <div className="mb-4">
                <div className="font-bold text16">{t("company_name")}</div>
                <div className="font-normal text16">
                  株式会社ビーメッセンジャー
                </div>
              </div>
              <div className="mb-4">
                <div className="font-bold text16">{t("company_address")}</div>
                <div className="font-normal text16">
                  〒1700013
                  <br />
                  東京都豊島区東池袋2-1-3MKビル3階
                </div>
              </div>
              <div className="mb-4">
                <div className="font-bold text16">{t("industry")}</div>
                <div className="font-normal text16">広告・マーケティング</div>
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
      <RightSideBar />
    </div>
  );
}
