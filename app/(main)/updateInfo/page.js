"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "next/navigation";

import {
  ValidationError,
  NormalLabel,
  InputDropdown,
  Button,
  Input,
} from "@/components";
import { changeLanguage } from "@/helper";
import { LeftSideBar, RightSideBar } from "@/template";

export default function UpdateInfo() {
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
        <Formik
          validationSchema={schema}
          initialValues={{
            firstName: "山田",
            lastName: "太郎",
            furiganaLastName: "ヤマダ",
            furiganaFirstName: "タロウ",
            phoneNumber: "0311112222",
            postalCode: "1700013",
            addressPrefecture: "東京都",
            addressCityTown: "東京都豊島区東池袋2丁目",
            addressStreet: "1－3MKビル3階",

            companyName: "株式会社ビーメッセンジャー",
            industry: "広告・マーケティング",
            companyPostalCode: "1234567",
            companyAddressPrefecture: "東京都",
            companyAddressCityTown: "豊島区東池袋2丁目",
            companyAddressStreet: "1－3MKビル3階",
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
                    <div className="ml-2">
                      <IoIosArrowBack
                        style={{ fontSize: "24px", cursor: "pointer" }}
                        onClick={() => router.push("./update")}
                      />
                    </div>

                    <div className="flex justify-center text-center w-full page-header mr-4">
                      {t("edit_account_information")}
                    </div>
                  </div>

                  {/* Name Fields */}
                  <span className="flex items-center mr-4">
                    <NormalLabel labelClass={"block"} text={t("name")} />
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
                            errors.lastName && touched.lastName
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
                            errors.lastName &&
                            touched.lastName &&
                            errors.lastName,
                          name: "lastName",
                          value: values.lastName,
                          onChange: handleChange,
                          onBlur: handleBlur,
                        }}
                      />
                      <div className="min-h-[1.5rem]">
                        <ValidationError
                          errorBlock={
                            errors.lastName &&
                            touched.lastName &&
                            errors.lastName
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
                            errors.furiganaLastName && touched.furiganaLastName
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
                      <NormalLabel labelClass={"block"} text={t("address")} />
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
                              "w-full px-4 py-2 sm:px-6 sm:py-3 custom-button",
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
                              setFieldValue("addressPrefecture", e.value || ""),
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
                              errors.addressCityTown && touched.addressCityTown
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

                  {/* Password Fields */}

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
                          errors.industry &&
                          touched.industry &&
                          errors.industry,
                        name: "industry",
                        value: values.industry,
                        onChange: handleChange,
                        onBlur: handleBlur,
                      }}
                    />
                    <div className="min-h-[1.5rem]">
                      <ValidationError
                        errorBlock={
                          errors.industry &&
                          touched.industry &&
                          t(errors.industry)
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
                    <div className="flex w-full align-items-center gap-2 mt-1">
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
                              errors.companyAddressCityTown &&
                              touched.companyAddressCityTown
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
                              errors.companyAddressCityTown &&
                              touched.companyAddressCityTown &&
                              errors.companyAddressCityTown,
                            name: "companyAddressCityTown",
                            value: values.companyAddressCityTown,
                            onChange: handleChange,
                            onBlur: handleBlur,
                          }}
                        />
                        <div className="min-h-[1.5rem]">
                          <ValidationError
                            errorBlock={
                              errors.companyAddressCityTown &&
                              touched.companyAddressCityTown &&
                              t(errors.companyAddressCityTown)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-[-19px]">
                      <Input
                        inputProps={{
                          inputParentClassName: `${
                            errors.companyAddressStreet &&
                            touched.companyAddressStreet
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
                            errors.companyAddressStreet &&
                            touched.companyAddressStreet &&
                            errors.companyAddressStreet,
                          name: "companyAddressStreet",
                          value: values.companyAddressStreet,
                          onChange: handleChange,
                          onBlur: handleBlur,
                        }}
                      />
                      <div className="min-h-[1.5rem]">
                        <ValidationError
                          errorBlock={
                            errors.companyAddressStreet &&
                            touched.companyAddressStreet &&
                            t(errors.companyAddressStreet)
                          }
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      buttonProps={{
                        label: t("save_edits"),
                        className: "w-full mt-4",
                        type: "submit",
                        onClick: () => router.push("./updateAddress"), // Remove the colon after "onClick"
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
      <RightSideBar />
    </div>
  );
}
