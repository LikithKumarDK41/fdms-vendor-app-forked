"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { Button } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

const InquiryConfirmationPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
  const formData = useSelector((state) => state.form.formData);

  return (
    <>
      <div className="dashboard-container">
        <LeftSideBar />
        <div className="content w-full pl-2 pr-2 2xl:pt-[20px] 5xl:pt-[30px] 6xl:pt-[40px]">
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
                {t("confirmation_of_inquiry_details")}
              </div>
            </div>
            <div className="mt-5 mb-4">
              <div className="text-[18px] 2xl:text-[1.4vw] font-bold">{t("name")}</div>
              <div className="mb-1 font-normal text-[16px] 2xl:text-[1.3vw]">
                {formData.firstName + " " + formData.secondName}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-[18px] 2xl:text-[1.4vw] font-bold">{t("userId")}</div>
              <div className="mt-1 font-normal text-[16px] 2xl:text-[1.3vw]">{formData.username}</div>
            </div>
            <div className="mb-4">
              <div className="text-[18px] 2xl:text-[1.4vw] font-bold">{t("inquiry_type")}</div>
              <div className="mt-1 font-normal text-[16px] 2xl:text-[1.3vw]">{formData.selectInquiry}</div>
            </div>
            <div className="mb-4">
              <div className="text-[18px] 2xl:text-[1.4vw] font-bold">{t("content_of_inquiry")}</div>
              <div className="mt-1 font-normal text-[16px] 2xl:text-[1.3vw]">{formData.content}</div>
            </div>
            <div className="">
              <Button
                buttonProps={{
                  type: "submit",
                  text: t("send"),
                  buttonClass: "update-button w-full townDesignationSubmitButton",
                  onClick: () => router.push("/inquiry/success"),
                }}
                parentClassName={"update-button w-full"}
              />
            </div>
          </div>
        </div>
        <RightSideBar/>
      </div>
    </>
  );
};

export default InquiryConfirmationPage;
