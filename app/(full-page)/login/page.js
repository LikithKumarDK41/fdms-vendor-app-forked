"use client";

import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Button,
  ImageComponent,
  InputGroup,
  Password,
  ValidationError,
} from "@/components";

const LoginPage = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("translation");

  const isEmail = (value) => {
    // Check if the value includes '@' and matches the email pattern
    return (
      !value.includes("@") ||
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
    );
  };
  const schema = Yup.object().shape({
    username: Yup.string()
      .required(t("user_id_required"))
      .max(200, t("user_id_max"))
      .test("is-email", t("user_id_email"), isEmail),
    password: Yup.string()
      .required(t("password_required"))
      .min(8, t("password_atLeast_8_characters"))
      .max(15, t("password_max_15_characters")),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, resetForm) => {
          console.log(values);
          resetForm();
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
          <div
            className={
              "flex align-items-start justify-content-center overflow-hidden"
            }
          >
            <div className="flex flex-column align-items-center justify-content-center">
              <div className="w-full  py-2 px-2">
                <div className="auth_view py-4 px-4">
                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-content-center w-100 mb-5 auth-header">
                      <ImageComponent
                        imageProps={{
                          src: "/layout/handshake.png",
                          width: "120",
                          height: "48",
                        }}
                      />
                    </div>
                    <div>
                      <div className="field custom_inputText">
                        <InputGroup
                          inpuGroupProps={{
                            inputGroupParentClassName: `w-full ${
                              errors.username && touched.username && "p-invalid"
                            }`,
                            inputGroupClassName: "w-full",
                            name: "username",
                            hasError:
                              errors.username &&
                              touched.username &&
                              errors.username,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            labelProps: {
                              text: t("userId"),
                              inputGroupLabelClassName: "mb-2",
                              inputGroupLabelSpanClassName: "p-error",
                            },
                          }}
                        />
                        <ValidationError
                          errorBlock={
                            errors.username &&
                            touched.username &&
                            errors.username
                          }
                        />
                      </div>
                      <div className="field custom_inputText">
                        <Password
                          passwordProps={{
                            passwordParentClassName: `w-full password-form-field ${
                              errors.password && touched.password && "p-invalid"
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
                      <div className="w-full flex justify-content-end">
                        <Button
                          buttonProps={{
                            type: "button",
                            text: t("forgot_password"),
                            link: "true",
                            buttonClass: "p-0 text-blue-300",
                            custom: "h-4",
                          }}
                        />
                      </div>
                      <div className="flex justify-content-center mt-3 mb-5">
                        <Button
                          buttonProps={{
                            type: "submit",
                            text: t("login"),
                            buttonClass: "update-button w-full",
                          }}
                          parentClassName={"update-button w-full"}
                        />
                      </div>
                      <hr />
                      <div className="flex justify-content-center font-bold mt-5">
                        {t("first_time_users")}
                      </div>
                      <div className="flex justify-content-center mt-1">
                        <Button
                          buttonProps={{
                            type: "submit",
                            text: t("new_member_registration"),
                            buttonClass: "register-button w-full",
                          }}
                          parentClassName={"register-button w-full"}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
