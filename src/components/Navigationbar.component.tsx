"use client";

import Image from "next/image";
import React from "react";
import ct_logo from "../assets/ct_logo.png";
import sbtvc_logo from "../assets/sbtvc_logo.png";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import SlideNavigationMenuComponent from "./SlideNavigationMenu.component";
import { useDisclosure } from "@chakra-ui/react";

export default function NavigationbarComponent({ className }: { className?: string }): React.JSX.Element {
    
    const slideNavigationMenuDisclosure = useDisclosure();
    const slideNavigationMenuIsOpen = slideNavigationMenuDisclosure.isOpen;
    const slideNavigationMenuOnOpen = slideNavigationMenuDisclosure.onOpen;
    const slideNavigationMenuOnClose = slideNavigationMenuDisclosure.onClose;

    return (
        <>
            <div className={`${className} w-full`}>
                <div className="px-8 lg:px-0 container mx-auto max-w-6xl py-1.5 flex flex-row items-center duration-300">
                    <Link href={"/"} className="flex flex-row gap-3 items-center">
                        <Image  className="h-[65px] w-fit py-1" src={ct_logo} alt="ct_logo" />
                        <div className="w-[1px] bg-[#d0d0d0] h-12"></div>
                        <Image  className="h-[70px] w-fit py-1" src={sbtvc_logo} alt="sbtvc_logo" />
                    </Link>
                    <div className="hidden lg:flex grow text-sm flex-row items-center justify-end">
                        <div className="relative flex flex-row items-center px-3 group ">
                            <div className="flex flex-col group items-center">
                                <div className="py-5 cursor-pointer">
                                    เกี่ยวกับ CT
                                </div>
                                <div className="h-[2px] bg-[#ff6a00] rounded-full w-0 group-hover:w-full transition-all duration-300"></div>
                            </div>
                            <ChevronDown size={15} strokeWidth={3} className="mb-1 ml-2" />
                            <div className="absolute top-[70px] left-0 w-52 bg-[#ffff] shadow-lg rounded-sm z-10 flex flex-col overflow-visible transition-all duration-300 origin-top transform opacity-0 invisible scale-y-95 -translate-y-2 max-h-0 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-hover:translate-y-0 group-hover:max-h-screen">
                                <Link href={"/history"} className="block pl-7 pt-5 pb-2 text-black hover:text-[#ff6a00] duration-300">ประวัติแผนก</Link>
                                <Link href={"/mission"} className="block pl-7 pt-2 pb-5 text-black hover:text-[#ff6a00] duration-300">วิสัยทัศน์และพันธกิจ</Link>
                            </div>
                        </div>
                        <Link href={"/#"} className="flex flex-col group items-center px-3 duration-300">
                            <div className="py-5 cursor-pointer">
                                หลักสูตรการเรียนการสอน
                            </div>
                            <div className="h-[2px] bg-[#ff6a00] rounded-full w-0 group-hover:w-full duration-300"></div>
                        </Link>
                        <Link href={"/#"} className="flex flex-col group items-center px-3 duration-300">
                            <div className="py-5 cursor-pointer">
                                บุคลากร
                            </div>
                            <div className="h-[2px] bg-[#ff6a00] rounded-full w-0 group-hover:w-full duration-300"></div>
                        </Link>
                        <Link href={"/#"} className="flex flex-col group items-center px-3 duration-300">
                            <div className="py-5 cursor-pointer">
                                ทำเนียบรุ่น(ฐว.)
                            </div>
                            <div className="h-[2px] bg-[#ff6a00] rounded-full w-0 group-hover:w-full duration-300"></div>
                        </Link>
                        <Link href={"/#"} className="flex flex-col group items-center px-3 duration-300">
                            <div className="py-5 cursor-pointer">
                                โครงงาน
                            </div>
                            <div className="h-[2px] bg-[#ff6a00] rounded-full w-0 group-hover:w-full duration-300"></div>
                        </Link>
                        <Link href={"/#"} className="flex flex-col group items-center px-3 duration-300">
                            <div className="py-5 cursor-pointer">
                                กิจกรรมของแผนก
                            </div>
                            <div className="h-[2px] bg-[#ff6a00] rounded-full w-0 group-hover:w-full duration-300"></div>
                        </Link>
                        
                    </div>
                    <div className="flex lg:hidden grow flex-row items-center justify-end">
                        <button className="p-5 cursor-pointer" onClick={() => slideNavigationMenuOnOpen()}>
                            <Menu size={35} />
                        </button>
                    </div>
                </div>
            </div>
            <SlideNavigationMenuComponent isOpen={slideNavigationMenuIsOpen} onOpen={slideNavigationMenuOnOpen} onClose={slideNavigationMenuOnClose} />
        </>
    );
}