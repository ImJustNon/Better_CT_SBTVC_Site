import Link from "next/link";
import React from "react";
import TiktokIcon from "./icons/Tiktok.icon";


export default function HeaderComponent({className}: {className?: string}): React.JSX.Element {
    return (
        <>
            <div className={`${className} w-full flex py-4 bg-[#222222]`}>
                <div className="container mx-auto max-w-6xl flex flex-row justify-end lg:justify-between px-8 lg:px-0">
                    <Link href={"https://sbtvc.ac.th"} target="_blank" className="hidden lg:flex text-sm text-[#ababab] hover:text-white hover:underline duration-150 cursor-pointer">
                        Science-Based Technology Vocational College (Chonburi)
                    </Link>
                    <div className="flex flex-row text-sm text-[#ababab] gap-5">
                        <Link href={"https://www.facebook.com/CT.SBTVC"} target="_blank" className="hover:text-white hover:underline duration-150 cursor-pointer">
                            <i className="fa-brands fa-facebook"></i> Facebook : ct.sbtvc
                        </Link>
                        <Link href={"https://www.tiktok.com/@ct.sbtvc"} target="_blank" className="hover:text-white hover:underline duration-150 cursor-pointer">
                            <i className="fa-brands fa-tiktok"></i> Tiktok : @ct.sbtvc
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}