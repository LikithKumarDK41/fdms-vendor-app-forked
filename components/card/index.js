import Image from "next/image";
import { Card } from "primereact/card";

import { ContentHeader, CustomHeader } from "@/components/header";
import { Button } from "@/components/button";

export const StepsCard = (props) => {
  const { parentClassName, parentStyle, stepsCardProps = {} } = props;
  const {
    stepCardClassName,
    stepCardStyle,
    logo,
    topHeaderProps,
    imageProps,
    content,
    bottomHeaderProps,
  } = stepsCardProps;

  return (
    <div className={`${parentClassName}`} style={parentStyle}>
      <Card
        className={`flex justify-content-center align-items-center border-dashed border-3	border-primary ${stepCardClassName}`}
        style={stepCardStyle}
      >
        {logo ? logo : <></>}
        {topHeaderProps?.text && (
          <>
            <CustomHeader
              customParentClassName="justify-content-center"
              header={topHeaderProps.text}
              headerClass={`text-xl font-bold ${topHeaderProps.className}`}
            />
          </>
        )}
        {imageProps?.src && (
          <div className="flex justify-content-center">
            <Image
              src={imageProps.src}
              width={imageProps.width}
              height={imageProps.height}
              alt={imageProps.alt}
            />
          </div>
        )}
        {content ? content : <></>}
        {bottomHeaderProps?.text && (
          <>
            <CustomHeader
              header={bottomHeaderProps.text}
              headerClass={`text-xl font-bold ${bottomHeaderProps.className}`}
            />
          </>
        )}
      </Card>
    </div>
  );
};

export const ContentCard = (props) => {
  const { parentClassName, content } = props;

  return (
    <div className={`${parentClassName}`}>
      <div className="card border-dotted-left border-1 border-500">
        {content?.map((item, index) => (
          <div className="card-text" key={index}>
            <div className="grid">
              <div className="flex">
                <div className="col-1">
                  <span className="flex justify-end card-title">
                    {item.title}
                  </span>
                </div>
                <div className="col-11 card-description ">
                  <span>{item.description}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="link-style flex justify-end">
          <Button
            buttonProps={{
              text: "詳細を見る",
              link: true,
              custom: "",
            }}
            parentClassName={"custom-details-button"}
          />
        </div>
      </div>
    </div>
  );
};
export default ContentCard;

export const ContentCardDynamic = (props) => {
  const {
    parentClassName,
    content,
    titleClassName,
    descriptionClassName,
    className,
    linkClassName,
    contentHeaderTextClassName,
    contentTextClassName,
    customContentHeaderStatusButton,
    StatusButtonParentClassName,
    linkButtonParentClassName,
  } = props;
  return (
    <div className={`${parentClassName}`}>
      {content.map((item, index) => (
        <div key={index} className={item.buttonSymbol ? `mt-2` : ""}>
          <ContentHeader
            headerText={item.headerText}
            contentText={item.contentText}
            buttonText={item.buttonText}
            buttonSymbol={item.buttonSymbol}
            status={item.status}
            contentHeaderTextClassName={contentHeaderTextClassName}
            contentTextClassName={contentTextClassName}
            customContentHeaderStatusButton={customContentHeaderStatusButton}
            StatusButtonParentClassName={StatusButtonParentClassName}
            parentClassName="header_class"
            useSemicolon={item.useSemicolon}
          />
          <div className="card border-dotted-left border-1 border-500">
            <div className="card-text">
              {item.titles?.map((title, idx) => (
                <div className="flex" key={idx}>
                  <span
                    className={`mt-2  w-4 lg:w-4 md:w-4 sm:w-5 text-end ${titleClassName}`}
                  >
                    {title}
                    {item.useSemicolon !== false || ":"}
                  </span>
                  <span
                    className={`mt-2 w-8 lg:w-9 md:w-8 sm:w-7 pl-2 ${descriptionClassName}`}
                  >
                    {item.description[idx]}
                  </span>
                </div>
              ))}
            </div>
            {item.buttonSymbol && (
              <div
                className={`link-style flex justify-end ${linkButtonParentClassName}`}
              >
                <Button
                  buttonProps={{
                    text: "詳細を見る",
                    link: true,
                    custom: linkClassName,
                    onClick: item.linkClick,
                  }}
                  parentClassName={"custom-details-button"}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
