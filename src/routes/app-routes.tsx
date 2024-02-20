import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/pages";
import NotFound from "@/pages/not-found";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />

				{/* PAGE NOT FOUND */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
