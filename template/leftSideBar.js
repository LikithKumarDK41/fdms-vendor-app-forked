import { Button } from "@/components";
import { Card } from "primereact/card";
import { useTranslation } from "react-i18next";
import { AiOutlineRight } from "react-icons/ai";

export const LeftSideBar= ()=>{
  const { t } = useTranslation();

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
      ];
      return (
       <>
        <div className="left-sidebar h-full">
        <Card className="sidebar-card relative flex flex-col flex-grow">
          <div className="left-sidebar-header">
            <div className="logoContainer">
              <img
                src="/layout/images/logo.png"
                alt="logo"
                className="w-3 h-auto"
              />
            </div>
            <hr className="horizontalLine" />
            <div className="header-first">大田区限定</div>
            <div className="header-second">
              ポスティング(チラシ配布)サービス
            </div>
            <hr className="horizontalLine" />
          </div>
          <div className="mb-3 mt-3">
            <Button
              parentClassName="w-full shadow-1"
              buttonProps={{
                text: t("start_ordering"),
                forward: true,
                iconPos: "right",
                buttonClass: "w-full userGuide-button h-auto",
              }}
            />
          </div>
          <div className="left-sidebar-content flex-grow">
            {sidebar.map((v, i) => (
              <div
                key={i}
                className={`sampleDiv ${
                  i === sidebar.length - 1 ? "last" : ""
                }`}
              >
                <span className="text">{v.text}</span>
                <AiOutlineRight className="icon" />
              </div>
            ))}
          </div>
          <div className="left-sidebar-footer absolute bottom-[20px] 2xl:bottom-[25px] left-0 w-full">
            <p className="footer-header text-center">
              ©︎2024 BE Messenger All Rights Reserved
            </p>
          </div>
        </Card>
      </div>
       </>
      )

}