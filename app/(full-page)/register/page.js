"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

import { Button, InputGroup, ValidationError } from "@/components";

const RegisterPage = () => {
  const router = useRouter();
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
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ username: "" }}
        onSubmit={(values) => {
          console.log(values);
          localStorage.setItem("username", values.username);
          router.push("/register/confirm");
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
              "flex flex-1 align-items-start justify-content-center overflow-auto h-screen"
            }
          >
            <div className=" flex flex-column h-full align-items-center justify-content-center">
              <div className="auth_view">
                <div className="w-full card  py-2 px-2">
                  <div className="py-4 px-4">
                    <form onSubmit={handleSubmit}>
                      <div className="flex w-full mb-5 auth-header font-bold text-2xl relative">
                        <div className="flex absolute left-0">
                          <i
                            className="pi pi-angle-left text-2xl cursor-pointer"
                            onClick={() => router.push("/login")}
                          ></i>
                        </div>
                        <div className="flex justify-center w-full">
                          {t("new_member_registration")}
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        {t("provisionally_registered_as_member")}
                        <br />
                        {t("enter_mail_address_you_want_to_Submit")}
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
                        <div className="flex justify-content-center mt-3 mb-5">
                          <Button
                            buttonProps={{
                              type: "submit",
                              text: t("send"),
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
        )}
      </Formik>
    </>
  );
};

export default RegisterPage;
