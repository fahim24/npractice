import next from "next";
import { revalidateTag } from "next/cache";

export default async function getPostComments(id: string) {
	const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
		next: {
			revalidate: 60,
		},
	});
	if (!result.ok) {
		throw new Error("No data Found");
	}

	return result.json();
}
