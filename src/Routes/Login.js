import { Input, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					email:
					<Input {...register("email")} placeholder="email"></Input>
				</label>
				<label>
					senha:{" "}
					<Input
						{...register("password")}
						placeholder={"senha"}
						type="password"
					></Input>
				</label>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};
export default Login;
