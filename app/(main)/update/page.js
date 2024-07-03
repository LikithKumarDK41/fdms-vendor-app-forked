"use client";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { Button } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

export default function AccountInfo() {
  const router = useRouter();

  const { t, i18n } = useTranslation("translation");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="dashboard-container">
      <LeftSideBar />
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
                  style={{ cursor: "pointer" }}
                  className="ml-2 2xl:mt-[50px] 2xl:mb-[50px]"
                />
              </div>
              <div className="flex justify-center text-center w-full mb-3 page-header 2xl:mt-[50px] ">
                アカウント情報
              </div>
            </div>
            <div className=" w-full py-4 px-4">
              <div className="mb-[12px]">
                <div className="mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px] ">
                  <strong>{t("name")}</strong>
                </div>
                <div className="text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  山田
                  <span className="ml-2 text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                    太郎
                  </span>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  <strong>{t("phonetic_name")}</strong>
                </div>
                <div className="text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  ヤマダ
                  <span className="ml-2 text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                    タロウ
                  </span>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  <strong>{t("phone_number")}</strong>
                </div>
                <div className="text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  0311112222
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  <strong>{t("address")}</strong>
                </div>
                <div className="text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  〒1700013
                  <div className="mb-[12px] 2xl:text-[26px] 3xl:text-[26px] 4xl:text-[30px] 5xl:text-[36px]">
                    東京都豊島区東池袋2－1－3MKビル3階
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px]">
                  <div className="font-bold mb-2 text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                    {t("password")}
                  </div>
                  <div
                    className="font-normal mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]"
                    onMouseEnter={() => setShowPassword(true)}
                    onMouseLeave={() => setShowPassword(false)}
                  >
                    {showPassword ? "Sandy100@" : "******"}
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  <strong>{t("company_name")}</strong>
                </div>
                <div className="text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  株式会社ビーメッセンジャー
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  <strong>{t("company_address")}</strong>
                </div>
                <div className="text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  〒1700013
                  <div className="mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                    東京都豊島区東池袋2－1－3MKビル3階
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-[12px]">
                <div className="mb-[12px] text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  <strong>{t("industry")}</strong>
                </div>
                <div className="text-[16px] 2xl:text-[17px] 2xl:mb-6  3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
                  広告・マーケティング
                </div>
              </div>
              <hr />
              <div className="flex justify-center">
                <Button
                  buttonProps={{
                    type: "button",
                    text: t("edit_account_information"),
                    icon: <i className="pi pi-user-edit"></i>,
                    buttonClass: "text-center townDesignationSubmitButton", // Sets the button width and centers the text
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
      <RightSideBar />
    </div>
  );
}
