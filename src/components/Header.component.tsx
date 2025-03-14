import React from "react";

export default function HeaderComponent(): React.JSX.Element {
    return (
        <>
            <div className="w-full flex py-4 bg-[#222222]">
                <div className="container mx-auto max-w-6xl flex flex-row justify-end lg:justify-between px-8 lg:px-0">
                    <div className="hidden lg:flex text-sm text-[#ababab] hover:text-white hover:underline duration-150 cursor-pointer">Science-Based Technology Vocational College (Chonburi)</div>
                    <div className="flex flex-row text-sm text-[#ababab] gap-5">
                        <div className="hover:text-white hover:underline duration-150 cursor-pointer">
                            ผู้สนใจติดต่อ
                        </div>
                        <div className="hover:text-white hover:underline duration-150 cursor-pointer">
                            นักศึกษาปัจจุบัน
                        </div>
                        <div className="hover:text-white hover:underline duration-150 cursor-pointer">
                            ศิษย์เก่า
                        </div>
                        <div className="hover:text-white hover:underline duration-150 cursor-pointer">
                            บุคลากร
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}