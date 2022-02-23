import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
			</Routes>
		</>
	);
}

export default App;
