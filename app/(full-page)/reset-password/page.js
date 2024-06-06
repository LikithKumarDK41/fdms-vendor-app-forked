"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

import {
  Button,
  Password,
  ValidationError,
} from "@/components";
import { changeLanguage } from "@/helper";

const ResetPassword = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();

  const lengthValidation = (value) => value.length >= 8 && value.length <= 25;
  const complexityValidation = (value) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{8,}$/.test(
      value
    );

  const schema = Yup.object().shape({
    password: Yup.string()
      .required("new_password_required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{8,}$/,
        t("contain_one_upper_lower_number")
      )
      .min(8, "password_atLeast_8_characters")
      .max(25, "password_max_25_characters"),
    confirmPassword: Yup.string()
      .required("confirm_password_required")
      .oneOf([Yup.ref("password"), null], "confirm_password_notMatch")
      .min(8, "password_atLeast_8_characters")
      .max(25, "password_max_25_characters"),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ password: "", confirmPassword: "" }}
        onSubmit={(values) => {
          console.log(values);
          router.push("/reset-password/success");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
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
                                i18n.language == "en"
                                  ? changeLanguage("jp")
                                  : changeLanguage("en")
                              }
                            ></i>
                          </div>
                          <div className="flex justify-center text-center w-full">
                            {t("sent_new_password")}
                          </div>
                        </div>
                        <div>
                          <div className="field custom_inputText">
                            <Password
                              passwordProps={{
                                passwordParentClassName: `w-full password-form-field ${
                                  errors.password &&
                                  touched.password &&
                                  "p-invalid"
                                }`,
                                labelProps: {
                                  text: t("password"),
                                  passwordLabelSpanClassName: "p-error",
                                  passwordLabelClassName: "block",
                                },
                                name: "password",
                                hasError:
                                  errors.password &&
                                  touched.password &&
                                  errors.password,
                                value: values.password,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                passwordClass: "w-full",
                              }}
                            />
                            <ValidationError
                              errorBlock={
                                errors.password &&
                                touched.password &&
                                errors.password
                              }
                            />
                          </div>
                          <div className="flex align-items-center">
                            {values.password && values.confirmPassword ? (
                              complexityValidation(values.password) &&
                              complexityValidation(values.confirmPassword) ? (
                                <i className="pi pi-verified text-green-500" />
                              ) : (
                                <i className="pi pi-times-circle text-red-500" />
                              )
                            ) : (
                              <i className="pi pi-times-circle text-red-500" />
                            )}
                            <span className="ml-2">
                              {t("contain_one_upper_lower_number")}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <div>
                              {values.password && values.confirmPassword ? (
                                lengthValidation(values.password) &&
                                lengthValidation(values.confirmPassword) ? (
                                  <i className="pi pi-verified text-green-500" />
                                ) : (
                                  <i className="pi pi-times-circle text-red-500" />
                                )
                              ) : (
                                <i className="pi pi-times-circle text-red-500" />
                              )}
                              <span className="ml-2">
                                {t("char_bt_8_to_25")}
                              </span>
                            </div>
                          </div>
                          <div className="field custom_inputText mt-3">
                            <Password
                              passwordProps={{
                                passwordParentClassName: `w-full password-form-field ${
                                  errors.confirmPassword &&
                                  touched.confirmPassword &&
                                  "p-invalid"
                                }`,
                                labelProps: {
                                  text: t("new_password_confirm"),
                                  passwordLabelClassName: "block",
                                },
                                name: "confirmPassword",
                                value: values.confirmPassword,
                                disabled: !values.password,
                                disabled:
                                  !lengthValidation(values.password) ||
                                  !complexityValidation(values.password),
                                hasError:
                                  errors.confirmPassword &&
                                  touched.confirmPassword &&
                                  errors.confirmPassword,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                passwordClass: "w-full",
                              }}
                            />
                            <ValidationError
                              errorBlock={
                                errors.confirmPassword &&
                                touched.confirmPassword &&
                                errors.confirmPassword
                              }
                            />
                          </div>
                          <div className="flex justify-content-center mt-3 mb-5">
                            <Button
                              buttonProps={{
                                type: "submit",
                                text: t("sent_new_password"),
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
        )}
      </Formik>
    </>
  );
};

export default ResetPassword;
