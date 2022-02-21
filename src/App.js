import React from "react";
import { Routes, Route } from "react-router-dom";
import {
	Home,
	Portfolio,
	FotoProdukty,
	Ofert,
	Contact,
	Error,
	Animation,
} from "./pages";
import { Navbar } from "./components";

const App = () => {
	return (
		<>
			<Animation />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/foto-produkty" element={<FotoProdukty />} />
				<Route path="/oferta" element={<Ofert />} />
				<Route path="/kontact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default App;
