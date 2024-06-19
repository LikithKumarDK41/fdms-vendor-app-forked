"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card } from "primereact/card";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import {
  Button,
  ImageComponent,
  Input,
  InputDropdown,
  InputGroup,
  StepsCard,
  TextArea,
  ValidationError,
} from "@/components";
import { changeLanguage } from "@/helper";
import { setFormData } from "@/redux/form";

const InquiryPage = () => {
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();
  const dispatch = useDispatch();

  const sidebar = [
    {
      text: "ご注文履歴",
    },
    {
      text: "ご利用ガイド",
    },
    {
      text: "よくある質問",
    },
    {
      text: "お問い合わせ",
    },
    {
      text: "利用規約",
    },
  ];

  const isEmail = (value) => {
    // Check if the value matches the email pattern or is an empty string
    return (
      value === "" ||
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
    );
  };

  const inquiryOptions = [
    { value: "", name: "--" },
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" },
  ];

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("user_id_required")
      .max(200, "user_id_max")
      .test("is-email", "user_id_email", isEmail),
    firstName: Yup.string().required("Name required").max(200, "Name max 200"),
    secondName: Yup.string().nullable().max(20, "Max 20"),
    content: Yup.string().required("content required"),
    selectInquiry: Yup.string().required("please select"),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          username: "",
          firstName: "",
          secondName: "",
          content: "",
          selectInquiry: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(setFormData(values));
          router.push("/inquiry/confirmation");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <div className="dashboard-container">
            <div className="left-sidebar h-full">
              <Card className="sidebar-card relative flex flex-col flex-grow">
                <div className="left-sidebar-header">
                  <div className="logoContainer">
                    <img
                      src="/layout/images/logo.png"
                      alt="logo"
                      className="w-3 h-auto"
                    />
                  </div>
                  <hr className="horizontalLine" />
                  <div className="header-first">大田区限定</div>
                  <div className="header-second">
                    ポスティング(チラシ配布)サービス
                  </div>
                  <hr className="horizontalLine" />
                </div>
                <div className="mb-3 mt-3">
                  <Button
                    parentClassName="w-full shadow-1"
                    buttonProps={{
                      text: t("start_ordering"),
                      forward: true,
                      iconPos: "right",
                      buttonClass: "w-full userGuide-button h-auto",
                    }}
                  />
                </div>
                <div className="left-sidebar-content flex-grow">
                  {sidebar.map((v, i) => (
                    <div
                      key={i}
                      className={`sampleDiv ${
                        i === sidebar.length - 1 ? "last" : ""
                      }`}
                    >
                      <span className="text">{v.text}</span>
                      <AiOutlineRight className="icon" />
                    </div>
                  ))}
                </div>
                <div className="left-sidebar-footer absolute bottom-[20px] 2xl:bottom-[25px] left-0 w-full">
                  <p className="footer-header text-center">
                    ©︎2024 BE Messenger All Rights Reserved
                  </p>
                </div>
              </Card>
            </div>
            <div className="content w-full pl-2 pr-2">
              <div className="">
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
                      <ImageComponent
                        imageProps={{
                          src: "/layout/images/mail-outline.png",
                          width: "80",
                          height: "80",
                          alt: "Logo",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center text-center w-full page-header mb-3">
                    {t("inquiry")}
                  </div>
                  <div className="text-center mb-4 info-text">
                    {t("please_fill_required_form")}
                    <br />
                    {t("representative_will_respond_in_3_days")}
                    <br />
                    {t("if_in_hurry_contact_by_phone")}
                  </div>
                  <div>
                    <div className="flex w-full align-items-center gap-2">
                      <div className="w-6">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.firstName &&
                              touched.firstName &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("name"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
                            hasError:
                              errors.firstName &&
                              touched.firstName &&
                              errors.firstName,
                            name: "firstName",
                            value: values && values.firstName,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                      </div>
                      <div
                        className={`w-6 ${
                          errors.firstName && !errors.secondName
                            ? "mb-1"
                            : "mb-0"
                        }`}
                        style={{ marginTop: "33px" }}
                      >
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.secondName &&
                              touched.secondName &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: "",
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            hasError:
                              errors.secondName &&
                              touched.secondName &&
                              errors.secondName,
                            name: "secondName",
                            value: values && values.secondName,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full flex gap-1">
                      <div className="w-6">
                        <ValidationError
                          errorBlock={
                            errors.firstName &&
                            touched.firstName &&
                            errors.firstName
                          }
                        />
                      </div>
                      <div className="w-6">
                        <ValidationError
                          errorBlock={
                            errors.secondName &&
                            touched.secondName &&
                            errors.secondName
                          }
                        />
                      </div>
                    </div>
                    <div className="field custom_inputText mt-4">
                      <InputGroup
                        inputGroupProps={{
                          inputGroupParentClassName: `w-full ${
                            errors.username && touched.username && "p-invalid"
                          }`,
                          inputGroupClassName: "w-full",
                          name: "username",
                          requiredButton: "true",
                          hasError:
                            errors.username &&
                            touched.username &&
                            errors.username,
                          onChange: handleChange,
                          onBlur: handleBlur,
                          value: values.username,
                          labelProps: {
                            text: t("userId"),
                            inputGroupLabelSpanClassName: "p-error",
                          },
                        }}
                      />
                      <ValidationError
                        errorBlock={
                          t(errors.username) &&
                          touched.username &&
                          t(errors.username)
                        }
                      />
                    </div>
                    <div className="field custom_inputText mt-4">
                      <InputDropdown
                        inputDropdownProps={{
                          inputDropdownParentClassName: "w-full",
                          labelProps: {
                            text: t("inquiry_type"),
                          },
                          inputDropdownClassName: "w-full",
                          customPanelDropdownClassName: "w-10rem",
                          requiredButton: true,
                          name: "selectInquiry",
                          value: values.selectInquiry,
                          options: inquiryOptions,
                          optionLabel: "name",
                          hasError:
                            errors.selectInquiry &&
                            touched.selectInquiry &&
                            errors.selectInquiry,
                          onChange: (e) =>
                            setFieldValue("selectInquiry", e.value || ""),
                          onBlur: handleBlur,
                          emptyMessage: "data_not_found",
                        }}
                      />
                      <ValidationError
                        errorBlock={
                          errors.selectInquiry &&
                          touched.selectInquiry &&
                          errors.selectInquiry
                        }
                      />
                    </div>
                    <div className="field custom_inputText mt-4">
                      <TextArea
                        textAreaProps={{
                          textAreaParentClassName: `w-full ${
                            errors.content && touched.content && "p-invalid"
                          }`,
                          labelProps: {
                            text: t("content_of_inquiry"),
                            textAreaLabelClassName: "block",
                            labelMainClassName: "modal-label-field-space",
                          },
                          hasError:
                            errors.content && touched.content && errors.content,
                          textAreaClass: "w-full",
                          requiredButton: "true",
                          name: "content",
                          onChange: handleChange,
                          onBlur: handleBlur,
                          row: 10,
                          cols: 5,
                          value: values.content,
                        }}
                      />
                      <ValidationError
                        errorBlock={
                          errors.content && touched.content && errors.content
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="field custom_inputText"></div>
                    <div className="flex justify-content-center mt-3 mb-5">
                      <Button
                        buttonProps={{
                          type: "submit",
                          text: t("to_the_confirmation_Screen"),
                          buttonClass: "update-button w-full",
                        }}
                        parentClassName={"update-button w-full"}
                      />
                    </div>
                  </div>
                  <div>
                    <StepsCard
                      stepsCardProps={{
                        content: (
                          <div className="">
                            <div className="text-center info-text mb-3">
                              <p>{t("telephone_enquiry")}</p>
                            </div>
                            <div className="flex justify-content-center align-items-center gap-1 mb-3">
                              <div>
                                <i className="pi pi-phone text-primary"></i>
                              </div>
                              <div className="text-lg font-bold text-center">
                                03-6709-4552
                              </div>
                            </div>
                            <div className="text-center info-text">
                              {t("working_hour")}
                            </div>
                          </div>
                        ),
                        stepCardStyle: { background: "#FDEEEA" },
                        stepCardClassName: "w-full",
                      }}
                      parentClassName="w-full p-0"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="right-sidebar lg:flex md:flex sm:flex flex-col justify-content-end items-end">
              <div className="right-side-content">
                <div className="w-full">
                  <Button
                    parentClassName="w-full register-button"
                    buttonProps={{
                      text: "カート",
                      icon: (
                        <i className="text-[1.3vw]">
                          {" "}
                          <FiShoppingCart />
                        </i>
                      ),
                      iconPos: "top",
                      buttonClass: "w-full border-white border-2",
                      custom: "userGuide-button h-auto",
                    }}
                  />
                </div>
                <div className="w-full">
                  <Button
                    parentClassName="w-full"
                    buttonProps={{
                      text: "アカウント",
                      icon: (
                        <i className="text-[1.3vw]">
                          <FiUser />
                        </i>
                      ),
                      iconPos: "top",
                      custom: "userGuide-button h-auto",
                      buttonClass: "w-full border-white",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default InquiryPage;
