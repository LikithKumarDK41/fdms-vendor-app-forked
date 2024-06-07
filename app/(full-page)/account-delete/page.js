"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

import { Button } from "@/components";
import { changeLanguage } from "@/helper";

const AccountDeletePage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();

  return (
    <>
      <div>
        <div className="min-h-[250px] flex flex-1 flex-column align-items-start justify-content-center overflow-auto h-screen w-full sm:flex-row sm:align-items-center">
          <div className="flex flex-column h-full w-full align-items-start justify-content-start lg:justify-content-center md:justify-content-center sm:justify-content-center sm:w-auto">
            <div className="auth_view">
              <div className="w-full card py-2 px-2" style={{ height: "100%" }}>
                <div className="py-4 px-4">
                  <form>
                    <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
                      <i
                        className="pi pi-angle-left text-2xl cursor-pointer"
                        onClick={() => router.push("/account")}
                      ></i>
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
                        {t("delete_account")}
                      </div>
                    </div>
                    <div className="text-center mb-4 info-text">
                      {t("delete_acc_will_also_delete_all_your_data")}
                      <br />
                      {t("are_you_sure_to_delete_acc")}
                    </div>
                    <div>
                      <div className="flex justify-content-center mt-3 mb-5 gap-1">
                        <Button
                          buttonProps={{
                            type: "button",
                            text: t("cancel"),
                            onClick: () => router.push("/account"),
                            buttonClass: "back-button w-full",
                          }}
                          parentClassName={"back-button w-full"}
                        />
                        <Button
                          buttonProps={{
                            type: "submit",
                            text: t("delete"),
                            buttonClass: "update-button w-full",
                          }}
                          parentClassName={"update-button w-full"}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDeletePage;
