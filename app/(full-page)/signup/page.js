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
  Input,
  StepsCard,
  Steps,
  ImageComponent,
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
      icon: <img src="/layout/images/step2.png" style={!activeIndex ? {opacity:"0.5"}:""}/>,
      template: (item) => itemRenderer(item, 1),
    },
    {
      icon: <img src="/layout/images/step3.png" />,
      template: (item) => itemRenderer(item, 2),
    },
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
              }) => (
                <div className="" style={{ height: "100%" }}>
                  <div className="py-4 px-4">
                    <form onSubmit={handleSubmit}>
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

                      <div className="flex w-full align-items-center gap-2 mt-4">
                        <div className="w-6">
                          <Input
                            inputProps={{
                              inputParentClassName: `${
                                errors.furiganaFirstName &&
                                touched.furiganaFirstName &&
                                "p-invalid pb-1"
                              }`,
                              labelProps: {
                                text: t("phonetic_name"),
                                inputLabelClassName: "block",
                                labelMainClassName: "modal-label-field-space",
                              },
                              inputClassName: "w-full",
                              requiredButton: "true",
                              hasError:
                                errors.furiganaFirstName &&
                                touched.furiganaFirstName &&
                                errors.furiganaFirstName,
                              name: "firstName",
                              value: values && values.furiganaFirstName,
                              onChange: handleChange,
                              onBlur: handleBlur,
                            }}
                          />
                        </div>
                        <div
                          className={`w-6 ${
                            errors.furiganaFirstName && !errors.furiganaLastName
                              ? "mb-1"
                              : "mb-0"
                          }`}
                          style={{ marginTop: "33px" }}
                        >
                          <Input
                            inputProps={{
                              inputParentClassName: `${
                                errors.furiganaLastName &&
                                touched.furiganaLastName &&
                                "p-invalid pb-1"
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
                              name: "secondName",
                              value: values && values.furiganaLastName,
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
                              errors.furiganaFirstName &&
                              touched.furiganaFirstName &&
                              errors.furiganaFirstName
                            }
                          />
                        </div>
                        <div className="w-6">
                          <ValidationError
                            errorBlock={
                              errors.furiganaLastName &&
                              touched.furiganaLastName &&
                              errors.furiganaLastName
                            }
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.phoneNumber &&
                              touched.phoneNumber &&
                              "p-invalid pb-1"
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
                        <ValidationError
                          errorBlock={
                            errors.phoneNumber &&
                            touched.phoneNumber &&
                            t(errors.phoneNumber)
                          }
                        />
                      </div>

                      <div className="mt-4">
                        <label>{t("address")}</label>
                        <div className="w-full flex">
                          <div className="w-[65%]">
                            <Input
                              inputProps={{
                                inputParentClassName: `${
                                  errors.postalCode &&
                                  touched.postalCode &&
                                  "p-invalid pb-1"
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
                            <ValidationError
                              errorBlock={
                                errors.postalCode &&
                                touched.postalCode &&
                                t(errors.postalCode)
                              }
                            />
                          </div>
                          <div className="w-[30%] gap-x-8">
                            <Button
                              buttonProps={{
                                label: t("submit"),
                                className:
                                  "w-full pt-[0.5rem] pb-[0.5rem] custom-button",
                                type: "submit",
                                onclick: () => {
                                  console.log("fetch address");
                                  //   setActiveIndex(activeIndex + 1);
                                },
                              }}
                            ></Button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.addressPrefecture &&
                              touched.addressPrefecture &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("address_prefecture"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
                            hasError:
                              errors.addressPrefecture &&
                              touched.addressPrefecture &&
                              errors.addressPrefecture,
                            name: "addressPrefecture",
                            value: values.addressPrefecture,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <ValidationError
                          errorBlock={
                            errors.addressPrefecture &&
                            touched.addressPrefecture &&
                            t(errors.addressPrefecture)
                          }
                        />
                      </div>

                      <div className="field">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.addressCityTown &&
                              touched.addressCityTown &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("address_city_town"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
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
                        <ValidationError
                          errorBlock={
                            errors.addressCityTown &&
                            touched.addressCityTown &&
                            t(errors.addressCityTown)
                          }
                        />
                      </div>

                      <div className="field">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.addressStreet &&
                              touched.addressStreet &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("address_street"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
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
                        <ValidationError
                          errorBlock={
                            errors.addressStreet &&
                            touched.addressStreet &&
                            t(errors.addressStreet)
                          }
                        />
                      </div>

                      <div className="field">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.companyName &&
                              touched.companyName &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("company_name"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
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
                        <ValidationError
                          errorBlock={
                            errors.companyName &&
                            touched.companyName &&
                            t(errors.companyName)
                          }
                        />
                      </div>

                      <div className="field">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.industry &&
                              touched.industry &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("industry"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
                            hasError:
                              errors.industry &&
                              touched.industry &&
                              errors.industry,
                            name: "industry",
                            value: values.industry,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <ValidationError
                          errorBlock={
                            errors.industry &&
                            touched.industry &&
                            t(errors.industry)
                          }
                        />
                      </div>

                      <div className="field">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.companyPostalCode &&
                              touched.companyPostalCode &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("company_postal_code"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
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
                        <ValidationError
                          errorBlock={
                            errors.companyPostalCode &&
                            touched.companyPostalCode &&
                            t(errors.companyPostalCode)
                          }
                        />
                      </div>

                      <div className="field">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.companyAddressPrefecture &&
                              touched.companyAddressPrefecture &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("company_address_prefecture"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
                            hasError:
                              errors.companyAddressPrefecture &&
                              touched.companyAddressPrefecture &&
                              errors.companyAddressPrefecture,
                            name: "companyAddressPrefecture",
                            value: values.companyAddressPrefecture,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <ValidationError
                          errorBlock={
                            errors.companyAddressPrefecture &&
                            touched.companyAddressPrefecture &&
                            t(errors.companyAddressPrefecture)
                          }
                        />
                      </div>

                      <div className="field">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.companyAddressCityTown &&
                              touched.companyAddressCityTown &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("company_address_city_town"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
                            hasError:
                              errors.companyAddressCityTown &&
                              touched.companyAddressCityTown &&
                              errors.companyAddressCityTown,
                            name: "companyAddressCityTown",
                            value: values.companyAddressCityTown,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <ValidationError
                          errorBlock={
                            errors.companyAddressCityTown &&
                            touched.companyAddressCityTown &&
                            t(errors.companyAddressCityTown)
                          }
                        />
                      </div>

                      <div className="field">
                        <Input
                          inputProps={{
                            inputParentClassName: `${
                              errors.companyAddressStreet &&
                              touched.companyAddressStreet &&
                              "p-invalid pb-1"
                            }`,
                            labelProps: {
                              text: t("company_address_street"),
                              inputLabelClassName: "block",
                              labelMainClassName: "modal-label-field-space",
                            },
                            inputClassName: "w-full",
                            requiredButton: "true",
                            hasError:
                              errors.companyAddressStreet &&
                              touched.companyAddressStreet &&
                              errors.companyAddressStreet,
                            name: "companyAddressStreet",
                            value: values.companyAddressStreet,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <ValidationError
                          errorBlock={
                            errors.companyAddressStreet &&
                            touched.companyAddressStreet &&
                            t(errors.companyAddressStreet)
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
                            t(errors.password) &&
                            touched.password &&
                            t(errors.password)
                          }
                        />
                      </div>

                      <div className="flex align-items-center">
                        {values.password && values.confirmPassword ? (
                          complexityValidation(values.password) &&
                          complexityValidation(values.confirmPassword) ? (
                            <i className="pi pi-verified text-green-500 text-sm" />
                          ) : (
                            <i className="pi pi-times-circle text-red-500 text-sm" />
                          )
                        ) : (
                          <i className="pi pi-times-circle text-red-500 text-sm" />
                        )}
                        <span className="ml-2 info-text">
                          {t("contain_one_upper_lower_number")}
                        </span>
                      </div>

                      <div className="field custom_inputText">
                        <Password
                          passwordProps={{
                            passwordParentClassName: `w-full password-form-field ${
                              errors.confirmPassword &&
                              touched.confirmPassword &&
                              "p-invalid"
                            }`,
                            labelProps: {
                              text: t("confirm_password"),
                              passwordLabelSpanClassName: "p-error",
                              passwordLabelClassName: "block",
                            },
                            name: "confirmPassword",
                            hasError:
                              errors.confirmPassword &&
                              touched.confirmPassword &&
                              errors.confirmPassword,
                            value: values.confirmPassword,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            passwordClass: "w-full",
                          }}
                        />
                        <ValidationError
                          errorBlock={
                            t(errors.confirmPassword) &&
                            touched.confirmPassword &&
                            t(errors.confirmPassword)
                          }
                        />
                      </div>

                      <div className="flex align-items-center">
                        {values.password && values.confirmPassword ? (
                          lengthValidation(values.password) &&
                          lengthValidation(values.confirmPassword) ? (
                            <i className="pi pi-verified text-green-500 text-sm" />
                          ) : (
                            <i className="pi pi-times-circle text-red-500 text-sm" />
                          )
                        ) : (
                          <i className="pi pi-times-circle text-red-500 text-sm" />
                        )}
                        <span className="ml-2 info-text">
                          {t("password_atLeast_8_characters")}
                        </span>
                      </div>

                      <div className="flex align-items-center">
                        {values.password && values.confirmPassword ? (
                          complexityValidation(values.password) &&
                          complexityValidation(values.confirmPassword) ? (
                            <i className="pi pi-verified text-green-500 text-sm" />
                          ) : (
                            <i className="pi pi-times-circle text-red-500 text-sm" />
                          )
                        ) : (
                          <i className="pi pi-times-circle text-red-500 text-sm" />
                        )}
                        <span className="ml-2 info-text">
                          {t("contain_one_upper_lower_number")}
                        </span>
                      </div>

                      <Button
                        buttonProps={{
                          label: t("submit"),
                          className: "w-full mt-4",
                          type: "submit",
                        }}
                      />
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
