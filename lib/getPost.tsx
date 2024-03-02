export default async function getPost(id: string) {
	const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (!result.ok) {
		throw new Error("No data Found");
	}

	return result.json();
}
