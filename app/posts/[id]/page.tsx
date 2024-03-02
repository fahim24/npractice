import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import React, { Suspense } from "react";

type ParamsProps = {
	params: { id: string };
};

export async function generateMetadata({ params }: ParamsProps) {
	const { id } = params;
	const post = await getPost(id);

	return {
		title: post.title,
		description: post.body,
	};
}

export default async function Post({ params }: ParamsProps) {
	const { id } = params;
	const postPromise = getPost(id);
	const commentsPromise = getPostComments(id);

	// parallel loading
	// const [post, Comments] = await Promise.all([postPromise, commentsPromise]);

	// progressive loading
	const post = await postPromise;

	return (
		<div className="mt-20">
			<div>
				<p>Post ID: {post.id}</p>
				<p>Post Title: {post.title}</p>
				<p>Post Description: {post.body}</p>
			</div>

			<Suspense fallback="Loading Comments...">
				<Comments cPromise={commentsPromise} />
			</Suspense>
		</div>
	);
}

export async function generateStaticParams() {
	const posts = await getAllPosts();

	return posts.map((post: { id: number }) => ({
		id: post.id.toString(),
	}));
}
