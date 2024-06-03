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
                        <a href="#">ご注文</a>
                        <a href="#">ご注文履歴</a>
                        <a href="#">ご利用ガイド</a>
                        <a href="#">アカウント</a>
                        <a href="#">よくある質問</a>
                    </div>
                    <div className="footer-column">
                        <a href="#">お問い合わせ</a>
                        <a href="#">運営会社について</a>
                        <a href="#">個人情報保護方針</a>
                        <a href="#">利用規約</a>
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