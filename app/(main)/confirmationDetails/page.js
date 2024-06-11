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
