/* eslint-disable no-irregular-whitespace */
import toast from "react-hot-toast";
import { isObject, isArray } from "lodash";
import i18n from "@/utils/i18n";


/**
 * Function help to display error messages on toast
 * @param {*} error 
 * @param {*} key 
 * @param {*} position 
 */
export const toastDisplay = (response, key, position = "top-right", rawMsgType) => {
    if (response && response?.data && response?.status) {
        const { status, data } = response;
        if (status != 401 && status != 403) {
            if (data.success) {
                if (key == 'import' && status == 206 && response?.data?.error_path) {
                    toast.success(() => (
                        <div>
                            <a href={response?.data?.error_path} target="_blank" style={{ textDecoration: "underline" }}>
                                {response?.data?.message}
                            </a>
                        </div>
                    ), {
                        position: position,
                    });
                } else {
                    toast.success(data?.message, {
                        position: position,
                    });
                }
            } else {
                if (key == 'import' && status == 422) {
                    if (response?.data?.error_path) {
                        toast.error(() => (
                            <div>
                                <a href={data?.error_path} target="_blank" style={{ textDecoration: "underline" }}>
                                    {data?.message}
                                </a>
                            </div>
                        ), {
                            position: position,
                        });
                    } else {
                        if (!isArray(data?.message)) {
                            toast.error(data?.message, {
                                position: "top-right",
                            });
                        }
                    }
                } else if (status == 422) {
                    if (isObject(data?.message)) {
                        let errorMessages = Object.values(data?.message);
                        let errorString = errorMessages.join('.')
                        let errorArray = errorString.split(".");
                        errorArray = errorArray.filter(message => message.trim() !== "");
                        let formattedErrorMessage = errorArray
                            .map((message, index) => {
                                return `${message.trim()}`;
                            })
                            .join("\n");
                        toast.error(formattedErrorMessage, {
                            position: position,
                        });
                    } else {
                        if (!isArray(data?.message)) {
                            toast.error(data?.message, {
                                position: "top-right",
                            });
                        }
                    }
                } else {
                    if (!isArray(data?.message)) {
                        toast.error(data?.message, {
                            position: "top-right",
                        });
                    }
                }
            }
        }
    } else {
        if (rawMsgType == 'success') {
            toast.success(response, {
                position: "top-right",
            });
        } else {
            toast.error(response, {
                position: "top-right",
            });
        }
    }
}


/**
 * hiding the background scroll when modal is open
 */
export const hideOverFlow = () => {
    document.body.style.overflow = 'hidden';
}


/**
 * enabling the background scroll when modal is closed
 */
export const showOverFlow = () => {
    document.body.style.overflow = 'auto';
}


/**
 * Change language function 
 * @param {*} lng 
 */
export const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};