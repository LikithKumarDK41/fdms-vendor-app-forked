"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

import { Button, ImageComponent } from "@/components";
import { changeLanguage } from "@/helper";

const RegisterConfirmPage = () => {
  const { t, i18n } = useTranslation("translation");
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <>
      <div>
        <div className="min-h-[540px] flex flex-1 flex-column align-items-start justify-content-center overflow-auto h-screen w-full sm:flex-row sm:align-items-center">
          <div className="flex flex-column h-full w-full align-items-start justify-content-start lg:justify-content-center md:justify-content-center sm:justify-content-center sm:w-auto">
            <div className="auth_view contentWidth">
              <div className="w-full card py-2 px-2" style={{ height: "100%" }}>
                <div className="py-4 px-4">
                  <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
                    <div className="flex absolute right-0 translateIcon">
                      <i
                        className="pi pi-language cursor-pointer"
                        onClick={() =>
                          i18n.language == "en"
                            ? changeLanguage("jp")
                            : changeLanguage("en")
                        }
                      ></i>
                    </div>
                    <div className="flex justify-center text-center w-full">
                      <img
                        src="/layout/images/mail-check.png"
                        className="w-[80px] h-[80px] 4xl:w-1/5 4xl:h-full"
                      />
                    </div>
                  </div>
                  {username ? (
                    <>
                      <div className="flex justify-content-center text-center w-100 mb-2 page-header">
                        {t("provisional_register")}
                      </div>
                      <div className="text-center info-text">
                        {t("sent_url_via_mail")}
                        <br />
                        {t("after_accessing_url_email")}
                        <br />
                        {t("complete_register_24hrs")}
                      </div>
                      <div className="flex flex-col justify-content-center text-center mb-4 mt-4">
                        <div className="page-header2">
                          {t("destination_email")}
                        </div>
                        <div className="text16">{username}</div>
                      </div>
                      <hr />
                      <div className="flex justify-content-center font-bold mt-5 text16">
                        {t("not_received_mail_click_here")}
                      </div>
                      <div className="flex justify-content-center mt-3">
                        <Button
                          buttonProps={{
                            type: "button",
                            text: t("correct_your_mail_address"),
                            onClick: () => router.push("/signup"),
                            buttonClass: "w-full",
                          }}
                          parentClassName={"w-full"}
                        />
                      </div>
                      <div className="flex justify-content-center mt-3 6xl:mb-[30px]">
                        <Button
                          buttonProps={{
                            type: "button",
                            text: t("resend_temp_reg_mail"),
                            buttonClass: "w-full",
                          }}
                          parentClassName={"register-button w-full"}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-content-center text16">
                        Please click on the below button to register
                      </div>
                      <div className="flex justify-content-center mt-3">
                        <Button
                          buttonProps={{
                            type: "button",
                            text: t("new_member_registration"),
                            buttonClass: "w-full",
                            onClick: () => router.push("/register"),
                          }}
                          parentClassName={"w-full"}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterConfirmPage;