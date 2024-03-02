import React from "react";

export default function Blog({ params }: { params: { id: string } }) {
	const { id } = params;

	return (
		<div className="mt-20">
			<p>Blog ID: {id}</p>
		</div>
	);
}
