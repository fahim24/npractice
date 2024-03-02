"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
	const pathName = usePathname();
	return (
		<nav className="my-2 flex justify-between items-center">
			<div className="text-2xl font-bold text-blue-600">
				<Link href="/">Logo</Link>
			</div>
			<ul className="flex gap-5">
				<li className="hover:text-blue-400">
					<Link className={`${pathName == "/" ? "text-blue-500" : ""}`} href="/">
						Home
					</Link>
				</li>
				<li className="hover:text-blue-400">
					<Link className={`${pathName.startsWith("/about") ? "text-blue-500" : ""}`} href="/about">
						About
					</Link>
				</li>
				<li className="hover:text-blue-400">
					<Link className={`${pathName.startsWith("/blogs") ? "text-blue-500" : ""}`} href="/blogs">
						Blogs
					</Link>
				</li>
				<li className="hover:text-blue-400">
					<Link className={`${pathName.startsWith("/posts") ? "text-blue-500" : ""}`} href="/posts">
						Posts
					</Link>
				</li>
			</ul>
		</nav>
	);
}
