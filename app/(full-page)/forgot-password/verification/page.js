"use client";

import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";

import { Button } from "@/components";
import { changeLanguage } from "@/helper";

const ForgotPwdVerificationPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const validationSchema = Yup.object().shape({
    otp: Yup.array()
      .of(
        Yup.string()
          .length(1, t("otp_digits_only"))
          .matches(/^\d$/, t("otp_digits_only"))
      )
      .test("otp-filled", t("otp_required"), (value) =>
        value.every((digit) => !!digit)
      ),
  });

  const handleChange = (e, index, setFieldValue) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setFieldValue(`otp[${index}]`, value);

      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp.splice(index, 1);
      newOtp.push("");
      setOtp(newOtp);
      setFieldValue(`otp`, newOtp);

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ otp: ["", "", "", ""] }}
        onSubmit={(values) => {
          const otp = values.otp.join("");
          console.log({ otp });
          router.push("/reset-password");
        }}
      >
        {({ values, handleBlur, handleSubmit, setFieldValue, isValid }) => (
          <div>
            <div className="min-h-[580px] flex flex-1 flex-column align-items-start justify-content-center overflow-auto h-screen w-full sm:flex-row sm:align-items-center">
              <div className="flex flex-column h-full w-full align-items-start justify-content-start lg:justify-content-center md:justify-content-center sm:justify-content-center sm:w-auto">
                <div className="auth_view">
                  <div className="w-full card py-2 px-2" style={{ height: "100%" }}>
                    <div className="py-4 px-4">
                      <form onSubmit={handleSubmit}>
                        <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
                          <div className="flex absolute right-0 translateIcon">
                            <i
                              className="pi pi-language text-2xl cursor-pointer"
                              onClick={() =>
                                i18n.language === "en"
                                  ? changeLanguage("jp")
                                  : changeLanguage("en")
                              }
                            ></i>
                          </div>
                          <div className="flex justify-center text-center w-full page-header">
                            {t("authentication_code")}
                          </div>
                        </div>
                        <div className="text-center mb-4 info-text">
                          {t("please_enter_4_digit_code_to_reset_pwd")}
                        </div>
                        <div className="flex justify-content-center mb-4">
                          <div className="field custom_inputText flex justify-content-center">
                            {values.otp.map((digit, index) => (
                              <InputText
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                maxLength="1"
                                value={digit}
                                name={`otp[${index}]`}
                                inputMode="numeric"
                                onChange={(e) => handleChange(e, index, setFieldValue)}
                                onBlur={handleBlur}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  marginRight: "10px",
                                  textAlign: "center",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-content-center mt-5 mb-5">
                          <Button
                            buttonProps={{
                              type: "submit",
                              disabled: !isValid,
                              text: t("continue_to_settings"),
                              buttonClass: "update-button w-full",
                            }}
                            parentClassName={"update-button w-full"}
                          />
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
                              buttonClass: "w-full",
                            }}
                            parentClassName={"w-full"}
                          />
                        </div>
                        <div className="flex justify-content-center mt-3">
                          <Button
                            buttonProps={{
                              type: "button",
                              text: t("resend_verification_code"),
                              buttonClass: "register-button w-full",
                            }}
                            parentClassName={"register-button w-full"}
                          />
                        </div>
                        <div className="mt-2 info-text">
                          {t("not_received_mail_check_spam_trash")}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default ForgotPwdVerificationPage;
