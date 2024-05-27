"use client";

import React, { useState } from "react";
import { useTranslation } from 'next-i18next';

import { Button, ContentCardDynamic, CustomHeader, OTPInput, PanelList, QuestionPanel, SelectButton, StatusButton, Steps, StepsCard, LanguageSwitcher } from '@/components';

const DemoPage = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation('translation');

  const options = ['Off', 'On'];
  const [value, setValue] = useState(options[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const itemRenderer = (item, itemIndex) => {
    const isActiveItem = activeIndex === itemIndex;
    const isClickable = itemIndex <= activeIndex;
    const backgroundColor = isActiveItem ? 'var(--primary-color)' : 'var(--surface-b)';
    const textColor = isActiveItem ? 'var(--surface-b)' : 'var(--text-color-secondary)';
    const cursor = isClickable ? 'pointer' : 'not-allowed';

    return (
      <span
        className="inline-flex align-items-center justify-content-center border-circle border-primary border-1 h-3rem w-3rem z-1"
        style={{ backgroundColor, color: textColor, marginTop: '-25px', cursor }}
        onClick={() => isClickable && setActiveIndex(itemIndex)}
      >
        <i className={`${item.icon} text-xl`} />
      </span>
    );
  };

  const items = [
    {
      icon: 'pi pi-user',
      template: (item) => itemRenderer(item, 0)
    },
    {
      icon: 'pi pi-calendar',
      template: (item) => itemRenderer(item, 1)
    },
    {
      icon: 'pi pi-check',
      template: (item) => itemRenderer(item, 2)
    }
  ];

  const renderStepContent = () => {
    switch (activeIndex) {
      case 0:
        return <div>Content for Step 1</div>;
      case 1:
        return <div>Content for Step 2</div>;
      case 2:
        return <div>Content for Step 3</div>;
      default:
        return null;
    }
  };


  const panelsData = [
    {
      header: "H1",
      content: (
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ),
      headerClassName: "border-round-3xl"
    },
    {
      header: "H2",
      content: (
        <p className="m-0">
          Another content goes here.
        </p>
      ),
      headerClassName: "border-round-3xl"
    },
    // Add more panels as needed
  ];
  const panelsData1 = [
    {
      header: "H1",
      content: (
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ),
      icon: <span><i className="pi pi-calendar"></i></span>,
      headerClassName: "border-noround	",
    },
    {
      header: "H2",
      content: (
        <p className="m-0">
          Another content goes here.
        </p>
      ),
      icon: <span><i className="pi pi-android"></i></span>,
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
      status: "warningStatus"
    },
    {
      titles: ["Another Title 1", "Another Title 2", "Another Title 3"],
      description: ["Description 1", "Description 2", "Description 3"],
      headerText: "注文番号",
      contentText: "1000106",
      buttonSymbol: true,
      buttonText: "ピッキング",
      status: "goldStatus"
    },
  ];

  return (
    <>
      <div className="m-2">
        <CustomHeader header="Translation" />
        <div className="flex gap-2 flex-wrap">
          <p>Current Locale: {i18n.language}</p>
          <h1>{t('hello')}</h1>
          <h1>{t('welcome')}</h1>
          <LanguageSwitcher />
        </div>
        <CustomHeader header="Normal Button" />
        <div className="flex gap-2 flex-wrap">
          <Button
            buttonProps={{
              text: "Default-Button",
            }}
          />
          <Button
            buttonProps={{
              text: "Back-Button",
            }}
            parentClassName="back-button"
          />
          <Button
            buttonProps={{
              text: "Icon-right",
              forward: true,
              iconPos: "right",
            }}
          />
          <Button
            buttonProps={{
              text: "Icon-left",
              forward: true,
              iconPos: "left",
            }}
          />
          <Button
            buttonProps={{
              text: "Icon-top",
              forward: true,
              iconPos: "top",
              custom: "h-full"
            }}
          />
          <Button
            buttonProps={{
              text: "Icon-bottom",
              forward: true,
              iconPos: "bottom",
              custom: "h-full"
            }}
          />
          <Button
            buttonProps={{
              text: "Link",
              link: true,
            }}
          />
        </div>
        <div className="mt-2">
          <CustomHeader header="Status Button" />
          <div className="flex gap-2 flex-wrap">
            <StatusButton
              statusButtonProps={{
                text: "Blue Status",
                status: "blueStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Orange Status",
                status: "orangeStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Gold Status",
                status: "goldStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Aqua Status",
                status: "aquaStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Warning Status",
                status: "warningStatus",
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Select Button" />
          <div className="flex gap-2 flex-wrap">
            <SelectButton selectButtonProps={{
              value: value,
              onChange: (e) => setValue(e.value),
              options: options
            }} />
            <p>{value == "On" ? "You clicked On Button" : "You clicked Off Button"}</p>
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Steps" />
          <div className="">
            <Steps stepsProps={{
              items: items,
              activeIndex: activeIndex,
              readOnly: false
            }} />            <div className="mt-3">
              {renderStepContent()}
            </div>
            {activeIndex < items.length - 1 && (
              <button onClick={() => setActiveIndex(activeIndex + 1)}>
                Complete Step {activeIndex + 1}
              </button>
            )}
          </div>
        </div>
        <div className="mt-2">
          <StepsCard stepsCardProps={{
            topHeaderProps: {
              text: "10月10日13:00〜14:00",
              className: "m-0"
            },
            content: <div className="flex justify-content-center"><p>配布員とのマッチングを行なっています。</p></div>,
            stepCardStyle: { background: '#FDEEEA' },
            stepCardClassName: "w-full lg:w-5 md:w-6 sm:w-full",
            imageProps: {
              src: "/layout/images/handshake.png",
              width: "100",
              height: "80",
            }
          }}
            parentClassName="flex justify-content-center"
          />
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
            <PanelList panelsData={panelsData} />
          </div>
          <div className="mt-2">
            <CustomHeader header="With icon" />
            <PanelList panelsData={panelsData1} />
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Otp" />
          <div className="mt-2">
            <OTPInput otpInputProps={{ length: 4 }} parentClassName={"flex justify-content-start"} />
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Content card dynamic" />
          <div className="mt-2">
            <ContentCardDynamic parentClassName="content-card" content={contentData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
