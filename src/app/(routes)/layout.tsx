import BreadcrumbComponent from "@/components/Breadcrumb.component";
import NavigationbarComponent from "@/components/Navigationbar.component";
import React from "react";

export default function layout({children}: {children: React.ReactNode}): React.JSX.Element {
    return(
        <>
            <NavigationbarComponent className="bg-white text-[#333]" />
            <BreadcrumbComponent />
            {children}
        </>
    );
}