"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { MdMenuBook } from "react-icons/md";

import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

const UserGuidePage = () => {
  const { t, i18n } = useTranslation("translation");

  return (
    <>
      <div className="dashboard-container">
        <LeftSideBar />
        <div className="content w-full pl-2 pr-2">
          <div>
            <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
              <div className="flex absolute right-0">
                <i
                  className="pi pi-language text-[24px] 2xl:text-[30px] 3xl:text-[40px] 4xl:text-[46px] 5xl:text-[50px] cursor-pointer"
                  onClick={() =>
                    i18n.language == "en"
                      ? changeLanguage("jp")
                      : changeLanguage("en")
                  }
                ></i>
              </div>
              <div className="flex justify-center text-center w-full">
                <MdMenuBook
                  className="text-primary"
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
            </div>
            <div className="flex justify-center text-center w-full page-header mb-3">
              {t("user_guide")}
            </div>
            <div className="flex align-items-center gap-2">
              <div className="text-center border-1 pl-[5px] pr-[5px] 4xl:pl-[12px] 4xl:pr-[12px] 5xl:pl-[15px] 5xl:pr-[15px] 6xl:pl-[20px] 6xl:pr-[20px] 2xl:text-[1.3vw] pt-0 pb-0 border-circle	border-primary bg-primary font-bold">
                01
              </div>
              <span className="font-bold 2xl:text-[1.3vw]">{t("order")}</span>
            </div>
            <div className="mt-4 mb-4 info-text">
              {"1. " + t("user_guide_1")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <img
                  src="/layout/images/userGuide1.png"
                  className="w-[240px] h-[264px] 4xl:w-1/2 4xl:h-full"
                />
              </div>
            </div>
            <div className="mt-4 mb-4 info-text">
              {"2. " + t("user_guide_2")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <img
                  src="/layout/images/userGuide2.png"
                  className="w-[240px] h-[264px] 4xl:w-1/2 4xl:h-full"
                />
              </div>
            </div>
            <div className="mt-4 mb-4 info-text">
              {"3. " + t("user_guide_3")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <img
                  src="/layout/images/userGuide3.png"
                  className="w-[240px] h-[264px] 4xl:w-1/2 4xl:h-full"
                />
              </div>
            </div>
            <div className="mt-4 mb-4 info-text">
              {"4. " + t("user_guide_4")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <img
                  src="/layout/images/userGuide4.png"
                  className="w-[240px] h-[264px] 4xl:w-1/2 4xl:h-full"
                />
              </div>
            </div>
            <div className="mt-4 mb-4 info-text">
              {"5. " + t("user_guide_5")}
              <br />
              <div className="flex justify-center text-center w-full mt-3">
                <img
                  src="/layout/images/userGuide5.png"
                  className="w-[240px] h-[264px] 4xl:w-1/2 4xl:h-full"
                />
                {/* Development */}
                {/* <ImageComponent
                  imageProps={{
                    src: "/layout/images/userGuide5.png",
                    width: "240",
                    height: "264",
                    alt: "Logo",
                  }}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default UserGuidePage;
