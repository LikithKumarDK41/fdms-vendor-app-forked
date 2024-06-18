"use client";
import React, { useState } from "react";
import { Timeline } from "primereact/timeline";

export default function TemplateDemo() {
  const initialEvents = [
    {
      id: 1,
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      id: 2,
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      id: 3,
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      id: 4,
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [status, setStatus] = useState("Ordered");

  const customizedMarker = (item) => {
    return (
      <span
        className={`flex w-1rem h-1rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 ${
          item.status == status ? "bg-primary" : "bg-white"
        }`}
      >
        <i
          className={`${
            item.status == status ? "bg-primary" : "bg-white disabled"
          }`}
        ></i>
      </span>
    );
  };

  const renderContentByStatus = (status) => {
    switch (status) {
      case "Ordered":
        return (
          <div className="flex justify-content-center">
            <p>Content for Ordered status.</p>
            {/* Add specific content for Ordered status */}
          </div>
        );
      case "Processing":
        return (
          <div className="flex justify-content-center">
            <p>Content for Processing status.</p>
            {/* Add specific content for Processing status */}
          </div>
        );
      case "Shipped":
        return (
          <div className="flex justify-content-center">
            <p>Content for Shipped status.</p>
            {/* Add specific content for Shipped status */}
          </div>
        );
      case "Delivered":
        return (
          <div className="flex justify-content-center">
            <p>Content for Delivered status.</p>
            {/* Add specific content for Delivered status */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-5">
      <Timeline
        value={events}
        layout="horizontal"
        align="top"
        marker={customizedMarker}
      />
      {renderContentByStatus(status)}
    </div>
  );
}
