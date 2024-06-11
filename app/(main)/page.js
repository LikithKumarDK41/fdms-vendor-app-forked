"use client";

import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

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
        <div className="container">
          <div className="section">
            <div className="step">01</div>
            <h2>配布エリア、部数を指定</h2>
            <p>地図から「町丁目選択」または「おまかせ選択」で配布希望エリアを指定できます。部数は300部〜2,000部まで、100部単位で指定可能です。</p>
            <Image src="layout/images/perspective.png" alt="Distribution Info" width={500} height={300} />
          </div>
          <div className="section">
            <div className="step">02</div>
            <h2>ご注文・決済</h2>
            <p>ご注文内容をご確認いただき、問題なければ決済に進んでください。正午までのご注文で、当日〜翌日中に配布が完了します。<br />(正午以降の発注の場合は2日後まで)<br />決済完了後2時間以内に配布員とのマッチングが成立しない場合、ご注文が自動的にキャンセルされますのでご了承ください。</p>
            <Image src="layout/images/perspective.png" alt="Distribution Info" width={500} height={300} />
          </div>
          <div className="section">
            <div className="step">03</div>
            <h2>配布物ピッキング</h2>
            <p>あとは待つだけ！翌日までに配布が完了します。</p>
            <Image src="layout/images/perspective.png" alt="Distribution Info" width={500} height={300} />
          </div>
        </div>
      </div>
      <div className="right-sidebar"></div>
    </div>
  );
};

export default Dashboard;
