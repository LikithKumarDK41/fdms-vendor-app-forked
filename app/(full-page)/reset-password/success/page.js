"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

import { Button, ImageComponent } from "@/components";
import { changeLanguage } from "@/helper";

const ResetPasswordSuccessPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();

  return (
    <>
      <div>
        <div className="min-h-[350px] flex flex-1 flex-column align-items-start justify-content-center overflow-auto h-screen w-full sm:flex-row sm:align-items-center">
          <div className="flex flex-column h-full w-full align-items-start justify-content-start lg:justify-content-center md:justify-content-center sm:justify-content-center sm:w-auto">
            <div className="auth_view">
              <div className="w-full card py-2 px-2" style={{ height: "100%" }}>
                <div className="py-4 px-4">
                  <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
                    <div className="flex absolute right-0 translateIcon">
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
                    {t("your_new_pwd_has_been_set")}
                  </div>
                  <div className="text-center info-text">
                    {t("please_login_using_reg_email_newPwd")}
                  </div>
                  <div>
                    <div className="flex justify-content-center mt-3 mb-5">
                      <Button
                        buttonProps={{
                          type: "submit",
                          text: t("to_the_login_screen"),
                          buttonClass: "update-button w-full",
                          onClick: () => router.push("/login"),
                        }}
                        parentClassName={"update-button w-full"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordSuccessPage;
