"use-client"

import NavigationbarComponent from "@/components/Navigationbar.component";
import VideoBackgroundComponent from "@/components/VideoBackground.component";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About(): React.JSX.Element {
	return (
		<>
			<div className="container mx-auto max-w-6xl flex flex-col mb-14">
				<div className="px-3.5 mt-9 text-3xl font-extrabold">วิสัยทัศน์ (Vision)</div>
				<div className="px-3.5 mt-3">
					"มุ่งผลิตนักเทคโนโลยีสารสนเทศที่มีความเชี่ยวชาญทางเทคโนโลยีดิจิทัล สร้างสรรค์นวัตกรรม ตอบโจทย์อุตสาหกรรม 4.0 และสามารถแข่งขันในระดับสากล"	
				</div>
				<div className="px-3.5 mt-9 text-3xl font-extrabold">พันธกิจ (Mission)</div>
				<div className="px-3.5 mt-3">
					พัฒนาหลักสูตรให้ทันสมัย รองรับเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วและตรงตามความต้องการของภาคอุตสาหกรรม เสริมสร้างทักษะปฏิบัติจริง ผ่านการฝึกงาน โครงการวิจัย และการเรียนรู้แบบลงมือทำ ส่งเสริมนวัตกรรมและการพัฒนาเทคโนโลยี ให้ผู้เรียนมีความคิดสร้างสรรค์ และสามารถประยุกต์ใช้เทคโนโลยีสารสนเทศในเชิงธุรกิจและอุตสาหกรรม สร้างเครือข่ายความร่วมมือ กับสถานประกอบการ สถาบันการศึกษา และองค์กรภาครัฐเพื่อพัฒนาคุณภาพการเรียนการสอน พัฒนาทักษะด้านคุณธรรมและจรรยาบรรณวิชาชีพ เพื่อให้ผู้สำเร็จการศึกษามีความรับผิดชอบต่อสังคมและปฏิบัติตามมาตรฐานจริยธรรมวิชาชีพ	
				</div>
			</div>
		</>
	);
}
