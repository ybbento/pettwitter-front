import {
	Heading,
	Text,
	Input,
	FormLabel,
	InputGroup,
	Button,
	InputRightElement,
} from "@chakra-ui/react";

import { forwardRef, useState } from "react";

import { BiHide, BiShow } from "react-icons/bi";

const Inputs = forwardRef((props, ref) => {
	const { children, password, placeholder } = props;
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<>
			<FormLabel
				fontSize={"14px"}
				lineHeight={"16px"}
				fontWeight={"600"}
				mb={"8px"}
				mt={"32px"}
				alignItems={"center"}
			>
				{children}
			</FormLabel>
			<InputGroup
				width={"100%"}
				height="40px"
				maxW={"368px"}
				focusBorderColor="#00ACC1"
			>
				<Input
					border="1px solid"
					borderRadius={"4px"}
					borderColor="#757575"
					// border={"none"}
					placeholder={placeholder}
					width={"100%"}
					pl={"8px"}
					pr={"8px"}
					fontSize={"16px"}
					lineHeight="24px"
					type={password & show ? "password" : "text"}
					ref={ref}
				/>
				<InputRightElement alignSelf={"center"} height={"100%"}>
					<Button
						display={password ? "inline" : "none"}
						onClick={handleClick}
						padding={0}
						border={"none"}
						backgroundColor="transparent"
						pr={"10px"}
					>
						{show ? <BiShow /> : <BiHide />}
					</Button>
				</InputRightElement>
			</InputGroup>
		</>
	);
});

export default Inputs;
