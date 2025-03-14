"use client"

import React from "react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { parsePathname } from "@/utils/pasePathname";


export default function BreadcrumbComponent(): React.JSX.Element {
    const pathname: string = usePathname();
    const splitPathname: string[] = pathname.slice(1).split("/");


    return (
        <>
            <div className="w-full flex py-4 bg-[#f3f3f3]">
                <div className="container mx-auto max-w-6xl flex flex-row items-center">
                    <Link href={"/"} className="text-sm mr-2 text-black hover:text-[#ff6a00] cursor-pointer">Home</Link>
                    {splitPathname.map((p: string, i: number) => {
                        return (
                            <div className="flex flex-row items-center" key={i}>
                                <ChevronRight className="mr-2" size={15} color="#b8b8b8" strokeWidth={3} />
                                <Link 
                                    href={`/${splitPathname.slice(0, i + 1).join("/")}`} 
                                    className={`text-sm mr-2 ${i === (splitPathname.length - 1) ? "text-[#999]" : "text-black hover:text-[#ff6a00]"}`}
                                >
                                    {parsePathname(p, "th")}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}