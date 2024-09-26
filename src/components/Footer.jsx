import React from "react";
import { CgLayoutGrid } from "react-icons/cg";
import { FaInfoCircle } from "react-icons/fa";

export default function Footer(props) {
	const { handleToggleModal, data } = props;
	return (
		<footer
			onClick={() => console.log("click")}
			className="fixed bottom-0 left-0 w-full flex items-end gap-4 justify-between p-5"
		>
			<div className="absolute inset-0 bg-gradient-to-t from-[#030615] to-[rgba(255,255,255,0)] -z-10"></div>
			<div>
				<h1 className="text-xl font-extralight text-gray-400">
					Daily universe pictures
				</h1>
				<h2 className="text-2xl font-medium">{data?.title}</h2>
			</div>
			<button className="h-max" onClick={() => handleToggleModal()}>
				<FaInfoCircle className="text-2xl " />
			</button>
		</footer>
	);
}
