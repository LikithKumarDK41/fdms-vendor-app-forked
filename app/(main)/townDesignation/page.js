"use client";
import { useState } from "react";

import { Button, GoogleMapComponent, Input, SelectButton } from "@/components";
import { LeftSideBar, RightSideBar } from "@/template";

export default function TownDesignation() {
  const options = ["町目指定", "おまかせ指定"];
  const [value, setValue] = useState(options[0]);

  return (
    <div className="dashboard-container">
      <LeftSideBar />
      <div className="content w-full pb-2 pl-1 pr-2">
        <div className="mr-3 ml-3">
          <div className="w-full mt-2">
          <SelectButton
              selectButtonProps={{
                value: value,
                onChange: (e) => setValue(e.value),
                options: options,
                selectButtonClassName:"w-[100%] "
              }}
              parentClassName="randomOrderSelectButton"
              parentStyle={{width:"100%"}}
            />
          </div>
          {
            value=="町目指定" ? (
                <>
                <div className="mt-2 w-full">
                <Input
                  inputProps={{
                    inputClassName: "w-full",
                    placeholder: "蒲田",
                    leftIcon: {
                      parentClassName: "pi pi-map-marker ",
                    },
                    iconInputParentClassName: "w-full",
                  }}
                />
              </div>
               <div className="mt-2">
               <GoogleMapComponent
              initialPosition={{
                lat: 12.932518841599157,
                lng: 77.5404829347857,
              }}
              height="500px"
              mapScale="25"
              searchResult={{ lat: 12.932518841599157, lng: 77.5404829347857 }}
            />
             </div>
             <div className="flex justify-between p-4 shadow-xl">
               <div>
                 <p className="text-[14px] 2xl:text-[1.2vw]">0部</p>
                 <p>
                   <span className="font-bold text-[18px] 2xl:text-[1.4vw]">¥0</span>
                   <span className="mx-2 text-[14px] 2xl:text-[1.2vw]">(¥0/部)</span>
                 </p>
               </div>
               <div className="flex items-center ">
                 <Button
                   buttonProps={{
                     text: "ご注文内容の確認へ",
                     forward: true,
                     iconPos: "right",
                     disabled:true,
                     buttonClass: "townDesignationSubmitButton",
                   }}
                   parentClassName={"update-button"}
                 />
               </div>
             </div>
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
             </>
            ):
            <>
             <div className="mt-3">
              <div className="flex justify-center" >
                  <div className="">
                  <Input 
                  inputProps={{
                    inputClassName:"",
                    placeholder:"2,000",
                  }}
                  />
                  </div>
                  <div className="flex items-center mx-2">
                  <p className="text-[16px] 2xl:text-[1.3vw]">部</p>
                  </div>      
              </div>
              <div className="mt-3">
               <GoogleMapComponent
              initialPosition={{
                lat: 12.932518841599157,
                lng: 77.5404829347857,
              }}
              height="500px"
              searchResult={{ lat: 12.932518841599157, lng: 77.5404829347857 }}
            />
             </div>
             <div className="flex justify-between p-2 sm:p-2 md:p-4 ">
               <div>
                 <p className="text-[14px] 2xl:text-[1.2vw]">2,000部</p>
                 <p>
                   <span className="font-bold text-[18px] 2xl:text-[1.4vw]">¥16,000</span>
                   <span className="mx-2 text-[14px] 2xl:text-[1.2vw]">(¥8.00/部)</span>
                 </p>
               </div>
               <div className="flex items-center ">
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
          }
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}
