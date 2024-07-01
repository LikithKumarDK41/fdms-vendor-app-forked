"use client";

import { useState } from "react";

import { Button, GoogleMapComponent, Input, SelectButton } from "@/components";
import { LeftSideBar, RightSideBar } from "@/template";
import { classNames } from "primereact/utils";

export default function TownDesignation() {
  const options = ["町目指定", "おまかせ指定"];
  const [value, setValue] = useState(options[0]);
  const paraclassName=classNames("text-center xl:text-left lg:text-center md:text-center sm:text-left")


  return (
    <div className="dashboard-container">
      <LeftSideBar />
      <div className="content w-full pb-2 pl-0 pr-0">
        <div>
          <div className="mr-3 ml-3">
            <div className="w-full mt-2">
              <SelectButton
                selectButtonProps={{
                  value: value,
                  onChange: (e) => setValue(e.value),
                  options: options,
                  selectButtonClassName: "w-[100%] ",
                }}
                parentClassName="randomOrderSelectButton"
                parentStyle={{ width: "100%" }}
              />
            </div>
          </div>
          {value == "町目指定" ? (
            <>
              <div className="mr-3 ml-3">
                <div className="mt-2 w-full">
                  <Input
                    inputProps={{
                      inputClassName: "w-full ",
                      placeholder: "蒲田",
                      leftIcon: {
                        parentClassName: "pi pi-map-marker ",
                      },
                      iconInputParentClassName: "w-full",
                    }}
                  />
                </div>
              </div>
              <div className="mt-2 w-full">
                <GoogleMapComponent
                  initialPosition={{
                    lat: 12.932518841599157,
                    lng: 77.5404829347857,
                  }}
                  height="500px"
                  searchResult={{
                    lat: 12.932518841599157,
                    lng: 77.5404829347857,
                  }}
                />
              </div>
              <div className="flex items-center townDesignation-button justify-between p-4 shadow-xl">
                <div className="">
                  <p className={`text-[18px] 2xl:text-[1.3vw] ${paraclassName}`}>
                    0部
                  </p>
                  <p className="mb-2 sm:mb-2 md:mb-0">
                    <span className="font-bold text-[16px] 2xl:text-[1.3vw]">
                      0¥
                    </span>
                    <span className="mx-2 text-[16px] 2xl:text-[1.3vw]">
                      (¥0/部)
                    </span>
                  </p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 sm:mt-2">
                  <Button
                    buttonProps={{
                      text: "ご注文内容の確認へ",
                      forward: true,
                      iconPos: "right",
                      disabled: true,
                      buttonClass: "townDesignationSubmitButton",
                    }}
                    parentClassName={"update-button"}
                  />
                </div>
              </div>
              <div className="mr-3 ml-3">
                <div className="distrubutionDetails mt-5">
                  <div className="distrubutionDetails-container text-[1.5vw]">
                    <h1>ご利用にあたっての注意事項</h1>
                    <div className="distrubutionDetails-section">
                      <h2>配布エリア・部数について</h2>
                      <ul>
                        <li>
                          エリア選択時に表示される配布部数は配布効率を考慮し算出されており、選択エリアの全世帯への配布を保証するものではありません。
                        </li>
                        <li>
                          配布先住民のご意向による配布拒否、住宅事情の変化、配布日確保、交通事情、天災・天候不良等の事情により選択エリア内の実配布数が配布見込み数以下の場合や区内で同様な状況や事情が生じた場合、部数は、選択エリア近隣に配布されます。
                        </li>
                        <li>
                          戸建のみ・マンションのみ等の配布対象物件のご指定はできません。
                        </li>
                      </ul>
                    </div>
                    <div className="distrubutionDetails-section">
                      <h2>配布スケジュールについて</h2>
                      <ul>
                        <li>配布開始日及び配布期間の指定はできかねます。</li>
                        <li>
                          配布先住民のご意向による配布拒否、住宅事情の変化、配布日確保、交通事情、天災・天候不良等の事情により、完了予定日までに配布完了できない場合、実配布数での精算又は期間延長にて対応させていただきます。
                        </li>
                        <li>
                          お客様の都合により配布物の受け渡しがご送延した場合、完了予定日までの配布ができない場合がございます。お早目にご用意をお願い致します。
                        </li>
                      </ul>
                    </div>
                    <div className="distrubutionDetails-section">
                      <h2>配布できる用紙サイズについて</h2>
                      <div className="pt-5">
                        <img
                          src="layout/images/paper-size-1.png"
                          alt="Paper Sizes"
                          className="w-full"
                        />
                      </div>
                      <div className="pt-5">
                        <img
                          src="layout/images/paper-size-2.png"
                          alt="Paper Sizes"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mt-3">
                <div className="flex justify-center">
                  <div className="">
                    <Input
                      inputProps={{
                        inputClassName: "townInput",
                        placeholder: "2,000",
                      }}
                    />
                  </div>
                  <div className="flex items-center mx-2">
                    <p className="text-[16px] 2xl:text-[1.3vw]">部</p>
                  </div>
                </div>
                <div className="mt-3 w-full">
                  <GoogleMapComponent
                    initialPosition={{
                      lat: 12.932518841599157,
                      lng: 77.5404829347857,
                    }}
                    height="500px"
                    searchResult={{
                      lat: 12.932518841599157,
                      lng: 77.5404829347857,
                    }}
                  />
                </div>
                <div className="flex items-center townDesignation-button justify-between p-2 sm:p-2 md:p-4 ">
                  <div>
                    <p className={`text-[16px] 2xl:text-[1.3vw] ${paraclassName}`}>
                      2,000部
                    </p>
                    <p className="mb-2 sm:mb-2 md:mb-0">
                      <span className="font-bold text-[16px] 2xl:text-[1.3vw]">
                        ¥16,000
                      </span>
                      <span className="mx-2 text-[16px] 2xl:text-[1.3vw]">
                        (¥8.00/部)
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 sm:mt-2">
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
            </>
          )}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}
