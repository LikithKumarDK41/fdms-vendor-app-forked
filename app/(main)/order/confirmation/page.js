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
        <RightSideBar />
      </div>
    </>
  );
};

export default ConfirmOrder;
