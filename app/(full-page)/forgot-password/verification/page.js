"use client";

import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useTranslation } from "next-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { InputNumber } from "primereact/inputnumber";

import { Button } from "@/components";
import { changeLanguage } from "@/helper";

const useValidationSchema = (t) => {
  return Yup.object().shape({
    otp: Yup.array()
      .of(
        Yup.string()
          .length(1, "otp_digits_only")
          .matches(/^\d$/, "otp_digits_only")
      )
      .test("otp-filled", "otp_required", (value) =>
        value.every((digit) => !!digit)
      ),
  });
};

const FormikWithRef = forwardRef((props, ref) => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
  const validationSchema = useValidationSchema(t);
  const formikRef = useRef();

  useImperativeHandle(ref, () => ({
    validateForm: formikRef.current?.validateForm,
    submitForm: formikRef.current?.submitForm,
  }));

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.validateForm();
    }
  }, [i18n.language]);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ otp: ["", "", "", ""] }}
      onSubmit={(values) => {
        const otp = values.otp.join(""); // Combine array into a single string
        console.log({ otp });
        router.push("/reset-password");
      }}
      innerRef={formikRef}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isValid }) => (
        <div>
          {/* <div className="flex justify-content-end pr-2 top-nav-bottom-view">
            <LanguageSwitcher/>
          </div> */}
          <div className="flex flex-1 flex-column align-items-start justify-content-center overflow-auto h-screen w-full sm:flex-row sm:align-items-center">
            <div className="flex flex-column h-full w-full align-items-start justify-content-start lg:justify-content-center md:justify-content-center sm:justify-content-center sm:w-auto">
              <div className="auth_view">
                <div
                  className="w-full card py-2 px-2"
                  style={{ height: "100%" }}
                >
                  <div className="py-4 px-4">
                    <form onSubmit={handleSubmit}>
                      <div className="flex w-full mb-3 auth-header font-bold text-2xl relative">
                        <div className="flex absolute right-0">
                          <i
                            className="pi pi-language text-2xl cursor-pointer"
                            onClick={() =>
                              i18n.language === "en"
                                ? changeLanguage("jp")
                                : changeLanguage("en")
                            }
                          ></i>
                        </div>
                        <div className="flex justify-center text-center w-full">
                          {t("authentication_code")}
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        {t("please_enter_4_digit_code_to_reset_pwd")}
                      </div>
                      <div className="flex justify-content-center mb-4">
                        <div className="field custom_inputText flex justify-content-center">
                          {values.otp.map((digit, index) => (
                            <InputNumber
                              key={index}
                              name={`otp[${index}]`}
                              maxLength="1"
                              min={0}
                              max={9}
                              value={digit}
                              onValueChange={(e) => {
                                const newValues = [...values.otp];
                                newValues[index] = e.value;
                                handleChange({
                                  target: {
                                    name: `otp[${index}]`,
                                    value: e.value,
                                  },
                                });
                                // Check if all four digits are filled
                                const isFilled = newValues.every(
                                  (digit) => digit !== ""
                                );
                                if (isFilled) {
                                  handleSubmit(); // Trigger form submission when all digits are filled
                                }
                              }}
                              onChange={(e) => {
                                const newValues = [...values.otp];
                                newValues[index] = e.value;
                                handleChange({
                                  target: {
                                    name: `otp[${index}]`,
                                    value: e.value,
                                  },
                                });
                              }}
                              onBlur={handleBlur}
                              className="flex justify-content-center"
                              inputStyle={{
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
                      <div className="flex justify-content-center font-bold mt-5">
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
                      <div className="mt-2 text-sm">
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
  );
});

FormikWithRef.displayName = "FormikWithRef";

const ForgotPwdVerificationPage = () => {
  const formikRef = useRef();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.validateForm();
    }
  }, [i18n.language]);

  return (
    <>
      <FormikWithRef ref={formikRef} />
    </>
  );
};

export default ForgotPwdVerificationPage;
