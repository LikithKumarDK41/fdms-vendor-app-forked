import React, { useState } from "react";
import { Panel as PanelsList } from "primereact/panel";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export const QuestionPanel = ({ parentClassName,panelsData }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const defaultHeaderTemplate = (options, header, customClassName) => {
        const className = `${options.className} ${customClassName} justify-content-space-between`;
        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <BsFillQuestionCircleFill size="20" className="text-primary"/>
                    <span className="font-bold">{header}</span>
                </div>
                <div>
                    {options.togglerElement}
                </div>
            </div>
        );
    };

    return (
        <div className={`${parentClassName}`}>
            {panelsData.map((panel, index) => (
                <PanelsList
                    key={index}
                    headerTemplate={(options) =>
                        panel.headerTemplate
                            ? panel.headerTemplate(options)
                            : defaultHeaderTemplate(
                                options,
                                panel.header,
                                panel.headerClassName,
                            )
                    }
                    header={panel.header}
                    className={panel.questionPanelClassName}
                    toggleable
                    collapsed={activeIndex !== index}
                    onToggle={() => handleToggle(index)}
                >
                    <div className="flex gap-2">
                        <i className="pi pi-reply text-primary"></i> {panel.content}
                    </div>
                </PanelsList>
            ))}
        </div>
    );
};

export const PanelList = ({ parentClassName,panelsData }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const defaultHeaderTemplate = (options, header, customClassName, index,icon) => {
        const className = `${options.className} justify-content-space-between ${customClassName}`;
        const isCollapsed = activeIndex !== index;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    {icon ? icon :<></>}
                    <span className="font-bold">{header}</span>
                </div>
                <div>
                    {isCollapsed ? (
                        <i
                            className="pi pi-angle-right cursor-pointer"
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
                    <div>
                        {panel.content}
                    </div>
                </PanelsList>
            ))}
        </div>
    );
};