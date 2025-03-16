"use-client"

import FooterComponent from "@/components/Footer.component";
import HeaderComponent from "@/components/Header.component";
import NavigationbarComponent from "@/components/Navigationbar.component";
import VideoBackgroundComponent from "@/components/VideoBackground.component";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <>
	  	<HeaderComponent />
        <div className="min-h-[95vh] flex flex-col relative">
			<NavigationbarComponent className="absolute top-0 left-0 right-0 z-10 !text-white" />

			<div className="relative flex-1">
				{/* Gradient overlay for better text readability */}
				<div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 to-transparent z-0"></div>
				{/* Video Background */}
				<VideoBackgroundComponent src="/home_bg_vdo.mp4" fallbackImageSrc="/home_bg_vdo.mp4" />

				<div className="absolute inset-0 bg-black/20">
					<div className="container h-full mx-auto max-w-6xl flex flex-col justify-center lg:pl-16 scale-75 lg:scale-100">
						<div className="text-xl font-semibold text-white">Computer Technology</div>
						<div className="text-7xl font-extrabold text-white mt-1.5">CT SBTVC</div>
						<div className="text-xl font-normal text-white mt-1.5">แผนกเทคโนโลยีคอมพิวเตอร์ ฐานวิทยาศาสตร์ชลบุรี</div>
						<button className="mt-3 px-10 py-3 font-normal text-lg text-white bg-[#ff6a00] hover:bg-[#ff8630] active:bg-[#fbaa71] rounded-sm w-fit cursor-pointer duration-300">
							สมัครเข้าศึกษาต่อ
						</button>
					</div>
				</div>
			</div>

        </div>
		<FooterComponent />
      </>
  );
}
