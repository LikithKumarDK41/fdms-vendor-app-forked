"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { Button, LogoutConfirmationModal } from "@/components";
import { changeLanguage, hideOverFlow, showOverFlow } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

const AccountPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
  const [logoutOpen, setLogoutOpen] = useState(false);

  const infoData = [
    {
      icon: "pi pi-user",
      title: t("account_info"),
      link: "#",
    },
    {
      icon: "pi pi-map-marker",
      title: t("picking_info"),
      link: "#",
    },
    {
      icon: "pi pi-lock",
      title: t("password_reset"),
      link: "/forgot-password",
    },
    {
      icon: "pi pi-user-minus",
      title: t("delete_account"),
      link: "/account-delete",
    },
  ];

  return (
    <>
      <LogoutConfirmationModal
        open={logoutOpen}
        close={() => {
          setLogoutOpen(false);
          showOverFlow();
        }}
        handleLogout={() => router.push("/login")}
      />
      <div className="dashboard-container">
        <LeftSideBar />
        <div className="content w-full bg-gray-100 pl-2 pr-2">
          <div className="">
            <div>
              <div className="flex w-full auth-header font-bold text-2xl relative mt-[5px] mb-[5px] 2xl:mt-[10px] 2xl:mb-[10px]  3xl:mt-[15px] 3xl:mb-[15px]  4xl:mt-[20px] 4xl:mb-[20px]  5xl:mt-[25px] 5xl:mb-[25px]  6xl:mt-[47px] 6xl:mb-[47px] ">
                <div className="flex absolute right-0 ">
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
                  {t("account")}
                </div>
              </div>
              {infoData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-content-space-between border-noround bg-white border-bottom-2 6xl:pb-[10px]"
                  style={{ padding: "0.75rem" }}
                >
                  <div className="flex align-items-center gap-2">
                    <span className="accountIcon">
                      <i className={`${item.icon}`}></i>
                    </span>
                    <span className="text-[16px] 2xl:text-[1.3vw] font-bold 2xl:pl-[5px] 4xl:pl-[10px] 6xl:pl-[25px]">{item.title}</span>
                  </div>
                  <div className="flex-grow-1 text-right accountIcon">
                    <a
                      href={item.link}
                      className="text-gray-500 hover:text-primary"
                    >
                      <i className="pi pi-angle-right cursor-pointer"></i>
                    </a>
                  </div>
                </div>
              ))}
              <div>
                <div className="flex justify-content-center mt-6 mb-5">
                  <Button
                    buttonProps={{
                      type: "button",
                      link: true,
                      icon: <i className="pi pi-sign-out pr-1"></i>,
                      text: t("logout"),
                      buttonClass: "w-full logout-button",
                      onClick: () => {
                        setLogoutOpen(true);
                        hideOverFlow();
                      },
                    }}
                    parentClassName={"update-button"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default AccountPage;
