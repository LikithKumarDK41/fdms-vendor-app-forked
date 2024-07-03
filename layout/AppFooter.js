import React from 'react';

const AppFooter = () => {

    return (
        <div className="layout-footer">
            <div className="footer-content">
                <div className="logo">
                    <img src="/layout/images/footer-logo.png" alt="Logo" />
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <a href="/townDesignation">ご注文</a>
                        <a href="/order/history">ご注文履歴</a>
                        <a href="/guide">ご利用ガイド</a>
                        <a href="/account">アカウント</a>
                        <a href="/faq">よくある質問</a>
                    </div>
                    <div className="footer-column">
                        <a href="/inquiry">お問い合わせ</a>
                        <a href="#">運営会社について</a>
                        <a href="/privacyPolicy">個人情報保護方針</a>
                        <a href="/termsOfService">利用規約</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©2024 BE Messenger All Rights Reserved</p>
            </div>
        </div>
    );
};

export default AppFooter;