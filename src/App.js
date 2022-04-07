import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cadastro from "./Routes/Cadastro";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";
import RecuperarSenha from "./Routes/RecuperarSenha";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/recuperarsenha" element={<RecuperarSenha />}></Route>
				<Route path="/cadastro" element={<Cadastro />}></Route>
			</Routes>
		</>
	);
}

export default App;
