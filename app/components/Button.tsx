"use client";
import React from "react";

export default function Button() {
	return (
		<button
			className="mt-5 bg-green-500 font-bold text-white px-8 py-3 rounded-lg"
			onClick={() => console.log("Clicked")}
		>
			Click Me!
		</button>
	);
}
