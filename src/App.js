import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</>
	);
}

export default App;
