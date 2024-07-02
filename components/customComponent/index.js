import React from "react";

import { ContentHeader, Button, RadioBtn } from "@/components";

const CustomComponent = ({
  parentClassName,
  content,
  descriptionClassName,
  titleClassName,
  contentHeaderTextClassName,
  contentTextClassName,
  customContentHeaderStatusButton,
  StatusButtonParentClassName
}) => (
  <div className={parentClassName}>
    {content.map((item, index) => (
      <div key={index} className="mt-0">
        <ContentHeader
          headerText={item.headerText}
          text={item.text}
          parentClassName="header_class"
          useHeaderSemicolon={item.useHeaderSemicolon}
          contentText={item.contentText}
          buttonText={item.buttonText}
          buttonSymbol={item.buttonSymbol}
          status={item.status}
          contentHeaderTextClassName={contentHeaderTextClassName}
          contentTextClassName={contentTextClassName}
          customContentHeaderStatusButton={customContentHeaderStatusButton}
          StatusButtonParentClassName={StatusButtonParentClassName}
        />
        <div className="card border-dotted-left h-full border-1 border-500">
          <div className="card-text h-auto">
            <div className="grid h-full">
              {item.titles?.map((title, idx) => (
                <div className="flex" key={idx}>
                  <span
                    className={`mt-2 2xl:pb-6 w-4 lg:w-4 md:w-4 sm:w-5 text-end ${titleClassName}`}
                  >
                    {title}
                    {item.useSemicolon !== false && " :"}
                  </span>
                  <span
                    className={`mt-2 w-8 lg:w-9 md:w-8 sm:w-7 pl-2 ${descriptionClassName}`}
                  >
                    {item.description[idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {item.radioBtnProps && (
            <div className="flex items-center mt-2">
              <RadioBtn {...item.radioBtnProps} />
            </div>
          )}
          {item.customRadioBtn && (
            <div className="flex items-center mt-2">{item.customRadioBtn}</div>
          )}
          <div className="flex justify-end mt-2">
            {item.buttonProps && (
              <Button
                buttonProps={item.buttonProps}
                parentClassName="custom-details-button"
              />
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CustomComponent;
