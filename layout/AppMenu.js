import React, {
    forwardRef,
    useContext,
    useImperativeHandle,
    useRef,
} from "react";
import { MdSettings } from "react-icons/md";
import { BsHouseGearFill } from "react-icons/bs";
import { FiX } from 'react-icons/fi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import AppMenuitem from '@/layout/AppMenuitem';
import { MenuProvider } from '@/layout/context/menucontext';
import { LayoutContext } from "@/layout/context/layoutcontext";

const AppMenu = forwardRef((props, ref) => {
    const {
        onMenuToggle,
    } = useContext(LayoutContext);

    const menubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
    }));

    // Admin side bar information
    const adminModel = [
        {
            label: "Dashboard",
            icon: <MdSettings size={16} />,
            class: "without-top-element",
            items: [
                {
                    label: "Dashboard",
                    icon: <BsHouseGearFill size={16} />,
                },
            ]
        },
    ];

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
    ];

    return (
        <React.Fragment>
            <div
                className="custom-layout-top-bar"
            >
                <div className="combined-view">
                    <AiOutlineLeft className="icon" />
                    <span className="text">トップへ</span>
                </div>
                <div>
                    <button
                        ref={menubuttonRef}
                        type="button"
                        onClick={onMenuToggle}
                    >
                        <FiX className="icon" />
                    </button>
                </div>
            </div>
            <div className="custom-layout-menu">
                {sidebar.map((v, i) => (
                    <div
                        key={i}
                        className={`menu-item ${i === sidebar.length - 1 ? "last" : ''}`}
                    >
                        <span className="text">{v.text}</span>
                        <AiOutlineRight className="icon" />
                    </div>
                ))}
            </div>
        </React.Fragment>
        // <MenuProvider>
        //     <ul className="layout-menu">
        //         {adminModel.map((item, i) => {
        //             return !item.seperator ? <AppMenuitem item={item} root={true} active={item.active} index={i} key={i} /> : <li className="menu-separator"></li>;
        //         })}
        //     </ul>
        // </MenuProvider>
    );
});

export default AppMenu;
