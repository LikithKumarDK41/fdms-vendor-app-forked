'use client'

import React from 'react';
import { Card } from 'primereact/card';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

const Dashboard = () => {
  const sidebar = [
    {
      text: "ご注文履歴"
    },
    {
      text: "ご利用ガイド"
    },
    {
      text: "よくある質問"
    },
    {
      text: "お問い合わせ"
    },
    {
      text: "利用規約"
    },
    {
      text: "利用規約"
    },
    {
      text: "利用規約"
    },
    {
      text: "利用規約"
    },
    {
      text: "利用規約"
    },
    {
      text: "利用規約"
    },
    {
      text: "利用規約"
    },
    {
      text: "sssss"
    },
  ]

  return (
    <div className="dashboard-container">
      <div className="top-nav-bottom-view">
        【大田区限定】ポスティング(チラシ配布)サービス
      </div>
      <div className="left-sidebar">
        <Card className="sidebar-card">
          <div className="left-sidebar-header">
            <div className="logoContainer">
              <Image src="/layout/images/logo.png" alt="Logo" width={50} height={50} />
            </div>
            <hr className="horizontalLine" />
            <div className="header-first">大田区限定</div>
            <div className="header-second">ポスティング(チラシ配布)サービス</div>
            <hr className="horizontalLine" />
          </div>
          <div className="left-sidebar-content">
            {sidebar.map((v, i) => (
              <div
                key={i}
                className={`sampleDiv ${i === sidebar.length - 1 ? "last" : ''}`}
              >
                <span className="text">{v.text}</span>
                <AiOutlineRight className="icon" />
              </div>
            ))}
          </div>
          <div className="left-sidebar-footer">
            <p className="footer-header">©︎2024 BE Messenger All Rights Reserved</p>
          </div>
        </Card>
      </div>
      <div className="content">
        <h1>Scrollable Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
          vitae massa.
        </p>
        {/* Add more content to make the middle section scrollable */}
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>Additional content to enable scrolling... {i + 1}</p>
        ))}
      </div>
      <div className="right-sidebar">

      </div>
    </div>
  );
};

export default Dashboard;