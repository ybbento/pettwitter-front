import { Flex, Link, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Inputs from "../Components/Input";
import PawIcon from "../Components/PawIcon";
import SignBtn from "../Components/Button";
import { Link as ReachLink } from "react-router-dom";
const Login = () => {
	// const auth = useAuth();  TODO
	const { register, handleSubmit } = useForm();
	const location = useLocation();
	// const navigate = useNavigate();

	// const from = location.state?.from?.pathname || "/";

	// const onSubmit = (event) => {
	// 	event.preventDefault();
	// 	const formData = new FormData(event.currentTarget);
	// 	const email = formData.get("email");
	// 	const password = formData.get("password");
	// 	const data = {
	// 		email,
	// 		password,
	// 	};

	// 	//   auth.login(data, () => {
	// 	//     navigate(from, { replace: true });
	// 	//   });
	// };

	return (
		<>
			<Flex
				flexDirection={"column"}
				ml="36px"
				mr={"36px"}
				mb={"80px"}
				mt={"31.5px"}
			>
				<PawIcon width="76" height="76" ml="72px" margin></PawIcon>
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

				<form onSubmit={handleSubmit()}>
					<Inputs {...register("email")} placeholder="E-mail">
						E-mail
					</Inputs>

					<Inputs {...register("password")} placeholder="Senha" password>
						<Flex
							flexDirection={"row"}
							justifyContent="space-between"
							maxW={"368px"}
						>
							<Text mb={"0"} mt={"0"}>
								Senha
							</Text>{" "}
							{/* <Text > */}
							<Link
								as={ReachLink}
								to="/recuperarsenha"
								m={"0"}
								alignSelf={"flex-end"}
								textAlign={"end"}
								lineHeight={"12px"}
								textDecoration={"underline"}
								color={"#00ACC1"}
							>
								<Text m={"0"} fontSize={"12px"} p={"0"}>
									Esqueci minha senha
								</Text>
							</Link>
							{/* </Text> */}
						</Flex>
					</Inputs>

					<SignBtn>Enviar</SignBtn>

					<Text fontSize={"16px"} mt="24px" mb={"80px"}>
						Ainda não possui uma conta?{" "}
						<Link as={ReachLink} to="/cadastro" color={"#00ACC1"}>
							Cadastrar-se
						</Link>
					</Text>
				</form>
			</Flex>
		</>
	);
};
export default Login;
