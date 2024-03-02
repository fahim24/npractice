import Link from "next/link";
import React from "react";

export default function Aboutlayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="grid grid-cols-[15%_85%]">
			<nav className="my-10 mr-10 border-r border-solid border-white h-full">
				<ul className="flex flex-col gap-5">
					<li className="hover:text-blue-400">
						<Link href="/about/mission">Mission</Link>
					</li>
					<li className="hover:text-blue-400">
						<Link href="/about/vision">Vision</Link>
					</li>
				</ul>
			</nav>
			{children}
		</div>
	);
}
