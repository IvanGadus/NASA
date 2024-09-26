import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { ImSpinner6 } from "react-icons/im";

export default function App() {
	const [showModal, setShowModal] = useState(false);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
		const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

		const today = new Date().toDateString();
		const localKey = `NASA-${today}`;

		if (localStorage.getItem(localKey)) {
			const apiData = JSON.parse(localStorage.getItem(localKey));
			setData(apiData);
			setLoading(false);
			console.log(`fetch from cache`);
			console.log(apiData);
			return;
		}
		localStorage.clear();

		try {
			const res = await fetch(url);
			const apiData = await res.json();
			localStorage.setItem(localKey, JSON.stringify(apiData));
			console.log(`fetch from API`);

			setData(apiData);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleToggleModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<div className="w-screen h-screen bg-gray-700 flex relative">
			{data ? (
				<Main data={data} />
			) : (
				<div className="flex w-full justify-center items-center">
					<ImSpinner6 className="text-4xl animate-spin" />
				</div>
			)}
			{showModal && (
				<Sidebar handleToggleModal={handleToggleModal} data={data} />
			)}
			{!showModal && !loading && (
				<Footer handleToggleModal={handleToggleModal} data={data} />
			)}
		</div>
	);
}
