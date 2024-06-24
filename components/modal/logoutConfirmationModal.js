import React from "react";
import { Dialog } from "primereact/dialog";
import { useTranslation } from "next-i18next";

import { Button } from "@/components/button";

export default function LogoutConfirmationModal(props) {
  const { t } = useTranslation("translation");
  const { open, close,handleLogout } = props && props;

  return (
    <div>
      <Dialog
        className="new-custom-modal"
        visible={open}
        draggable={false}
        blockScroll={true}
        onHide={() => close()}
      >
        <div className={`modal-content`} style={{ padding: "0 0" }}>
          <div className="flex flex-column justify-center">
            <div className="modal-field-bottom-space text-center">
              <span className="logout-icon">
                <i className="pi pi-sign-out text-primary"></i>
              </span>
            </div>
            <div className="font-bold text-[18px] 2xl:text-[1.4vw] text-center">
              {t("logout_confirmation_text")}
            </div>
            <div className="mt-4 flex gap-2">
              <div className="w-full">
                <Button
                  buttonProps={{
                    buttonClass: "w-12 logout-button",
                    text: t("no"),
                    onClick: () => close(),
                  }}
                  parentClassName="back-button"
                />
              </div>
              <div className=" w-full">
                <Button
                  buttonProps={{
                    buttonClass: "w-12 logout-button",
                    type: "submit",
                    text: t("yes"),
                    onClick:handleLogout
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
