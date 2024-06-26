import React from "react";

import { ContentHeader, Button, RadioBtn } from "@/components";

const CustomComponent = ({
  parentClassName,
  content,
  descriptionClassName,
  titleClassName,
}) => (
  <div className={parentClassName}>
    {content.map((item, index) => (
      <div key={index} className="mt-0">
        <ContentHeader
          headerText={item.headerText}
          text={item.text}
          parentClassName="header_class"
          useSemicolon={item.useHeaderSemicolon !== false}
        />
        <div className="card border-dotted-left border-1 border-500">
          <div className="card-text">
            <div className="grid">
              {item.titles?.map((title, idx) => (
                <div className="flex" key={idx}>
                  <span
                    className={`mt-2  w-4 lg:w-4 md:w-4 sm:w-5 text-end ${titleClassName}`}
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
