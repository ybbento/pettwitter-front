import {
	Heading,
	Text,
	Input,
	FormLabel,
	InputGroup,
	Button,
	InputRightElement,
} from "@chakra-ui/react";

import { useState } from "react";
import HideIcon from "./HideIcon";
import ShowIcon from "./ShowIcon";

const Inputs = (props) => {
	const { children, password } = props;
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<>
			<FormLabel
				fontSize={"14px"}
				lineHeight={"16px"}
				fontWeight={"600"}
				mb={"8px"}
			>
				{children}
			</FormLabel>
			<InputGroup
				border="1px solid"
				borderRadius={"4px"}
				borderColor="#757575"
				width={"368px"}
				height="40px"
			>
				<Input
					border={"none"}
					placeholder={children}
					width={"100%"}
					pl={"8px"}
					pr={"8px"}
					fontSize={"16px"}
					lineHeight="24px"
					type={password & show ? "password" : "text"}
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
						{show ? <HideIcon /> : <ShowIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>
		</>
	);
};

export default Inputs;
