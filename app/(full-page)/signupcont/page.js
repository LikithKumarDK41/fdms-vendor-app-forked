"use client";

import React from "react";
import Map from "../map/page";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";
import { StatusButton } from "@/components";
import { NormalCheckBox } from "@/components";
import {
  Button,
  Password,
  ValidationError,
  Input,
  StepsCard,
  Steps,
  ImageComponent,
  NormalLabel,
  Button as Btn,
  InputDropdown,
} from "@/components";
import { changeLanguage } from "@/helper";

const complexityValidation = (value) => {
  const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  return complexityRegex.test(value);
};

const lengthValidation = (value) => {
  return value.length >= 8 && value.length <= 25;
};

const SignupCont = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
    console.log("Checkbox changed");
  };
  const checkboxProps = {
    checkBoxProps: {
      id: "myCheckbox",
      name: "myCheckbox",
      value: "Checkbox Value",
      onChange: handleCheckboxChange,
      checked: isChecked,
      disabled: false,
      style: {},
      linkLabel: "会社所在地と同じ場所に指定する",
    },
    parentClass: "custom-checkbox",
  };
  const [submittedValues, setSubmittedValues] = React.useState(null);
  const { t, i18n } = useTranslation("translation");
  const router = useRouter();

  const schema = Yup.object().shape({
    lastName: Yup.string().required(t("required")),
    firstName: Yup.string().required(t("required")),
    furiganaLastName: Yup.string().required(t("required")),
    furiganaFirstName: Yup.string().required(t("required")),
    phoneNumber: Yup.string().required(t("required")),
    postalCode: Yup.string().required(t("required")),
    addressPrefecture: Yup.string().required(t("required")),
    addressCityTown: Yup.string().required(t("required")),
    addressStreet: Yup.string().required(t("required")),
    password: Yup.string()
      .required(t("required"))
      .min(8, t("password_atLeast_8_characters"))
      .max(25, t("password_max_25_characters"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        t("contain_one_upper_lower_number")
      ),
    confirmPassword: Yup.string()
      .required(t("required"))
      .oneOf([Yup.ref("password"), null], t("confirm_password_notMatch"))
      .min(8, t("password_atLeast_8_characters"))
      .max(25, t("password_max_25_characters")),
    companyName: Yup.string().required(t("required")),
    industry: Yup.string().required(t("required")),
    companyPostalCode: Yup.string().required(t("required")),
    companyAddressPrefecture: Yup.string().required(t("required")),
    companyAddressCityTown: Yup.string().required(t("required")),
    companyAddressStreet: Yup.string().required(t("required")),
  });
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemRenderer = (item, itemIndex) => {
    const isActiveItem = activeIndex === itemIndex;
    const isClickable = itemIndex <= activeIndex;
    const backgroundColor = isActiveItem
      ? "var(--primary-color)"
      : "var(--surface-b)";
    const textColor = isActiveItem
      ? "var(--surface-b)"
      : "var(--text-color-secondary)";
    const cursor = isClickable ? "pointer" : "not-allowed";
    return (
      <span
        className="inline-flex align-items-center justify-content-center border-circle border-primary border-1 h-3rem w-3rem z-1"
        style={{
          backgroundColor,
          color: textColor,
          marginTop: "-25px",
          cursor,
        }}
        onClick={() => isClickable && setActiveIndex(itemIndex)}
      >
        {item.icon}
      </span>
    );
  };
  const items = [
    {
      icon: <img src="/layout/images/step1.png" />,
      template: (item) => itemRenderer(item, 0),
    },
    {
      icon: <img src="/layout/images/step2.png" />,
      template: (item) => itemRenderer(item, 1),
    },
    {
      icon: <img src="/layout/images/step3.png" />,
      template: (item) => itemRenderer(item, 2),
    },
  ];

  const addressOptions = [
    { value: "", name: "--" },
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" },
  ];

  const renderStepContent = () => {
    switch (activeIndex) {
      case 0:
        if (submittedValues) {
          console.log("Submitted values:", submittedValues);
          return (
            <div className="" style={{ height: "100%" }}>
              <div className="py-4 px-4 w-full">
                <div className="flex justify-end mr-5">
                  <i
                    className="pi pi-language text-2xl cursor-pointer"
                    onClick={() =>
                      i18n.language === "en"
                        ? changeLanguage("jp")
                        : changeLanguage("en")
                    }
                  ></i>
                </div>
                <h2 className="font-bold text-[24px] text-center">
                  {t("confirmation")}
                </h2>
                <div className="mx-[20px] mt-[20px] w-full">
                  <div className="mb-[12px]">
                    <div className="mb-[12px] ">
                      <strong>{t("name")}</strong>
                    </div>
                    <div>
                      {submittedValues.firstName}
                      <span className="ml-2">{submittedValues.lastName}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="mb-[12px]">
                    <div className="mb-[12px]">
                      <strong>{t("phonetic_name")}</strong>
                    </div>
                    <div>
                      {submittedValues.furiganaFirstName}
                      <span className="ml-2">
                        {submittedValues.furiganaLastName}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="mb-[12px]">
                    <div className="mb-[12px]">
                      <strong>{t("phone_number")}</strong>
                    </div>
                    <div>{submittedValues.phoneNumber}</div>
                  </div>
                  <hr />
                  <div className="mb-[12px]">
                    <div className="mb-[12px]">
                      <strong>{t("address")}</strong>
                    </div>
                    <div>
                      〒{submittedValues.postalCode}
                      {submittedValues.addressPrefecture}
                      <div className="mb-[12px]">
                        {submittedValues.addressCityTown}
                        {submittedValues.addressStreet}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="mb-[12px]">
                    <div className="mb-[12px]">
                      <strong>{t("password")}</strong>
                    </div>
                    <div>{submittedValues.password}</div>
                  </div>
                  <hr />
                  <div className="mb-[12px]">
                    <div className="mb-[12px]">
                      <strong>{t("company_name")}</strong>
                    </div>
                    <div>{submittedValues.companyName}</div>
                  </div>
                  <hr />
                  <div className="mb-[12px]">
                    <div className="mb-[12px]">
                      <strong>{t("company_address")}</strong>
                    </div>
                    <div>
                      〒{submittedValues.companyPostalCode}
                      {submittedValues.companyAddressPrefecture}
                      <div className="mb-[12px]">
                        {submittedValues.companyAddressCityTown}
                        {submittedValues.companyAddressStreet}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="mb-[12px]">
                    <div className="mb-[12px]">
                      <strong>{t("industry")}</strong>
                    </div>
                    <div>{submittedValues.industry}</div>
                  </div>
                  <hr />
                  <div className="flex ">
                    <div className="mr-4">
                      <StatusButton
                        statusButtonProps={{
                          text: i18n.language == "en" ? "Return" : "戻る",
                          status: "orangeStatus",
                          className: "w-[180px] ", // Added text-sm for smaller font size
                        }}
                      />
                    </div>
                    <div className="">
                      <Button
                        buttonProps={{
                          text:
                            i18n.language == "en"
                              ? "Picking"
                              : "ピッキング先登録",

                          forward: true,
                          iconPos: "right",
                          className: "w-full",
                          onclick: () => {
                            console.log("Active index 2");
                            setActiveIndex(activeIndex + 1);
                          },
                          // Added text-sm for smaller font size
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          );
        }
        return (
          <>
            <Formik
              validationSchema={schema}
              initialValues={{
                firstName: "",
                lastName: "",
                furiganaLastName: "",
                furiganaFirstName: "",
                phoneNumber: "",
                postalCode: "",
                addressPrefecture: "",
                addressCityTown: "",
                addressStreet: "",
                password: "",
                confirmPassword: "",
                companyName: "",
                industry: "",
                companyPostalCode: "",
                companyAddressPrefecture: "",
                companyAddressCityTown: "",
                companyAddressStreet: "",
              }}
              onSubmit={(values) => {
                setSubmittedValues(values);
                // setActiveIndex(activeIndex + 1);
                // router.push("/success");
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
                <div className="" style={{ height: "100%" }}>
                  <div className="py-4 px-4">
                    <form onSubmit={handleSubmit}>
                      {/* Header */}
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
                        <div className="flex justify-center text-center w-full page-header">
                          ピッキング先登録
                        </div>
                      </div>
                      <div>住所1</div>
                      <div>
                        <NormalCheckBox {...checkboxProps} />
                      </div>
                      <div>
                        <div className="">
                          <span className="flex items-center">
                            <NormalLabel labelClass={"block"} />
                          </span>

                          <div className="flex w-full items-center gap-2 mt-2">
                            <div className="flex items-center w-[169px] mb-[7px]">
                              <div className="font-bold text-[14px] mr-2">
                                〒
                              </div>

                              <Input
                                inputProps={{
                                  inputParentClassName: `${
                                    errors.postalCode && touched.postalCode
                                      ? "p-invalid pb-1"
                                      : ""
                                  }`,
                                  labelProps: {
                                    text: "",
                                    inputLabelClassName: "block",
                                    labelMainClassName:
                                      "modal-label-field-space",
                                  },
                                  inputClassName: "w-full",
                                  requiredButton: "false",
                                  hasError:
                                    errors.postalCode &&
                                    touched.postalCode &&
                                    errors.postalCode,
                                  name: "postalCode",
                                  value: values.postalCode,
                                  onChange: handleChange,
                                  onBlur: handleBlur,
                                }}
                              />
                            </div>
                            <div className="min-h-[1.5rem] flex items-center">
                              <ValidationError
                                errorBlock={
                                  errors.postalCode &&
                                  touched.postalCode &&
                                  t(errors.postalCode)
                                }
                              />
                            </div>
                            <div className="w-full">
                              <Button
                                buttonProps={{
                                  label: t("address_search_by_postalCode"),
                                  className:
                                    "w-full pt-[0.5rem] pb-[0.5rem] custom-button",
                                  type: "button",
                                  onClick: () => {
                                    console.log("fetch address");
                                  },
                                }}
                              />
                            </div>
                          </div>

                          <div className="flex w-full align-items-center gap-2 mt-2">
                            <div className="w-4">
                              <InputDropdown
                                inputDropdownProps={{
                                  inputDropdownParentClassName: "w-full",
                                  labelProps: { text: "" },
                                  inputDropdownClassName: "w-full",
                                  customPanelDropdownClassName: "w-10rem",
                                  requiredButton: true,
                                  name: "addressPrefecture",
                                  value: values.addressPrefecture,
                                  options: addressOptions,
                                  optionLabel: "name",
                                  hasError:
                                    errors.addressPrefecture &&
                                    touched.addressPrefecture &&
                                    errors.addressPrefecture,
                                  onChange: (e) =>
                                    setFieldValue(
                                      "addressPrefecture",
                                      e.value || ""
                                    ),
                                  onBlur: handleBlur,
                                  emptyMessage: "data_not_found",
                                }}
                              />
                              <div className="min-h-[1.5rem]">
                                <ValidationError
                                  errorBlock={
                                    errors.addressPrefecture &&
                                    touched.addressPrefecture &&
                                    errors.addressPrefecture
                                  }
                                />
                              </div>
                            </div>
                            <div className="w-8">
                              <Input
                                inputProps={{
                                  inputParentClassName: `${
                                    errors.addressCityTown &&
                                    touched.addressCityTown
                                      ? "p-invalid pb-1"
                                      : ""
                                  }`,
                                  labelProps: {
                                    text: "",
                                    inputLabelClassName: "block",
                                    labelMainClassName:
                                      "modal-label-field-space",
                                  },
                                  inputClassName: "w-full",
                                  requiredButton: "false",
                                  hasError:
                                    errors.addressCityTown &&
                                    touched.addressCityTown &&
                                    errors.addressCityTown,
                                  name: "addressCityTown",
                                  value: values.addressCityTown,
                                  onChange: handleChange,
                                  onBlur: handleBlur,
                                }}
                              />
                              <div className="min-h-[1.5rem]">
                                <ValidationError
                                  errorBlock={
                                    errors.addressCityTown &&
                                    touched.addressCityTown &&
                                    t(errors.addressCityTown)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-2">
                            <Input
                              inputProps={{
                                inputParentClassName: `${
                                  errors.addressStreet && touched.addressStreet
                                    ? "p-invalid pb-1"
                                    : ""
                                }`,
                                labelProps: {
                                  text: "",
                                  inputLabelClassName: "block",
                                  labelMainClassName: "modal-label-field-space",
                                },
                                inputClassName: "w-full",
                                requiredButton: "false",
                                hasError:
                                  errors.addressStreet &&
                                  touched.addressStreet &&
                                  errors.addressStreet,
                                name: "addressStreet",
                                value: values.addressStreet,
                                onChange: handleChange,
                                onBlur: handleBlur,
                              }}
                            />
                            <div className="min-h-[1.5rem]">
                              <ValidationError
                                errorBlock={
                                  errors.addressStreet &&
                                  touched.addressStreet &&
                                  t(errors.addressStreet)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </Formik>
            <div>マップで確認</div>
            <div className="">
              <Map />
            </div>
            <div>詳細情報</div>
          </>
        );

      case 1:
        return (
          <>
            <div className="flex justify-content-center">
              Complete this step you will be in last step
            </div>
            <StepsCard
              stepsCardProps={{
                topHeaderProps: {
                  text: "10月10日13:10〜14:20",
                  className: "m-0",
                },
                content: (
                  <div className="flex justify-content-center">
                    <p>Step 2</p>
                  </div>
                ),
                stepCardStyle: { background: "#FDEEEA" },
                stepCardClassName: "w-full lg:w-5 md:w-6 sm:w-full",
                imageProps: {
                  src: "/layout/images/handshake.png",
                  width: "100",
                  height: "80",
                },
              }}
              parentClassName="flex justify-content-center"
            />
            <Button
              buttonProps={{
                label: t("submit"),
                className: "w-full mt-4",
                type: "submit",
                // onclick: () => {
                //   setActiveIndex(activeIndex + 1);
                // },
              }}
            />
          </>
        );
      case 2:
        return (
          <>
            <div className="flex justify-content-center">Last step</div>
            <StepsCard
              stepsCardProps={{
                topHeaderProps: {
                  text: "10月10日13:20〜14:40",
                  className: "m-0",
                },
                content: (
                  <>
                    <div className="flex justify-content-center align-items-center mt-2 ">
                      <i className="pi pi-verified text-green-500 text-3xl"></i>
                    </div>
                    <div className="flex justify-content-center align-items-center pr-1">
                      <p>Completed</p>
                    </div>
                  </>
                ),
                stepCardStyle: { background: "#FDEEEA" },
                stepCardClassName: "w-full lg:w-5 md:w-6 sm:w-full",
                imageProps: {
                  src: "/layout/images/handshake.png",
                  width: "100",
                  height: "80",
                },
              }}
              parentClassName="flex justify-content-center"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center auth_view card">
          <div className="mt-[50px]   py-2 px-2 w-full">
            <Steps
              stepsProps={{
                items: items,
                activeIndex: activeIndex,
                readOnly: false,
              }}
            />

            <div className="mt-3 ">{renderStepContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupCont;
