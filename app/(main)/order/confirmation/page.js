"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { Button, ImageComponent } from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

const ConfirmOrder = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();

  return (
    <>
      <div className="dashboard-container">
        <LeftSideBar />
        <div className="content w-full pl-2 pr-2">
          <div>
            <div className="flex w-full mb-3 auth-header font-bold text-[18px] 2xl:text-[1.3vw]  relative">
              <div className="flex absolute right-0 translateIcon mt-2 ">
                <i
                  className="pi pi-language cursor-pointer"
                  onClick={() =>
                    i18n.language == "en"
                      ? changeLanguage("jp")
                      : changeLanguage("en")
                  }
                ></i>
              </div>
              <div className="flex flex-col items-center mt-8 ml-4 mr-4 w-full">
                <div className="text-center mb-4">
                  <span className="text-[#EA5532] mr-2 ">\</span>
                  ご注文を受け付けました
                  <span className="text-[#EA5532] ml-2">/</span>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <img
                    src="/layout/images/orderConfirm.png"
                    className="w-[150px] h-[150px] 4xl:w-[350px] 4xl:h-[450px]"
                  />
                </div>
                <div className="text-[14px] 2xl:text-[1vw] 2xl:m-[1.5vw]  font-weight-[light] flex flex-col justify-center ">
                  <p className="text-center p-0.5 m-0">
                    ※まだご注文は確定していません※
                  </p>
                  <p className="text-center p-0.5 m-0 ">
                    これから配布員とのマッチングを行い
                  </p>
                  <p className="text-center p-0.5 m-0">
                    成立しましたらご注文確定となり、決済が行われます。
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-content-center mt-0 2xl:mt-4  mb-5 w-full ">
                <Button
                  buttonProps={{
                    type: "submit",
                    text: t("back_to_top"),
                    buttonClass:
                      "update-button w-full townDesignationSubmitButton",
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

export default ConfirmOrder;
