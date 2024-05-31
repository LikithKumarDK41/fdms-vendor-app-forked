"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Button,
  LanguageSwitcher,
  Password,
  ValidationError,
} from "@/components";

const ResetPassword = () => {
  const { t } = useTranslation("translation");

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
        "new_password_not_matched"
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
            <div className="flex  justify-content-end pr-2">
              <LanguageSwitcher />
            </div>
            <div
              className={
                "flex flex-1 align-items-start justify-content-center overflow-auto h-screen"
              }
            >
              <div className=" flex flex-column h-full align-items-center justify-content-center">
                <div className="auth_view">
                  <div className="w-full card  py-2 px-2">
                    <div className="py-4 px-4">
                      <form onSubmit={handleSubmit}>
                        <div className="flex justify-content-center text-center w-100 mb-2 auth-header font-bold text-2xl mb-4">
                          {t("sent_new_password")}
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
