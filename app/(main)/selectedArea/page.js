"use client";

import { Button, CustomHeader, Input, NormalTable } from "@/components";
import { LeftSideBar, RightSideBar } from "@/template";
import { HiOutlineXMark } from "react-icons/hi2";

export default function SelectedArea() {
  const frozenData = [{ area: "蒲田2丁目", parts: 2000 }];

  const sampleData = [
    { area: "蒲田2丁目", parts: 500 },
    { area: "蒲田3丁目", parts: 900 },
    { area: "蒲田4丁目", parts: 600 },
  ];

  const columns = [
    { field: "area", header: "エリア" },
    {
      field: "parts",
      header: "2000部",
      body: (item) => {
        return (
          <div className="flex items-center">
            <Input
              inputProps={{
                labelProps: {
                  inputLabelClassName: "block",
                },
                inputClassName: "w-full",
                value: item.parts,
              }}
            />
            <span className="ml-3">部</span>
          </div>
        );
      },
    },
    {
      field: "actions",
      textAlign: "left",
      alignHeader: "left",
      minWidth: "4rem",
      body: (rowData) => {
        return (
          <div className="flex justify-end">
            <HiOutlineXMark fontSize={24} fontWeight={700} color="#AAAAAA"/>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dashboard-container">
      <LeftSideBar />
      <div className="content w-full h-full pb-2 pl-2 pr-2">
        <div>
          <div className="flex justify-center items-center mt-2">
            <div className="flex-grow text-center items-center mt-1">
              <CustomHeader
                header={"選択中エリア"}
                headerClass={"font-bold text-lg"}
                customParentClassName={"flex justify-center items-center"}
              />
            </div>
            <div className="mx-2">
              <HiOutlineXMark fontSize={24} fontWeight={900} />
            </div>
          </div>
          <div className="mt-2">
            <NormalTable
              lazy
              totalRecords={10}
              loading={false}
              frozenValue={frozenData}
              value={sampleData}
              columns={columns}
              stripedRows={false}
              showGridlines={false}
              tableStyle={{ width: "w-[100%]" }}
            />
          </div>
        </div>
        <div className="min-h-screen relative">
          <div className="absolute -bottom-1.5 shadow-top flex justify-between p-3 w-full bg-white">
            <div>
              <p className="text-sm">2,000部</p>
              <p>
                <span className="font-bold text-lg">¥16,000</span>
                <span className="mx-2">(¥8.00/部)</span>
              </p>
            </div>
            <div className="flex items-center">
              <Button
                buttonProps={{
                  text: "ご注文内容の確認へ",
                  forward: true,
                  iconPos: "right",
                  buttonClass: "update-button",
                }}
                parentClassName={"update-button"}
              />
            </div>
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}
