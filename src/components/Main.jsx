import React from "react";

export default function Main(props) {
	const { data } = props;
	return (
		<div className="flex flex-col w-full">
			<img
				className="w-full h-full object-cover min-w-full"
				src={data?.hdurl}
				alt={data?.title || "Universe image"}
			/>
		</div>
	);
}
