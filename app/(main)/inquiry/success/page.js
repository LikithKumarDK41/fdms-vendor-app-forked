"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { Button, ImageComponent } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

const InquirySuccessPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();

  return (
    <>
      <div className="dashboard-container">
        <LeftSideBar />
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
              <div className="flex justify-center text-center w-full">
                <ImageComponent
                  imageProps={{
                    src: "/layout/images/completed.png",
                    width: "80",
                    height: "80",
                    alt: "Logo",
                  }}
                />
              </div>
            </div>
            <div className="flex justify-content-center text-center w-100 mb-2 page-header mb-4">
              {t("thank_you_for_inquiry")}
            </div>
            <div>
              <div className="flex justify-content-center mt-3 mb-5">
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
        <RightSideBar />
      </div>
    </>
  );
};

export default InquirySuccessPage;
