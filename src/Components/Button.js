import { Button } from "@chakra-ui/react";

const SignBtn = (props) => {
	const { children } = props;
	return (
		<Button
			w={"100%"}
			maxW={"368px"}
			h={"40px"}
			bgColor={"#00ACC1"}
			color={"white"}
			borderRadius={"4px"}
			border={"none"}
			mt={"40px"}
		>
			{children}
		</Button>
	);
};

export default SignBtn;
