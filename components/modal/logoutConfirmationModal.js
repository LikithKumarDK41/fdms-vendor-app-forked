import React from "react"
import { Dialog } from 'primereact/dialog';

import {Button} from "../button";

export default function LogoutConfirmationModal(props){
    const { open, close } = props && props;

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
                           <span><i className="pi pi-sign-out text-primary text-2xl" ></i></span>
                        </div>
                        <div className="font-bold text-center">
                        ログアウトしてよろしいですか？
                        </div>
                        <div className="mt-4 flex gap-2">
                        <div className="w-full">
                                <Button buttonProps={{
                                    buttonClass: "w-12 back-button",
                                    text:  'いいえ',
                                    onClick: () => close(),
                                }} 
                                parentClassName="back-button"
                                />
                            </div>
                            <div className=" w-full">
                                <Button buttonProps={{
                                    buttonClass: "w-12",
                                    type: "submit",
                                    text: 'はい',
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}