"use client";

import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BsBookHalf } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { Button, ContentCardDynamic, ImageComponent } from "@/components";
import { LeftSideBar, RightSideBar } from "@/template";

const TopPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const contentData = [
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: "注文番号",
      contentText: "1000105",
      buttonSymbol: true,
      buttonText: "ピッキング",
      status: "warningStatus",
      useSemicolon: false,
    },
    {
      titles: ["配布部数", "配布予定期間", "発注日"],
      description: ["2,000部", "10月10日〜10月11日", "2024年10月10日"],
      headerText: "注文番号",
      contentText: "1000104",
      buttonSymbol: true,
      buttonText: "配布中",
      status: "goldStatus",
      useSemicolon: false,
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="top-nav-bottom-view">
        【大田区限定】ポスティング(チラシ配布)サービス
      </div>
      {/* Left Side bar */}
      <LeftSideBar />
      {/* Tab mobile device */}
      <div className="content">
        <div className="relative block lg:hidden ">
          <img
            src="/layout/images/PC.png"
            alt="Banner"
            className="w-full h-[800px] 2xl:h-[2000px] "
          />
          <div className="absolute inset-0 flex flex-col items-end justify-end mb-[120px] 2xl:mb-[600px]">
            <div className="flex flex-col items-end mr-[10px]">
              <span className="text-end font-bold bannerHeaderText mb-[20px] bg-white pl-2 pr-2">
                {t("direct_matching_with_distributors")}
              </span>
              <span className="text-end font-bold bannerHeaderText mb-[20px] bg-white pl-2 pr-2">
                {t("high_speed_realized")}
              </span>
            </div>
            <div className="flex flex-col items-end justify-end ml-[10px] mr-[10px]">
              <div className="flex gap-2 topHomeCard ml-2 mr-2">
                <div className="">
                  <Card className="w-full h-full">
                    <p className="text-center text-primary font-bold text-[12px] 2xl:text-[40px]">
                      01
                    </p>
                    <div className="flex justify-center text-center w-full height-[40px]">
                      <ImageComponent
                        imageProps={{
                          src: "layout/images/baseline-map.png",
                          width: "30",
                          height: "30",
                          alt: "Logo",
                        }}
                      />
                    </div>
                    <div className="text-center mt-2 font-medium text-[11px]">
                      マップから簡単に配布エリアを指定できる！
                    </div>
                  </Card>
                </div>
                <div className="">
                  <Card className="w-full h-full">
                    <p className="text-center text-primary font-bold text-[12px] 2xl:text-[40px]">
                      02
                    </p>
                    <div className="flex justify-center text-center w-full">
                      <ImageComponent
                        imageProps={{
                          src: "/layout/images/baseline-credit-card.png",
                          width: "30",
                          height: "30",
                          alt: "Logo",
                        }}
                      />
                    </div>
                    <div className="text-center mt-2 font-medium text-[11px]">
                      発注から決済までオンラインで完結！
                    </div>
                  </Card>
                </div>
                <div className="">
                  <Card className="w-full h-full">
                    <p className="text-center text-primary font-bold">03</p>
                    <div className="flex justify-center text-center w-full">
                      <ImageComponent
                        imageProps={{
                          src: "/layout/images/bicycle (1).png",
                          width: "30",
                          height: "30",
                          alt: "Logo",
                        }}
                      />
                    </div>
                    <div className="text-center mt-2 font-medium text-[11px]">
                      チラシは指定の場所まで配布員がピッキング！
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Large & Extra large screens */}
        <div className="relative hidden md:hidden sm:hidden lg:block">
          <img
            src="/layout/images/PC.png"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-end justify-end">
            <div className="4xl:mb-[12rem] 5xl:mb-[20rem] 6xl:mb-[23rem] lg:mb-[4rem] xl:mb-[5rem] 2xl:mb-[7rem] 3xl:mb-[7rem]">
              <div className="flex flex-col items-end mr-[10px]">
                <span className="text-end font-bold text-[2vw] mb-[1vh] bg-white px-[1vw]">
                  {t("direct_matching_with_distributors")}
                </span>
                <span className="text-end font-bold text-[2vw] mb-[2vh] bg-white px-[1vw]">
                  {t("high_speed_realized")}
                </span>
              </div>
              <div className="flex flex-col items-end justify-end mr-[10px] ml-[10px]">
                <div className="flex gap-[1vw] topHomeCard ">
                  <div className="w-full max-w-[30vw]">
                    <Card className="w-full flex flex-col justify-between h-full">
                      <div className="text-center text-primary font-bold text-[1.5vw]">
                        01
                      </div>
                      <div className="flex justify-center items-center w-full h-auto">
                        <img
                          src="/layout/images/baseline-map.png "
                          alt="logo"
                          className="w-6 h-auto"
                        />
                      </div>
                      <div className="text-center mt-2 font-medium text-[1.2vw]">
                        マップから簡単に配布エリアを指定できる！
                      </div>
                    </Card>
                  </div>
                  <div className="w-full max-w-[30vw]">
                    <Card className="w-full flex flex-col justify-between h-full">
                      <div className="text-center text-primary font-bold text-[1.5vw]">
                        02
                      </div>
                      <div className="flex justify-center items-center w-full h-auto">
                        <img
                          src="/layout/images/baseline-credit-card.png "
                          alt="logo"
                          className="w-6 h-auto"
                        />
                      </div>
                      <div className="text-center mt-2 font-medium text-[1.2vw]">
                        発注から決済までオンラインで完結！
                      </div>
                    </Card>
                  </div>
                  <div className="w-full max-w-[30vw]">
                    <Card className="w-full flex flex-col justify-between h-full">
                      <div className="text-center text-primary font-bold text-[1.5vw]">
                        03
                      </div>
                      <div className="flex justify-center items-center w-full ">
                        <img
                          src="/layout/images/bicycle (1).png "
                          alt="logo"
                          className="w-6 h-auto"
                        />
                      </div>
                      <div className="text-center mt-2 font-medium text-[1.2vw]">
                        チラシは指定の場所まで配布員がピッキング！
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Button displayed only in small & extra small screen*/}
        <div className="block lg:hidden md:hidden sm:block">
          <Card className="w-full ">
            <Button
              parentClassName="w-full shadow-1"
              buttonProps={{
                text: t("start_ordering"),
                forward: true,
                iconPos: "right",
                buttonClass: "w-full",
                onClick: () => router.push("/townDesignation")
              }}
            />
          </Card>
        </div>
        <div>
          <div className="order-flow-header mt-4 mb-2 pl-2">進行中のご注文</div>
          <div className="w-full pl-2 pr-2">
            <ContentCardDynamic
              parentClassName="w-full"
              content={contentData}
              contentHeaderTextClassName={"lg:text-[1vw] 6xl:text-[1vw]"}
              contentTextClassName={"lg:text-[1.1vw] 6xl:text-[1vw]"}
              titleClassName={"lg:text-[1vw] font-normal"}
              descriptionClassName={"lg:text-[1vw] font-bold"}
              className={"mb-2"}
              customContentHeaderStatusButton={"contentCardHomePage"}
              linkClassName={"link-button"}
              linkButtonParentClassName={"6xl:mb-[20px]"}
            />
          </div>
        </div>
        <div className="order-flow-header mt-2 mb-2">ご注文の流れ</div>
        <div className="orderInfo-container" style={{ background: "#FFFCD6" }}>
          <div className="section-top ">
            <div className="step">01</div>
            <h2 className="text-[1.2vw]">配布エリア、部数を指定</h2>
            <p>
              地図から「町丁目選択」または「おまかせ選択」で配布希望エリアを指定できます。部数は300部〜2,000部まで、100部単位で指定可能です。
            </p>
            <Image
              src="layout/images/distribution-1.png"
              alt="Distribution Info"
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="orderInfo-container" style={{ background: "#FFFEF5" }}>
          <div className="section-top">
            <div className="step">02</div>
            <h2 className="text-[1.2vw]">ご注文・決済</h2>
            <p>
              ご注文内容をご確認いただき、問題なければ決済に進んでください。正午までのご注文で、当日〜翌日中に配布が完了します。
              <br />
              (正午以降の発注の場合は2日後まで)
              <br />
              決済完了後2時間以内に配布員とのマッチングが成立しない場合、ご注文が自動的にキャンセルされますのでご了承ください。
            </p>
            <Image
              src="layout/images/distribution-2.png"
              alt="Distribution Info"
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="orderInfo-container" style={{ background: "#FFFCD6" }}>
          <div className="section w-full">
            <div className="step">03</div>
            <h2 className="text-[1.2vw]">配布物ピッキング</h2>
            <p>あとは待つだけ！翌日までに配布が完了します。</p>
            <Image
              src="layout/images/distribution-3.png"
              alt="Distribution Info"
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="p-4">
          <Button
            parentClassName="w-full shadow-1	"
            buttonProps={{
              text: "ご利用ガイドはこちら",
              icon: (
                <i className="text-[1.3vw]">
                  <BsBookHalf />
                </i>
              ),
              iconPos: "left",
              onClick: () => router.push("/guide"),
              custom: "userGuide-button h-auto",
              buttonClass: "w-full",
            }}
          />
        </div>
        <div className="distrubutionDetails ml-4 mr-4">
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
        <div className="distrubutionDetails-footer w-full">
          <Button
            parentClassName={"w-full"}
            buttonProps={{
              text: "よくある質問",
              icon: "pi pi-question-circle",
              buttonClass: "distrubutionDetails-footer-faqButton w-full h-auto",
              onClick:()=>router.push("/faq")
            }}
          />
          <Button
            parentClassName={"register-button w-full"}
            buttonProps={{
              text: "お問い合わせ",
              icon: "pi pi-envelope",
              buttonClass:
                "distrubutionDetails-footer-contactButton w-full h-auto",
              onClick:()=>router.push("/inquiry")
            }}
          />
        </div>
      </div>
      {/* Right Side bar */}
      <RightSideBar />
    </div>
  );
};

export default TopPage;
