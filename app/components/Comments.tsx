import React from "react";

export default async function Comments({ cPromise }: any) {
	const comments = await cPromise;

	return (
		<div className="mt-10">
			<h5>Comments</h5>
			<ul className="mt-5">
				{comments.map((comment: { id: number; body: string }, i: number) => (
					<li className="mb-3" key={comment.id}>
						Comment {i + 1}: {comment.body}
					</li>
				))}
			</ul>
		</div>
	);
}
