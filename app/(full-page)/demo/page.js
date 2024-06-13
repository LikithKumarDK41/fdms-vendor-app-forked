"use client";

import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Timeline } from 'primereact/timeline';


import {
  Button,
  ContentCardDynamic,
  CustomHeader,
  OTPInput,
  PanelList,
  QuestionPanel,
  SelectButton,
  StatusButton,
  Steps,
  StepsCard,
  LanguageSwitcher,
  LogoutConfirmationModal,
  MapModal,
  Input,
  GoogleMapComponent,
  SearchGoogleMap,
  SearchMapPage,
  PlaceSearch,
} from "@/components";
import { hideOverFlow, showOverFlow } from "@/helper";

const DemoPage = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("translation");

  const [activeIndex, setActiveIndex] = useState(0);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const options = ["Off", "On"];
  const [value, setValue] = useState(options[0]);

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
        <i className={`${item.icon} text-xl`} />
      </span>
    );
  };

  const items = [
    {
      icon: "pi pi-user",
      template: (item) => itemRenderer(item, 0),
    },
    {
      icon: "pi pi-calendar",
      template: (item) => itemRenderer(item, 1),
    },
    {
      icon: "pi pi-check",
      template: (item) => itemRenderer(item, 2),
    },
  ];

  const renderStepContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <>
            <div className="flex justify-content-center">
              Complete this step and go to next step
            </div>
            <StepsCard
              stepsCardProps={{
                topHeaderProps: {
                  text: "10月10日13:00〜14:00",
                  className: "m-0",
                },
                content: (
                  <div className="flex justify-content-center">
                    <p>Step 1</p>
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

  const panelsData = [
    {
      header: "領収書は発行できますか？",
      content: (
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ),
    },
    {
      header: "質問が入ります質問が入ります",
      content: <p className="m-0">Another content goes here.</p>,
    },
    // Add more panels as needed
  ];
  const panelsData1 = [
    {
      header: "H1",
      content: (
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ),
      headerClassName: "border-round-3xl",
    },
    {
      header: "H2",
      content: <p className="m-0">Another content goes here.</p>,
    },
    // Add more panels as needed
  ];

  const panelsData2 = [
    {
      header: "H1",
      content: (
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ),
      icon: (
        <span>
          <i className="pi pi-calendar"></i>
        </span>
      ),
      headerClassName: "border-noround	",
    },
    {
      header: "H2",
      content: <p className="m-0">Another content goes here.</p>,
      icon: (
        <span>
          <i className="pi pi-android"></i>
        </span>
      ),
    },
    // Add more panels as needed
  ];

  const contentData = [
    {
      titles: ["配布部数 :", "サブタイトル", "追加情報"],
      description: ["2,000部", "サブ内容", "追加内容"],
      headerText: "注文番号",
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "ピッキング",
      status: "warningStatus",
    },
    {
      titles: ["Another Title 1", "Another Title 2", "Another Title 3"],
      description: ["Description 1", "Description 2", "Description 3"],
      headerText: "注文番号",
      contentText: "1000106",
      buttonSymbol: true,
      buttonText: "ピッキング",
      status: "goldStatus",
    },
  ];

  const polygons = [
    {
      paths: [
        [
          {
            lat: 12.93260249516068,
            lng: 77.540356870962,
          },
          {
            lat: 12.93240381800141,
            lng: 77.54027104027352,
          },
          {
            lat: 12.932283565959736,
            lng: 77.54041587956033,
          },
          {
            lat: 12.932356762861561,
            lng: 77.54059290535531,
          },
          {
            lat: 12.93255021171304,
            lng: 77.54061436302743,
          },
          {
            lat: 12.932654778597351,
            lng: 77.54077529556832,
          },
          {
            lat: 12.932696605338798,
            lng: 77.54048025257669,
          },
          {
            lat: 12.93260249516068,
            lng: 77.540356870962,
          },
        ],
      ],
      options: { fillColor: "#EA5532CC", strokeColor: "#EA5532CC" },
    },
  ];
  const events = [
    { status: 'Ordered', date: '2023-06-01', description: 'Your product has been ordered.' },
    { status: 'Shipped', date: '2023-06-02', description: 'Your product has been shipped.' },
    { status: 'Out for Delivery', date: '2023-06-03', description: 'Your product is out for delivery.' },
    { status: 'Delivered', date: '2023-06-04', description: 'Your product has been delivered.' }
];

const eventTemplate = (item) => {
    const isHighlighted = item.status === 'Ordered';
    return (
        <div className={`event-content ${isHighlighted ? 'highlight' : ''}`}>
            <span className="event-status">{item.status}</span>
            <span className="event-date">{item.date}</span>
            <p className="event-description">{item.description}</p>
        </div>
    );
};
  return (
    <>
      <LogoutConfirmationModal
        open={logoutOpen}
        close={() => {
          setLogoutOpen(false);
          showOverFlow();
        }}
      />
      <MapModal
        open={mapModalOpen}
        mapHeader={"蒲田4丁目"}
        close={() => {
          setMapModalOpen(false);
          showOverFlow();
        }}
      />
      <div className="m-2">
        <CustomHeader header="Translation" />
        <div className="flex gap-2 flex-wrap">
          <p>Current Locale: {i18n.language}</p>
          <h1>{t("hello")}</h1>
          <h1>{t("welcome")}</h1>
          <LanguageSwitcher />
        </div>
        <CustomHeader
          header={i18n.language == "en" ? "Normal Button" : "通常ボタン"}
        />
        <div className="flex gap-2 flex-wrap">
          <Button
            buttonProps={{
              text:
                i18n.language == "en" ? "Default button" : "デフォルトボタン",
            }}
          />
          <Button
            buttonProps={{
              text: i18n.language == "en" ? "Back button" : "戻るボタン",
            }}
            parentClassName="back-button"
          />
          <Button
            buttonProps={{
              text: i18n.language == "en" ? "Icon-right" : "アイコン右",
              forward: true,
              iconPos: "right",
            }}
          />
          <Button
            buttonProps={{
              text: i18n.language == "en" ? "Icon-left" : "アイコン左",
              forward: true,
              iconPos: "left",
            }}
          />
          <Button
            buttonProps={{
              text: i18n.language == "en" ? "Icon-top" : "アイコントップ",
              forward: true,
              iconPos: "top",
              custom: "h-full",
            }}
          />
          <Button
            buttonProps={{
              text: i18n.language == "en" ? "Icon-bottom" : "アイコン下部",
              forward: true,
              iconPos: "bottom",
              custom: "h-full",
            }}
          />
          <Button
            buttonProps={{
              text: i18n.language == "en" ? "Icon-bottom" : "リンク",
              link: true,
            }}
          />
        </div>
        <div className="mt-2">
          <CustomHeader
            header={
              i18n.language == "en" ? "Status Button" : "ステータスボタン"
            }
          />
          <div className="flex gap-2 flex-wrap">
            <StatusButton
              statusButtonProps={{
                text:
                  i18n.language == "en" ? "Blue Status" : "青色のステータス",
                status: "blueStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text:
                  i18n.language == "en"
                    ? "Orange Status"
                    : "オレンジ色のステータス",
                status: "orangeStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text:
                  i18n.language == "en" ? "Gold Status" : "ゴールドステータス",
                status: "goldStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text:
                  i18n.language == "en" ? "Aqua Status" : "アクアステータス",
                status: "aquaStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text:
                  i18n.language == "en" ? "Warning Status" : "警告ステータス",
                status: "warningStatus",
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Select Button" />
          <div className="flex gap-2 flex-wrap">
            <SelectButton
              selectButtonProps={{
                value: value,
                onChange: (e) => setValue(e.value),
                options: options,
              }}
            />
            <p>
              {value == "On"
                ? "You clicked On Button"
                : "You clicked Off Button"}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Steps" />
          <div className="">
            <Steps
              stepsProps={{
                items: items,
                activeIndex: activeIndex,
                readOnly: false,
              }}
            />{" "}
            <div className="mt-3 ">{renderStepContent()}</div>
            {activeIndex < items.length - 1 && (
              <div className="flex justify-content-center">
                <button onClick={() => setActiveIndex(activeIndex + 1)}>
                  click for step {activeIndex + 2}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Question Panel" />
          <div className="mt-2">
            <QuestionPanel panelsData={panelsData} />
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Panel List" />
          <div className="mt-2">
            <CustomHeader header="Without icon" />
            <PanelList panelsData={panelsData1} />
          </div>
          <div className="mt-2">
            <div className="flex">
              <span className="borderLeftHeader"></span>
              <CustomHeader header="With icon" headerClass={"mr-2"} />
              <span className="borderRightHeader"></span>
            </div>
            <PanelList panelsData={panelsData2} />
          </div>
          <style jsx>{`
            .borderLeftHeader {
              border-left: 3px solid var(--primary-color);
              transform: skewX(40deg);
              height: 20px;
            }
            .borderRightHeader {
              border-right: 3px solid var(--primary-color);
              transform: skewX(-40deg);
              height: 20px;
            }
          `}</style>
        </div>
        <div className="mt-2 mb-2">
          <CustomHeader header="Otp" />
          <div className="mt-2">
            <OTPInput
              otpInputProps={{ length: 4 }}
              parentClassName={"flex justify-content-start"}
            />
          </div>
        </div>
        <div className="mt-4">
          <CustomHeader header="Input with required button" />
          <Input
            inputProps={{
              labelProps: {
                inputLabelClassName: "block",
                text: "Left Icon",
                labelMainClassName: "modal-label-field-space",
              },
              leftIcon:{
                parentClassName:"pi pi-calendar",
                // content:<i className="pi pi-calendar flex align-items-center"></i>
              },
              requiredButton: true,
              inputClassName: "w-full",
              iconInputParentClassName:"w-3",
              name: "unit",
            }}
          />
          <Input
            inputProps={{
              labelProps: {
                inputLabelClassName: "block",
                text: "Right Icon",
                labelMainClassName: "modal-label-field-space",
              },
              rightIcon:{
                parentClassName:"pi pi-check-circle align-items-center",
              },
              requiredButton: true,
              inputClassName: "w-full",
              name: "unit",
              iconInputParentClassName:"mt-2 w-3"
            }}
          />
        </div>
        <div className="mt-2">
          <CustomHeader header="Logout confirmation modal" />
          <div className="mt-2">
            <Button
              parentStyle={{ display: "inline" }}
              buttonProps={{
                text: "Logout",
                onClick: () => {
                  setLogoutOpen(true);
                  hideOverFlow();
                },
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Map modal" />
          <div className="mt-2">
            <Button
              parentStyle={{ display: "inline" }}
              buttonProps={{
                text: "Map",
                onClick: () => {
                  setMapModalOpen(true);
                  hideOverFlow();
                },
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Map With polygon marking" />
          <div className="mt-2">
            <GoogleMapComponent
              initialPosition={{
                lat: 12.932518841599157,
                lng: 77.5404829347857,
              }}
              height="500px"
              searchResult={{ lat: 12.932518841599157, lng: 77.5404829347857 }}
              popoverContent="This is a popover content"
              polygons={polygons}
            />
        <PlaceSearch/>
            {/* <SearchMapPage
            /> */}
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Content card dynamic" />
          <div className="mt-2">
            <ContentCardDynamic
              parentClassName="content-card"
              content={contentData}
            />
          </div>
        </div>
        <div className="card flex flex-column gap-3">
            <Timeline 
                value={events} 
                layout="horizontal" 
                align="top" 
                content={eventTemplate} 
                className="custom-timeline"
            />
        </div>
      </div>
    </>
  );
};

export default DemoPage;
