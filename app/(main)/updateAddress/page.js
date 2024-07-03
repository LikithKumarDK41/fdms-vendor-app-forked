"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

import {
  TextArea,
  NormalCheckBox,
  Button,
  Input,
  InputDropdown,
  ValidationError,
  NormalLabel,
} from "@/components";
import { changeLanguage } from "@/helper";
import Map from "@/app/(full-page)/map/page";
import { LeftSideBar, RightSideBar } from "@/template";

export default function UpdateAddress() {
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
      labelClass: "ml-3",
      checked: isChecked,
      disabled: false,
      style: [],
      linkLabel: "会社所在地と同じ場所に指定する",
    },
    parentClass: "custom-checkbox",
  };
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

  const addressOptions = [
    { value: "", name: "--" },
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" },
  ];

  return (
    <div className="dashboard-container">
      <LeftSideBar />
      <div className="content w-full pb-2 pl-1 pr-2">
        <>
          <>
            <>
              <Formik
                validationSchema={schema}
                initialValues={{
                  firstName: "",
                  lastName: "",
                  furiganaLastName: "",
                  furiganaFirstName: "",
                  phoneNumber: "",
                  postalCode: "1440052",
                  addressPrefecture: "",
                  addressCityTown: "大田区蒲田５丁目",
                  addressStreet: "50-2 SKYCOURT 蒲田ガーデン",
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
                    <div className="py-4 px-4 bg-[#F7F7F7]">
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
                          <div className="ml-2">
                            <IoIosArrowBack
                              style={{ fontSize: "24px", cursor: "pointer" }}
                              onClick={() => router.push("./updateInfo")}
                            />
                          </div>
                          <div className="flex justify-center text-center w-full page-header font-bold mr-4">
                            ピッキング先登録
                          </div>
                        </div>
                        <div className="">
                          <div className="font-bold text-[18px] mb-1">
                            住所1
                          </div>
                          <div className="mb-3">
                            <NormalCheckBox {...checkboxProps} />
                          </div>
                          <div>
                            <div className="mb-3">
                              <span className="flex items-center">
                                <NormalLabel labelClass={"block"} />
                              </span>
                              <div className="flex w-full items-center gap-2 mt-2 mb-1">
                                <div className="flex items-center w-[169px] mb-[7px]">
                                  <div className="font-bold text-[14px] mr-2">
                                    〒
                                  </div>
                                  <Input
                                    inputProps={{
                                      inputParentClassName: `${errors.postalCode && touched.postalCode
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
                              <div className="flex w-full align-items-center gap-2 mt-1">
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
                                      inputParentClassName: `${errors.addressCityTown &&
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
                              <div className="mt-[-19px]">
                                <Input
                                  inputProps={{
                                    inputParentClassName: `${errors.addressStreet &&
                                        touched.addressStreet
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
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
              <div className="py-4 px-4 bg-[#F7F7F7] mt-[-319px]">
                <div className=" font-bold  ">マップで確認</div>
                <div className=" mt-4 mb-4 ">
                  <Map />
                </div>
                {/* <div className="bg-[#F7F7F7]"></div> */}
                <div className="w-full mt-4 mb-4 ">
                  <TextArea
                    textAreaProps={{
                      className: "w-full mt-4 mb-4",
                      labelProps: {
                        text: "詳細情報",
                        id: "yourLabelId",
                      },
                    }}
                  />
                </div>
              </div>
              <div>
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
                    <div
                      className="bg-[#F7F7F7]  mb-[-70px] mt-2"
                      style={{ height: "" }}
                    >
                      <div className="py-4 px-4 ">
                        <form onSubmit={handleSubmit}>
                          {/* Header */}
                          <div className="">
                            <div className="font-bold text-[18px] mb-3 ">
                              住所2
                            </div>
                            <div className="mb-3">
                              <NormalCheckBox {...checkboxProps} />
                            </div>
                            <div>
                              <div className="mb-3">
                                <span className="flex items-center">
                                  <NormalLabel labelClass={"block"} />
                                </span>
                                <div className="flex w-full items-center gap-2 mt-2 ">
                                  <div className="flex items-center w-[169px] mb-[7px]">
                                    <div className="font-bold text-[14px] mr-2">
                                      〒
                                    </div>
                                    <Input
                                      inputProps={{
                                        inputParentClassName: `${errors.postalCode &&
                                            touched.postalCode
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
                                        label: t(
                                          "address_search_by_postalCode"
                                        ),
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
                                <div className="flex w-full align-items-center gap-2 mt-1">
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
                                        inputParentClassName: `${errors.addressCityTown &&
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
                                <div className="mt-[-19px]">
                                  <Input
                                    inputProps={{
                                      inputParentClassName: `${errors.addressStreet &&
                                          touched.addressStreet
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
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </Formik>
                <div className="py-4 px-4 bg-[#F7F7F7]">
                  <div className=" font-bold  ">マップで確認</div>
                  <div className="mt-4 mb-4 ">
                    <Map />
                  </div>
                  {/* <div className="bg-[#F7F7F7]"></div> */}
                  <div className="w-full ">
                    <TextArea
                      textAreaProps={{
                        className: "w-full mt-4 mb-4",
                        labelProps: {
                          text: "詳細情報",
                          id: "yourLabelId",
                        },
                      }}
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div className="flex  justify-center">
                <Button
                  buttonProps={{
                    text: "ピッキング先を追加",
                    className: "text-blue-500",
                    link: true,
                    icon: <GoPlus />,
                  }}
                />
              </div>
              <div className="flex   space-x-4">
                <div className="flex-1">
                  <Button
                    buttonProps={{
                      text: i18n.language == "en" ? "Save" : "編集を保存",

                      className:
                        "w-full text-center text-sm sm:text-[10px] md:text-sm lg:text-sm flex items-center justify-center", // Centered text with varying font sizes
                      onClick: () => {
                        router.push("/account");
                      },
                    }}
                  />
                </div>
              </div>
            </>
          </>
        </>
      </div>
      <RightSideBar />
    </div>
  );
}
