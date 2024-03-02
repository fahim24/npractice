import Link from "next/link";
import React from "react";

export default function Blogs() {
	const blogs = [
		{
			id: 1,
			title: "Blog 1",
			description: "Blog 1 description",
		},
		{
			id: 2,
			title: "Blog 2",
			description: "Blog 2 description",
		},
		{ id: 3, title: "Blog 3", description: "Blog 3 description" },
	];
	return (
		<main className="mt-20">
			<h2 className="text-2xl font-bold">Blogs</h2>
			<ul className="my-5">
				{blogs.map((blog) => (
					<li className="mb-3" key={blog.id}>
						<Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
