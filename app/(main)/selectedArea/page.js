"use client";

import { HiOutlineXMark } from "react-icons/hi2";

import { Button, CustomHeader, Input, NormalTable } from "@/components";
import { LeftSideBar, RightSideBar } from "@/template";
import { classNames } from "primereact/utils";

export default function SelectedArea() {
  const frozenData = [{ area: "蒲田2丁目", parts: 2000 }];

  const sampleData = [
    { area: "蒲田2丁目", parts: 500 },
    { area: "蒲田3丁目", parts: 900 },
    { area: "蒲田4丁目", parts: 600 },
  ];

  const columns = [
    { field: "area", header: "エリア",
      minWidth:"7rem",
     },
    {
      field: "parts",
      header: "2000部",
      minWidth:"15rem",
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
            <span className="ml-3 text16">部</span>
          </div>
        );
      },
    },
    {
      field: "actions",
      textAlign: "left",
      alignHeader: "left",
      minWidth: "5rem",
      width:"5rem",
      maxWidth: "5rem",
      body: (rowData) => {
        return (
          <div className="flex justify-end mx:0 2xl:mx-2">
            <HiOutlineXMark
              fontSize={24}
              fontWeight={700}
              color="#AAAAAA"
              className="text-[16px] 2xl:text-[1.3vw]"
            />
          </div>
        );
      },
    },
  ];
  const paraclassName=classNames("text-center xl:text-left lg:text-center md:text-center sm:text-left")

  return (
    <div className="dashboard-container flex min-h-screen">
      <LeftSideBar />
      <div className="content flex flex-col w-full h-full pb-2 pl-0 pr-0">
        <div className="flex-grow mr-2 ml-2">
          <div className="flex justify-center items-center mt-2">
            <div className="flex-grow text-center items-center mt-1">
              <CustomHeader
                header={"選択中エリア"}
                headerClass={"font-bold text16"}
                customParentClassName={"flex justify-center items-center"}
              />
            </div>
            <div className="mx-2 2xl:mx-2">
              <HiOutlineXMark
                fontSize={24}
                fontWeight={900}
                className="text16"
              />
            </div>
          </div>
          <div className="mt-2">
            <NormalTable
              parentClass={"selectedArea-table"}
              lazy
              totalRecords={10}
              loading={false}
              frozenValue={frozenData}
              value={sampleData}
              columns={columns}
              stripedRows={false}
              showGridlines={false}
              tableStyle={{ minWidth: "27rem" }}
              className={"w-full"}
            />
          </div>
        </div>
        <div className="bottomContent mt-auto">
          <div className="shadow-top flex items-center justify-between selctedArea-button  p-3 w-full bg-white">
            <div className="">
              <p className={`text16 ${paraclassName}`}>2,000部</p>
              <p className="mb-2 sm:mb-2 md:mb-0 selctedArea-pricetag">
                <span className="font-bold text16">
                  ¥16,000
                </span>
                <span className="mx-2 text16">
                  (¥8.00/部)
                </span>
              </p>
            </div>
            <div className="flex items-center  mt-2 md:mt-0 sm:mt-2">
              <Button
                buttonProps={{
                  text: "ご注文内容の確認へ",
                  forward: true,
                  iconPos: "right",
                  buttonClass: "townDesignationSubmitButton",
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
