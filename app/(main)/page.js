"use client";

import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { Button } from 'primereact/button';

const Dashboard = () => {
  const sidebar = [
    {
      text: "ご注文履歴",
    },
    {
      text: "ご利用ガイド",
    },
    {
      text: "よくある質問",
    },
    {
      text: "お問い合わせ",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "利用規約",
    },
    {
      text: "sssss",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="top-nav-bottom-view">
        【大田区限定】ポスティング(チラシ配布)サービス
      </div>
      <div className="left-sidebar">
        <Card className="sidebar-card">
          <div className="left-sidebar-header">
            <div className="logoContainer">
              <Image
                src="/layout/images/logo.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <hr className="horizontalLine" />
            <div className="header-first">大田区限定</div>
            <div className="header-second">
              ポスティング(チラシ配布)サービス
            </div>
            <hr className="horizontalLine" />
          </div>
          <div className="left-sidebar-content">
            {sidebar.map((v, i) => (
              <div
                key={i}
                className={`sampleDiv ${i === sidebar.length - 1 ? "last" : ""
                  }`}
              >
                <span className="text">{v.text}</span>
                <AiOutlineRight className="icon" />
              </div>
            ))}
          </div>
          <div className="left-sidebar-footer">
            <p className="footer-header">
              ©︎2024 BE Messenger All Rights Reserved
            </p>
          </div>
        </Card>
      </div>
      <div className="content">
      <div className="order-flow-header">ご注文の流れ</div>
        <div className="container">
          <div className="section">
            <div className="step">01</div>
            <h2>配布エリア、部数を指定</h2>
            <p>地図から「町丁目選択」または「おまかせ選択」で配布希望エリアを指定できます。部数は300部〜2,000部まで、100部単位で指定可能です。</p>
            <Image src="layout/images/distribution-1.png" alt="Distribution Info" width={500} height={300} />
          </div>
          <div className="section">
            <div className="step">02</div>
            <h2>ご注文・決済</h2>
            <p>ご注文内容をご確認いただき、問題なければ決済に進んでください。正午までのご注文で、当日〜翌日中に配布が完了します。<br />(正午以降の発注の場合は2日後まで)<br />決済完了後2時間以内に配布員とのマッチングが成立しない場合、ご注文が自動的にキャンセルされますのでご了承ください。</p>
            <Image src="layout/images/distribution-2.png" alt="Distribution Info" width={500} height={300} />
          </div>
          <div className="section">
            <div className="step">03</div>
            <h2>配布物ピッキング</h2>
            <p>あとは待つだけ！翌日までに配布が完了します。</p>
            <Image src="layout/images/distribution-3.png" alt="Distribution Info" width={500} height={300} />
          </div>
        </div>
        <div className="distrubutionDetails">
          <div className="distrubutionDetails-container">
            <h1>ご利用にあたっての注意事項</h1>

            <div className="distrubutionDetails-section">
              <h2>配布エリア・部数について</h2>
              <ul>
                <li>エリア選択時に表示される配布部数は配布効率を考慮し算出されており、選択エリアの全世帯への配布を保証するものではありません。</li>
                <li>配布先住民のご意向による配布拒否、住宅事情の変化、配布日確保、交通事情、天災・天候不良等の事情により選択エリア内の実配布数が配布見込み数以下の場合や区内で同様な状況や事情が生じた場合、部数は、選択エリア近隣に配布されます。</li>
                <li>戸建のみ・マンションのみ等の配布対象物件のご指定はできません。</li>
              </ul>
            </div>

            <div className="distrubutionDetails-section">
              <h2>配布スケジュールについて</h2>
              <ul>
                <li>配布開始日及び配布期間の指定はできかねます。</li>
                <li>配布先住民のご意向による配布拒否、住宅事情の変化、配布日確保、交通事情、天災・天候不良等の事情により、完了予定日までに配布完了できない場合、実配布数での精算又は期間延長にて対応させていただきます。</li>
                <li>お客様の都合により配布物の受け渡しがご送延した場合、完了予定日までの配布ができない場合がございます。お早目にご用意をお願い致します。</li>
              </ul>
            </div>

            <div className="distrubutionDetails-section">
              <h2>配布できる用紙サイズについて</h2>
              <div className="pt-5">
                <Image src="layout/images/paper-size-1.png" alt="Paper Sizes" width={600} height={400} />
              </div>
              <div className="pt-5">
                <Image src="layout/images/paper-size-2.png" alt="Paper Sizes" width={600} height={400} />
              </div>
            </div>
          </div>
        </div>
        <div className="distrubutionDetails-footer">
          <Button className="distrubutionDetails-footer-faqButton" label="よくある質問" icon="pi pi-question-circle" />
          <Button className="distrubutionDetails-footer-contactButton" label="お問い合わせ" icon="pi pi-envelope" />
        </div>
      </div>
      <div className="right-sidebar"></div>
    </div>
  );
};

export default Dashboard;
