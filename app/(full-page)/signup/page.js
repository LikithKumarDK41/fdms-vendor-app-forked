"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";
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

const CustomerInformationForm = () => {
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
        return (
          <>
            <Formik
              validationSchema={schema}
              initialValues={{
                lastName: "",
                firstName: "",
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
                setActiveIndex(activeIndex + 1);
                router.push("/success");
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
                          {t("customer_information_input")}
                        </div>
                      </div>

                      {/* Name Fields */}
                      <span className="flex items-center mr-4">
                        <NormalLabel labelClass={"block"} text={t("name")} />
                        <Btn
                          buttonProps={{
                            text: t("must"),
                            custom: "custom-button-required",
                            buttonClass: "cursor-auto ml-2",
                          }}
                          parentClassName="required-button "
                        />
                      </span>
                      <div className="flex w-full align-items-center gap-2 mt-2">
                        <div className="w-6">
                          <Input
                            inputProps={{
                              inputParentClassName: `${
                                errors.firstName && touched.firstName
                                  ? "p-invalid pb-1 "
                                  : ""
                              }`,
                              labelProps: {
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
                              value: values.firstName,
                              onChange: handleChange,
                              onBlur: handleBlur,
                            }}
                          />
                          <div className="min-h-[1.5rem]">
                            <ValidationError
                              errorBlock={
                                errors.firstName &&
                                touched.firstName &&
                                errors.firstName
                              }
                            />
                          </div>
                        </div>
                        <div className="w-6">
                          <Input
                            inputProps={{
                              inputParentClassName: `${
                                errors.secondName && touched.secondName
                                  ? "p-invalid pb-1"
                                  : ""
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
                              value: values.secondName,
                              onChange: handleChange,
                              onBlur: handleBlur,
                            }}
                          />
                          <div className="min-h-[1.5rem]">
                            <ValidationError
                              errorBlock={
                                errors.secondName &&
                                touched.secondName &&
                                errors.secondName
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phonetic Name Fields */}
                      <span className="flex items-center">
                        <NormalLabel
                          labelClass={"block"}
                          text={t("phonetic_name")}
                        />
                        <Btn
                          buttonProps={{
                            text: t("must"),
                            custom: "custom-button-required",
                            buttonClass: "cursor-auto ml-2",
                          }}
                          parentClassName="required-button "
                        />
                      </span>
                      <div className="flex w-full align-items-center gap-2 mt-2">
                        <div className="w-6">
                          <Input
                            inputProps={{
                              inputParentClassName: `${
                                errors.furiganaFirstName &&
                                touched.furiganaFirstName
                                  ? "p-invalid pb-1"
                                  : ""
                              }`,
                              labelProps: {
                                text: "",
                                inputLabelClassName: "block",
                                labelMainClassName: "modal-label-field-space",
                              },
                              inputClassName: "w-full",
                              requiredButton: "true",
                              hasError:
                                errors.furiganaFirstName &&
                                touched.furiganaFirstName &&
                                errors.furiganaFirstName,
                              name: "furiganaFirstName",
                              value: values.furiganaFirstName,
                              onChange: handleChange,
                              onBlur: handleBlur,
                            }}
                          />
                          <div className="min-h-[1.5rem]">
                            <ValidationError
                              errorBlock={
                                errors.furiganaFirstName &&
                                touched.furiganaFirstName &&
                                errors.furiganaFirstName
                              }
                            />
                          </div>
                        </div>
                        <div className="w-6">
                          <Input
                            inputProps={{
                              inputParentClassName: `${
                                errors.furiganaLastName &&
                                touched.furiganaLastName
                                  ? "p-invalid pb-1"
                                  : ""
                              }`,
                              labelProps: {
                                text: "",
                                inputLabelClassName: "block",
                                labelMainClassName: "modal-label-field-space",
                              },
                              inputClassName: "w-full",
                              hasError:
                                errors.furiganaLastName &&
                                touched.furiganaLastName &&
                                errors.furiganaLastName,
                              name: "furiganaLastName",
                              value: values.furiganaLastName,
                              onChange: handleChange,
                              onBlur: handleBlur,
                            }}
                          />
                          <div className="min-h-[1.5rem]">
                            <ValidationError
                              errorBlock={
                                errors.furiganaLastName &&
                                touched.furiganaLastName &&
                                errors.furiganaLastName
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone Number Field */}
                      <div className="">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.phoneNumber && touched.phoneNumber
                                ? "p-invalid pb-1"
                                : ""
                            }`,
                            labelProps: {
                              text: t("phone_number"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
                            hasError:
                              errors.phoneNumber &&
                              touched.phoneNumber &&
                              errors.phoneNumber,
                            name: "phoneNumber",
                            value: values.phoneNumber,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <div className="min-h-[1.5rem]">
                          <ValidationError
                            errorBlock={
                              errors.phoneNumber &&
                              touched.phoneNumber &&
                              t(errors.phoneNumber)
                            }
                          />
                        </div>
                      </div>

                      {/* Address Fields */}
                      <div className="">
                        <span className="flex items-center">
                          <NormalLabel
                            labelClass={"block"}
                            text={t("address")}
                          />
                          <Btn
                            buttonProps={{
                              text: t("must"),
                              custom: "custom-button-required",
                              buttonClass: "cursor-auto ml-2",
                            }}
                            parentClassName="required-button "
                          />
                        </span>

                        <div className="flex w-full items-center gap-2 mt-2">
                          <div className="flex items-center w-[169px] mb-[7px]">
                            <div className="font-bold text-[14px] mr-2">〒</div>

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
                                  labelMainClassName: "modal-label-field-space",
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
                                  errors.cityTown && touched.cityTown
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
                                  errors.cityTown &&
                                  touched.cityTown &&
                                  errors.cityTown,
                                name: "cityTown",
                                value: values.cityTown,
                                onChange: handleChange,
                                onBlur: handleBlur,
                              }}
                            />
                            <div className="min-h-[1.5rem]">
                              <ValidationError
                                errorBlock={
                                  errors.cityTown &&
                                  touched.cityTown &&
                                  t(errors.cityTown)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <Input
                            inputProps={{
                              inputParentClassName: `${
                                errors.building && touched.building
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
                                errors.building &&
                                touched.building &&
                                errors.building,
                              name: "building",
                              value: values.building,
                              onChange: handleChange,
                              onBlur: handleBlur,
                            }}
                          />
                          <div className="min-h-[1.5rem]">
                            <ValidationError
                              errorBlock={
                                errors.building &&
                                touched.building &&
                                t(errors.building)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Password Fields */}
                      <div className="">
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
                            requiredButton: "true",
                            //Development
                            // disabled: values.username=="" || errors.username,
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
                            t(errors.password) &&
                            touched.password &&
                            t(errors.password)
                          }
                        />
                        <span className="flex ">
                          <IoMdCheckmark className="" />
                          {t("contain_one_upper_lower_number")}
                        </span>
                        <span className="flex">
                          <IoMdCheckmark />
                          {t("char_bt_8_to_25")}
                        </span>
                        <div className="min-h-[1.5rem]">
                          <ValidationError
                            errorBlock={
                              errors.password &&
                              touched.password &&
                              t(errors.password)
                            }
                          />
                        </div>
                      </div>
                      <div className="">
                        <Password
                          passwordProps={{
                            passwordParentClassName: `w-full password-form-field ${
                              errors.password && touched.password && "p-invalid"
                            }`,
                            labelProps: {
                              text: t("new_password_confirm"),
                              passwordLabelSpanClassName: "p-error",
                              passwordLabelClassName: "block",
                            },
                            name: "password",
                            requiredButton: "true",
                            //Development
                            // disabled: values.username=="" || errors.username,
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
                        <div className="min-h-[1.5rem]">
                          <ValidationError
                            errorBlock={
                              errors.confirmPassword &&
                              touched.confirmPassword &&
                              t(errors.confirmPassword)
                            }
                          />
                        </div>
                      </div>

                      {/* Company Name and Type Fields */}
                      <div className="">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.companyName && touched.companyName
                                ? "p-invalid pb-1"
                                : ""
                            }`,
                            labelProps: {
                              text: t("company_name"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",

                            hasError:
                              errors.companyName &&
                              touched.companyName &&
                              errors.companyName,
                            name: "companyName",
                            value: values.companyName,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <div className="min-h-[1.5rem]">
                          <ValidationError
                            errorBlock={
                              errors.companyName &&
                              touched.companyName &&
                              t(errors.companyName)
                            }
                          />
                        </div>
                      </div>
                      <div className="">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.companyType && touched.companyType
                                ? "p-invalid pb-1"
                                : ""
                            }`,
                            labelProps: {
                              text: t("industry"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",

                            hasError:
                              errors.companyType &&
                              touched.companyType &&
                              errors.companyType,
                            name: "companyType",
                            value: values.companyType,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <div className="min-h-[1.5rem]">
                          <ValidationError
                            errorBlock={
                              errors.companyType &&
                              touched.companyType &&
                              t(errors.companyType)
                            }
                          />
                        </div>
                      </div>

                      {/* Company Address Fields */}
                      <div className="">
                        <span className="flex items-center">
                          <NormalLabel
                            labelClass={"block"}
                            text={t("company_address")}
                          />
                        </span>

                        <div className="flex w-full items-center gap-2 mt-2">
                          <div className="flex items-center w-[169px] mb-[7px]">
                            <div className="font-bold text-[14px] mr-2">〒</div>

                            <Input
                              inputProps={{
                                inputParentClassName: `${
                                  errors.companyPostalCode &&
                                  touched.companyPostalCode
                                    ? "p-invalid pb-1"
                                    : ""
                                }`,
                                labelProps: {
                                  text: "",
                                  inputLabelClassName: "block",
                                  labelMainClassName: "modal-label-field-space",
                                },
                                inputClassName: "w-full",

                                hasError:
                                  errors.companyPostalCode &&
                                  touched.companyPostalCode &&
                                  errors.companyPostalCode,
                                name: "companyPostalCode",
                                value: values.companyPostalCode,
                                onChange: handleChange,
                                onBlur: handleBlur,
                              }}
                            />
                          </div>
                          <div className="min-h-[1.5rem] flex items-center">
                            <ValidationError
                              errorBlock={
                                errors.companyPostalCode &&
                                touched.companyPostalCode &&
                                t(errors.companyPostalCode)
                              }
                            />
                          </div>
                          <div className="w-full">
                            <Button
                              buttonProps={{
                                label: t("address_search_by_postalCode"),
                                className:
                                  "w-full pt-[0.5rem] pb-[0.5rem] custom-button ",
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

                                name: "companyAddressPrefecture",
                                value: values.companyAddressPrefecture,
                                options: addressOptions,
                                optionLabel: "name",
                                hasError:
                                  errors.companyAddressPrefecture &&
                                  touched.companyAddressPrefecture &&
                                  errors.companyAddressPrefecture,
                                onChange: (e) =>
                                  setFieldValue(
                                    "companyAddressPrefecture",
                                    e.value || ""
                                  ),
                                onBlur: handleBlur,
                                emptyMessage: "data_not_found",
                              }}
                            />
                            <div className="min-h-[1.5rem]">
                              <ValidationError
                                errorBlock={
                                  errors.companyAddressPrefecture &&
                                  touched.companyAddressPrefecture &&
                                  errors.companyAddressPrefecture
                                }
                              />
                            </div>
                          </div>
                          <div className="w-8">
                            <Input
                              inputProps={{
                                inputParentClassName: `${
                                  errors.companyCityTown &&
                                  touched.companyCityTown
                                    ? "p-invalid pb-1"
                                    : ""
                                }`,
                                labelProps: {
                                  text: "",
                                  inputLabelClassName: "block",
                                  labelMainClassName: "modal-label-field-space",
                                },
                                inputClassName: "w-full",

                                hasError:
                                  errors.companyCityTown &&
                                  touched.companyCityTown &&
                                  errors.companyCityTown,
                                name: "companyCityTown",
                                value: values.companyCityTown,
                                onChange: handleChange,
                                onBlur: handleBlur,
                              }}
                            />
                            <div className="min-h-[1.5rem]">
                              <ValidationError
                                errorBlock={
                                  errors.companyCityTown &&
                                  touched.companyCityTown &&
                                  t(errors.companyCityTown)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <Input
                            inputProps={{
                              inputParentClassName: `${
                                errors.companyBuilding &&
                                touched.companyBuilding
                                  ? "p-invalid pb-1"
                                  : ""
                              }`,
                              labelProps: {
                                text: "",
                                inputLabelClassName: "block",
                                labelMainClassName: "modal-label-field-space",
                              },
                              inputClassName: "w-full",

                              hasError:
                                errors.companyBuilding &&
                                touched.companyBuilding &&
                                errors.companyBuilding,
                              name: "companyBuilding",
                              value: values.companyBuilding,
                              onChange: handleChange,
                              onBlur: handleBlur,
                            }}
                          />
                          <div className="min-h-[1.5rem]">
                            <ValidationError
                              errorBlock={
                                errors.companyBuilding &&
                                touched.companyBuilding &&
                                t(errors.companyBuilding)
                              }
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                          buttonProps={{
                            label: t("to_the_confirmation_Screen"),
                            className: "w-full mt-4",
                            type: "submit",
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </Formik>
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
                onclick: () => {
                  setActiveIndex(activeIndex + 1);
                },
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
          <div className="mt-[50px]   py-2 px-2">
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

export default CustomerInformationForm;