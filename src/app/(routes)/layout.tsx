"use client"

import BreadcrumbComponent from "@/components/Breadcrumb.component";
import FooterComponent from "@/components/Footer.component";
import HeaderComponent from "@/components/Header.component";
import NavigationbarComponent from "@/components/Navigationbar.component";
import React from "react";
import Headroom from "react-headroom";

export default function layout({children}: {children: React.ReactNode}): React.JSX.Element {
    return(
        <>
            <Headroom onPin={() => console.log("OnPin")} onUnfix={() => console.log("OnUnfix")} onUnpin={() => console.log("OnUnpin")}>
                <HeaderComponent />
                <NavigationbarComponent className="bg-white !text-[#333] shadow-sm" />
            </Headroom>
            
            <BreadcrumbComponent />
            {children}
            <FooterComponent />
        </>
    );
}