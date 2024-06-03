"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { Button, ImageComponent, LanguageSwitcher } from "@/components";
import { useRouter } from "next/navigation";
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
        <div className="flex flex-1 flex-column align-items-start justify-content-center overflow-auto h-screen w-full sm:flex-row sm:align-items-center">
          <div className="flex flex-column h-full w-full align-items-start justify-content-start lg:justify-content-center md:justify-content-center sm:justify-content-center sm:w-auto">
            <div className="auth_view">
              <div className="w-full card py-2 px-2" style={{ height: "100%" }}>
                <div className="py-4 px-4">
                  <div className="flex w-full mb-5 auth-header font-bold text-2xl relative">
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
                          src: "/layout/handshake.png",
                          width: "80",
                          height: "80",
                          alt: "Logo",
                        }}
                      />
                    </div>
                  </div>
                  {/* <div className="flex justify-content-center w-100 mb-5 auth-header">
                    <ImageComponent
                      imageProps={{
                        src: "/layout/handshake.png",
                        width: "80",
                        height: "80",
                      }}
                    />
                  </div> */}
                  {username ? (
                    <>
                      <div className="flex justify-content-center text-center w-100 mb-2 auth-header font-bold text-2xl">
                        {t("provisional_register")}
                      </div>
                      <div className="text-center">
                        {t("sent_url_via_mail")}
                        <br />
                        {t("after_accessing_url_email")}
                        <br />
                        {t("complete_register_24hrs")}
                      </div>
                      <div className="flex flex-col justify-content-center text-center mb-4 mt-4">
                        <div className="text-xl font-bold">
                          {t("destination_email")}
                        </div>
                        <div className="">{username}</div>
                      </div>
                      <hr />
                      <div className="flex justify-content-center font-bold mt-5">
                        {t("not_received_mail_click_here")}
                      </div>
                      <div className="flex justify-content-center mt-3">
                        <Button
                          buttonProps={{
                            type: "submit",
                            text: t("correct_your_mail_address"),
                            buttonClass: "w-full",
                          }}
                          parentClassName={"w-full"}
                        />
                      </div>
                      <div className="flex justify-content-center mt-3">
                        <Button
                          buttonProps={{
                            type: "submit",
                            text: t("resend_temp_reg_mail"),
                            buttonClass: "register-button w-full",
                          }}
                          parentClassName={"register-button w-full"}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-content-center">
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
