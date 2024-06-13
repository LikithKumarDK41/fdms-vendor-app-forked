"use client"
import { ImageComponent } from "@/components";
import { Card } from "primereact/card";

export default function Widget() {
  return (
    <div className="relative bg-white dark:bg-zinc-800 p-4 max-w-md mx-auto">
      <img
        src="/layout/images/PC.png"
        alt="background"
        height={"500"}
        className="absolute inset-0 w-full h-full "
      />
      <div className="relative">
      <div className="flex flex-col items-end">
              <span className="text-end font-bold text-[18px] mb-[20px] bg-white pl-2 pr-2">
                {("direct_matching_with_distributors")}
              </span>
              <span className="text-end font-bold text-[18px] mb-[20px] bg-white pl-2 pr-2">
                {("high_speed_realized")}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex gap-2 topHomeCard ml-2 mr-2">
                <div className="w-4">
                  <Card className="w-full h-full">
                    <p className="text-center text-primary font-bold">01</p>
                    <div className="flex justify-center text-center w-full height-[40px]">
                      <ImageComponent
                        imageProps={{
                          src: "layout/images/baseline-map.png",
                          width: "40",
                          height: "40",
                          alt: "Logo",
                        }}
                      />
                    </div>
                    <div className="text-center mt-2 font-medium text-[16px]">
                      マップから簡単に配布エリアを指定できる！
                    </div>
                  </Card>
                </div>
                <div className="w-4">
                  <Card className="w-full h-full">
                    <p className="text-center text-primary font-bold">02</p>
                    <div className="flex justify-center text-center w-full">
                      <ImageComponent
                        imageProps={{
                          src: "/layout/images/baseline-credit-card.png",
                          width: "40",
                          height: "40",
                          alt: "Logo",
                        }}
                      />
                    </div>
                    <div className="text-center mt-2 font-medium text-[16px]">
                      発注から決済までオンラインで完結！
                    </div>
                  </Card>
                </div>
                <div className="w-4">
                  <Card className="w-full h-full">
                    <p className="text-center text-primary font-bold">03</p>
                    <div className="flex justify-center text-center w-full  h-[40px]">
                      <ImageComponent
                        imageProps={{
                          src: "/layout/images/bicycle.png",
                          width: "40",
                          height: "40",
                          alt: "Logo",
                        }}
                      />
                    </div>
                    <div className="text-center mt-2 font-medium text-[16px]">
                      チラシは指定の場所まで配布員がピッキング！
                    </div>
                  </Card>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}
