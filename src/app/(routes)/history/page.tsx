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
				<div className="px-3.5 mt-9 text-3xl font-extrabold">ประวัติความเป็นมา</div>
				<div className="px-3.5 mt-8">
					แผนกเทคโนโลยีคอมพิวเตอร์ของวิทยาลัยอาชีวศึกษาเทคโนโลยีฐานวิทยาศาสตร์ (ชลบุรี) ก่อตั้งขึ้นเพื่อรองรับความต้องการด้านการศึกษาในสาขาเทคโนโลยีสารสนเทศและคอมพิวเตอร์ โดยมุ่งเน้นการพัฒนาทักษะและความรู้ของนักเรียนให้สอดคล้องกับความต้องการของตลาดแรงงานและการพัฒนาเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว แผนกนี้เปิดสอนหลักสูตรระดับประกาศนียบัตรวิชาชีพ (ปวช.) ในสาขาวิชาเทคโนโลยีคอมพิวเตอร์และสารสนเทศ และสาขาวิชาเทคโนโลยีธุรกิจดิจิทัล รวมถึงหลักสูตรระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) ในสาขาวิชาเทคโนโลยีธุรกิจดิจิทัล เพื่อเตรียมความพร้อมให้นักเรียนสามารถปรับตัวและประยุกต์ใช้ความรู้ในสภาพแวดล้อมการทำงานที่แท้จริง ตลอดระยะเวลาที่ผ่านมา แผนกเทคโนโลยีคอมพิวเตอร์ได้มุ่งมั่นในการพัฒนาหลักสูตรและการเรียนการสอน โดยเน้นการเรียนรู้ผ่านโครงงาน (Project-Based Learning) และการฝึกปฏิบัติจริง เพื่อให้นักเรียนมีความเชี่ยวชาญและพร้อมเผชิญกับความท้าทายในสายงานเทคโนโลยีสารสนเทศ นอกจากนี้ แผนกยังส่งเสริมให้นักเรียนเข้าร่วมการแข่งขันและกิจกรรมต่าง ๆ เพื่อพัฒนาทักษะและประสบการณ์ เช่น การประกวดโครงงานวิทยาศาสตร์และเทคโนโลยี ซึ่งนักเรียนของแผนกได้รับรางวัลและความสำเร็จในหลายเวที ด้วยความมุ่งมั่นในการพัฒนาทั้งด้านวิชาการและวิชาชีพ แผนกเทคโนโลยีคอมพิวเตอร์ของวิทยาลัยอาชีวศึกษาเทคโนโลยีฐานวิทยาศาสตร์ (ชลบุรี) ยังคงเป็นผู้นำในการผลิตบุคลากรที่มีคุณภาพ พร้อมตอบสนองต่อความต้องการของอุตสาหกรรมและสังคมในยุคดิจิทัล
				</div>
			</div>
		</>
	);
}
