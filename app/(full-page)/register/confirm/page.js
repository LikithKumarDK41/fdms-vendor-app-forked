"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { Button, ImageComponent } from "@/components";

const LoginPage = () => {
  const { t } = useTranslation("translation");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <>
      <div
        className={
          "flex flex-1 align-items-start justify-content-center overflow-auto h-screen"
        }
      >
        <div className=" flex flex-column h-full align-items-center justify-content-center">
          <div className="auth_view">
            <div className="w-full card  py-2 px-2">
              <div className="py-4 px-4">
                <div className="flex justify-content-center w-100 mb-5 auth-header">
                  <ImageComponent
                    imageProps={{
                      src: "/layout/handshake.png",
                      width: "80",
                      height: "80",
                    }}
                  />
                </div>
                <div className="flex justify-content-center w-100 mb-2 auth-header font-bold text-2xl">
                  {t("provisional_register")}
                </div>
                <div className="text-center mb-4">
                  {t("sent_url_via_mail")}
                  <br />
                  {t("after_accessing_url_email")}
                  <br />
                  {t("complete_register_24hrs")}
                </div>
                <div className="flex flex-col justify-content-center text-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
