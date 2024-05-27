import React, {
    forwardRef,
    useContext,
    useImperativeHandle,
    useRef,
} from "react";
import _ from "lodash";
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';
import Image from 'next/image';

import { LayoutContext } from "@/layout/context/layoutcontext";

const AppTopbar = forwardRef((props, ref) => {
    const {
        onMenuToggle,
    } = useContext(LayoutContext);

    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
    }));

    /**
     * App top bar right view
     */
    const topBarRight = (
        <div ref={topbarmenuRef} className="right-icons">
            <div class="cart-icon">
                <FiShoppingCart />
            </div>
            <div class="profile-icon">
                <FiUser />
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <div className="layout-topbar">
                <div class="left-icons">
                    <div class="hamburger-icon">
                        <button
                            ref={menubuttonRef}
                            type="button"
                            onClick={onMenuToggle}
                        >
                            <FiMenu />
                        </button>
                    </div>
                    <div class="logo-container">
                        <Image src="/layout/images/mobile-logo.png" alt="Logo" width={100} height={100} />
                    </div>
                </div>
                {topBarRight}
            </div>
        </React.Fragment>
    );
});

AppTopbar.displayName = "AppTopbar";
export default AppTopbar;
