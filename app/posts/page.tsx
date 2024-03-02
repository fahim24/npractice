import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

export default async function Posts() {
	const posts = await getAllPosts();
	return (
		<main className="mt-20">
			<h2 className="text-2xl font-bold">Blogs</h2>
			<ul className="my-5">
				{posts.map((post: { id: number; title: string }) => (
					<li className="mb-3" key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
