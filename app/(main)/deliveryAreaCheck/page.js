"use client";
import { useState } from "react";

import { Button, CustomHeader, GoogleMapComponent, Input, NormalTable } from "@/components";
import { LeftSideBar, RightSideBar } from "@/template";
import { HiOutlineXMark } from "react-icons/hi2";

export default function SelectedArea() {

  const sampleData = [
    { area: "蒲田2丁目", parts: 500 },
    { area: "蒲田3丁目", parts: 900 },
    { area: "蒲田4丁目", parts: 600 },
    { area: "合計", parts: 1200 },
  ];

  const columns = [
    { field: "area" },
    {
      field: "parts",
      body: (item) => {
        return (
          <div className="flex mt-1 items-center justify-end">
            <CustomHeader header={item.parts} />
            <span className="ml-3 mb-2">部</span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dashboard-container">
      <LeftSideBar />
      <div className="content w-full h-full pb-2 pl-2 pr-2">
        <div className="h-[100%]">
            <GoogleMapComponent 
            initialPosition={{
                lat: 12.932518841599157,
                lng: 77.5404829347857,
              }}

              searchResult={{
                lat: 12.932518841599157,
                lng: 77.5404829347857,
              }}       
            />
        </div>
        <div className="relative">
        <div className="absolute -bottom-1.5 shadow-top flex justify-between p-3 w-full bg-white">
         <div className="w-full">  
        <CustomHeader header={"配布エリア"}  headerClass={"font-bold"}/>  
        <NormalTable
              parentClass={"deliveryCheck-table"}
              lazy
              totalRecords={10}
              loading={false}
              value={sampleData}
              columns={columns}
              stripedRows={false}
              showGridlines={false}
              tableStyle={{ width: "w-[100%]" }}
            />
        </div>
        </div> 
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}