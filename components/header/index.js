import React from "react";
import { StatusButton } from "@/components";

export const CustomHeader = ({
  header,
  headerClass,
  customParentClassName,
  requiredSymbol = false,
}) => {
  return (
    <div
      className={`flex gap-2 align-items-center mb-2 ${customParentClassName}`}
    >
      <div className="hitachi_header_container">
        <div className="hitachi_header_bg"></div>
        <div className={`ml-2 ${headerClass}`}>
          {header}{" "}
          <span className={requiredSymbol ? "p-error" : ""}>
            {requiredSymbol ? "*" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ContentHeader = ({
  headerText,
  contentText,
  buttonText,
  buttonSymbol,
  parentClassName,
  customHeaderColor,
  contentHeaderTextClassName,
  contentTextClassName,
  status,
  customContentHeaderStatusButton,
  useHeaderSemicolon = true, // Default value for useSemicolon
}) => {
  return (
    <div className={parentClassName}>
      <div className="flex justify-between">
        <div className="font-bold">
          <span
            className={`${
              customHeaderColor || "headerColor"
            } ${contentHeaderTextClassName}`}
          >
            {headerText}
            {useHeaderSemicolon && " :"}{" "}
            {/* Conditionally render the semicolon */}
          </span>
          <span className={contentTextClassName}>{contentText}</span>
        </div>
        <div>
          {buttonSymbol && (
            <span>
              <StatusButton
                parentClassName="header-button"
                statusButtonProps={{
                  text: buttonText,
                  status: status,
                  custom:
                    customContentHeaderStatusButton ||
                    "defaultContentHeaderStatusButton",
                }}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
