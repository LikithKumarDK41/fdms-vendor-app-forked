import React, { useState } from "react";
import { Panel as PanelsList } from "primereact/panel";

export const QuestionPanel = ({
  parentClassName,
  panelsData,
  headerClassName,
  headerTextClassName,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const defaultHeaderTemplate = (options, header) => {
    const className = `${options.className} ${headerClassName} justify-content-space-between`;
    return (
      <div className={className}>
        <div className="flex align-items-center gap-2 2xl:text-[17px] 3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px]">
          <div className="text-center border-1 pl-[5px] pr-[6px] pt-0 pb-0 border-circle text-[#EA5532]	border-white bg-[#FFFFFF]  font-bold">
            Q
          </div>
          <span className={`font-bold ${headerTextClassName}`}>{header}</span>
        </div>
        <div>{options.togglerElement}</div>
      </div>
    );
  };

  return (
    <div className={`${parentClassName}`}>
      {panelsData.map((panel, index) => (
        <div className="mb-2 " key={index}>
          <PanelsList
            key={index}
            headerTemplate={(options) =>
              panel.headerTemplate
                ? panel.headerTemplate(options)
                : defaultHeaderTemplate(options, panel.header)
            }
            header={panel.header}
            className={panel.questionPanelClassName}
            toggleable
            collapsed={activeIndex !== index}
            onToggle={() => handleToggle(index)}
          >
            <div className="flex gap-2 2xl:text-[17px] 3xl:text-[20px] 4xl:text-[27px] 5xl:text-[41px] 6xl:text-[55px] ">
              <span className="text-center pl-2 pr-2 font-bold text-primary">
                A
              </span>
              {panel.content}
            </div>
          </PanelsList>
        </div>
      ))}
    </div>
  );
};

export const PanelList = ({ parentClassName, panelsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const defaultHeaderTemplate = (
    options,
    header,
    customClassName,
    index,
    icon
  ) => {
    const className = `${options.className} justify-content-space-between ${customClassName}`;
    const isCollapsed = activeIndex !== index;

    return (
      <div className={className}>
        <div className="flex align-items-center gap-2">
          {icon ? icon : <></>}
          <span className="font-bold">{header}</span>
        </div>
        <div className="faqIcon">
          {isCollapsed ? (
            <i
              className="pi pi-angle-right cursor-pointer  "
              onClick={() => handleToggle(index)}
            ></i>
          ) : (
            <i
              className="pi pi-angle-down cursor-pointer"
              onClick={() => handleToggle(index)}
            ></i>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`${parentClassName}`}>
      {panelsData.map((panel, index) => (
        <div className="mb-2" key={index}>
          <PanelsList
            key={index}
            headerTemplate={(options) =>
              panel.headerTemplate
                ? panel.headerTemplate(options)
                : defaultHeaderTemplate(
                    options,
                    panel.header,
                    panel.headerClassName,
                    index,
                    panel.icon
                  )
            }
            header={panel.header}
            className={panel.panelListClassName}
            toggleable
            collapsed={activeIndex !== index}
            onToggle={() => handleToggle(index)}
          >
            <div>{panel.content}</div>
          </PanelsList>
        </div>
      ))}
    </div>
  );
};
