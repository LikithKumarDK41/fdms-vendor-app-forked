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

import {
  Button,
  ImageComponent,
  InputGroup,
  Password,
  ValidationError,
} from "@/components";
import { changeLanguage } from "@/helper";

const useValidationSchema = (t) => {
  const isEmail = (value) => {
    // Check if the value matches the email pattern or is an empty string
    return (
      value === "" ||
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
    );
  };

  return Yup.object().shape({
    username: Yup.string()
      .required(t("user_id_required"))
      .max(200, t("user_id_max"))
      .test("is-email", t("user_id_email"), isEmail),
    password: Yup.string()
      .required(t("password_required"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{8,}$/,
        t("contain_one_upper_lower_number")
      )
      .min(8, t("password_atLeast_8_characters"))
      .max(25, t("password_max_25_characters")),
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
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      innerRef={formikRef}
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
          {/* <div className="flex justify-content-end pr-2 top-nav-bottom-view">
          <LanguageSwitcher />
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
                              src: "/layout/images/fdms-demo-logo.png",
                              width: "120",
                              text: i18n.language == "en" ? "Logo" : "ロゴ",
                              height: "48",
                              alt: "Logo",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="field custom_inputText">
                          <InputGroup
                            inputGroupProps={{
                              inputGroupParentClassName: `w-full ${
                                errors.username &&
                                touched.username &&
                                "p-invalid"
                              }`,
                              inputGroupClassName: "w-full",
                              name: "username",
                              hasError:
                                errors.username &&
                                touched.username &&
                                errors.username,
                              onChange: handleChange,
                              onBlur: handleBlur,
                              value: values.username,
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
                        <div className="w-full flex justify-content-end">
                          <Button
                            buttonProps={{
                              type: "button",
                              text: t("forgot_password"),
                              link: "true",
                              buttonClass: "p-0 text-blue-300 font-normal",
                              custom: "h-6",
                              onClick: () => router.push("/forgot-password"),
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
                              type: "button",
                              text: t("new_member_registration"),
                              buttonClass: "register-button w-full",
                              onClick: () => router.push("/register"),
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
          </div>
        </div>
      )}
    </Formik>
  );
});

FormikWithRef.displayName = "FormikWithRef";

const LoginPage = () => {
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

export default LoginPage;
