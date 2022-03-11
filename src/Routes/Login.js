import { FormLabel, Input, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Inputs from "../Components/Input";
import PawIcon from "../Components/PawIcon";
const Login = () => {
	// const auth = useAuth();  TODO
	const { register, handleSubmit } = useForm();
	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || "/";

	const onSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const email = formData.get("email");
		const password = formData.get("password");
		const data = {
			email,
			password,
		};

		//   auth.login(data, () => {
		//     navigate(from, { replace: true });
		//   });
	};

	return (
		<div>
			<PawIcon width="76" height="76"></PawIcon>
			<Text
				fontWeight={"700"}
				color={"#00ACC1"}
				fontSize={"36px"}
				lineHeight={"49px"}
				height={"98px"}
				width={"264px"}
			>
				Comece agora. Conecte-se já.
			</Text>

			<Text fontSize={"24px"} lineHeight={"40px"} fontWeight={"600"}>
				Login
			</Text>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Inputs {...register("email")}>E-mail</Inputs>

				<Inputs {...register("password")} password>
					Senha
				</Inputs>

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};
export default Login;
