import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Sidebar(props) {
	const { handleToggleModal, data } = props;
	return (
		<div className="fixed inset-0 flex flex-col z-10 sm:relative sm:inset-[unset] sm:min-w-[30%] sm:max-w-[500px]">
			<div className="absolute inset-0 bg-[#030615] opacity-60 sm:opacity-100"></div>
			<div className="z-20 relative flex h-full maxw-[800px] w-4/5 sm:w-full ml-auto flex-col gap-4 p-4 sm:m-[unset] justify-between pb-8">
				<div className="overflow-y-auto mb-5 pr-4">
					<h2 className="mb-4 text-xl font-semibold">{data?.title}</h2>
					<p className="mb-2 text-gray-500">{data?.date}</p>
					<p className="text-gray-300 text-justify">{data?.explanation}</p>
				</div>
			</div>
			<button
				className="w-max absolute right-0 bottom-0 mr-5 mb-5 z-50"
				onClick={() => handleToggleModal()}
			>
				<FaArrowRightLong className="text-2xl" />
			</button>
		</div>
	);
}
