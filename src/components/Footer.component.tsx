import Link from "next/link";
import React from "react";
import TiktokIcon from "./icons/Tiktok.icon";
import Image from "next/image";
import ct_banner from "../assets/ct_banner.png";
import { MailCheck, MapPin, Phone } from "lucide-react";

export default function FooterComponent(): React.JSX.Element {
    return (
        <>
            <div className="w-full flex flex-col justify-start bg-[#111111] pt-6">
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-start py-5 px-3.5 gap-8">
                    <div className="flex flex-col max-w-xs mb-8">
                        <Image src={ct_banner} alt="ct_logo" className="h-16 w-fit mb-7" />
                        <div className="flex flex-row items-center py-2">
                            <div className="w-[20px]">
                                <Phone className="text-[#ff6a00]" size={16} />
                            </div>
                            <div className="text-[#999999] ml-3 text-md">+663 844 7241</div>
                        </div>
                        <div className="flex flex-row items-start py-2">
                            <div className="w-[20px]">
                                <MapPin className="text-[#ff6a00] mt-1" size={16} />
                            </div>
                            <div className="text-[#999999] ml-3 text-wrap text-md">เลขที่ 37 หมู่ 3 ตำบลบ้านเก่า อำเภอพานทอง จังหวัดชลบุรี รหัสไปรษณีย์ 20160</div>
                        </div>
                        <div className="flex flex-row items-center py-2">
                            <div className="w-[20px]">
                                <MailCheck className="text-[#ff6a00]" size={16} />
                            </div>
                            <div className="text-[#999999] ml-3 text-md">sbtvc_2008@hotmail.com</div>
                        </div>
                        <div className="flex flex-row items-center py-2">
                            <div className="w-[20px]">
                                <i className="fa-brands fa-line text-[#ff6a00] fa-sm"></i>
                            </div>
                            <div className="text-[#999999] ml-3 text-md">@ct.sbtvc</div>
                        </div>
                        <div className="flex flex-row items-center gap-5 mt-5">
                            <Link href={""} target="_blank">
                                <i className="fa-brands fa-facebook fa-lg text-[#999999] hover:text-[#ff6a00] duration-300"></i>
                            </Link>
                            <Link href={""} target="_blank">
                                <i className="fa-brands fa-tiktok fa-xl text-[#999999] hover:text-[#ff6a00] duration-300"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="text-white text-lg font-extrabold mb-7">หลักสูตรการศึกษา</div>
                        <Link href={"#"} target="_blank" className="text-[#999999] hover:text-[#ff6a00] duration-300 text-md">ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</Link>
                        <Link href={"#"} target="_blank" className="text-[#999999] hover:text-[#ff6a00] duration-300 mt-4 text-md">ระดับประกาศนียบัตรวิชาชีพ (ปวช.)</Link>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="text-white text-lg font-extrabold mb-7">สมัครเรียน</div>
                        <Link href={"#"} target="_blank" className="text-[#999999] hover:text-[#ff6a00] duration-300 text-md">ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</Link>
                        <Link href={"#"} target="_blank" className="text-[#999999] hover:text-[#ff6a00] duration-300 mt-4 text-md">ระดับประกาศนียบัตรวิชาชีพ (ปวช.)</Link>
                    </div>
                </div>
                
                {/* Line */}
                <div className="container mx-auto max-w-6xl mb-10">
                    <div className="mx-3.5 text-center md:text-end text-[#999999] mb-2 text-xs">Made with 🧡 by The Greatest Developer That's Ever Lived</div>
                    <div className="mx-3.5 bg-[#999999] h-[1px] rounded-full"></div>
                </div>

                {/* Bottom info */}
                <div className="container mx-auto max-w-6xl mb-10 px-3.5">
                    <div className="text-[#999999] text-md text-center md:text-start">Department of Computer Technology, Science-Based Technology Vocational College (Chonburi)</div>
                </div>
            </div>
        </>
    );
}