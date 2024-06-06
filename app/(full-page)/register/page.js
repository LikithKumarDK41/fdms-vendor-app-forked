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
  InputGroup,
  ValidationError,
} from "@/components";
import { changeLanguage } from "@/helper";

const useValidationSchema = (t) => {
  const isEmail = (value) => {
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
      initialValues={{ username: "" }}
      onSubmit={(values) => {
        console.log(values);
        localStorage.setItem("username", values.username);
        router.push("/register/confirm");
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
                        <div className="flex absolute left-0">
                          <i
                            className="pi pi-angle-left text-2xl cursor-pointer"
                            onClick={() => router.push("/login")}
                          ></i>
                        </div>
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
                          {t("new_member_registration")}
                        </div>
                      </div>
                      <div className="text-center mb-4 info-text">
                        {t("provisionally_registered_as_member")}
                        <br />
                        {t("enter_mail_address_you_want_to_submit")}
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
        </div>
      )}
    </Formik>
  );
});

FormikWithRef.displayName = "FormikWithRef";

const RegisterPage = () => {
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

export default RegisterPage;
