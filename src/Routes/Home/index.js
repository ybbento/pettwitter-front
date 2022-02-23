import {
	Box,
	Button,
	Flex,
	Image,
	Spacer,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

import profilePic from "../../images/profilePic.png";
import gatomalhadoPix from "../../images/gatomalhadoPix.png";
const Home = () => {
	let [value, setValue] = useState("");

	let handleInputChange = (e) => {
		let inputValue = e.target.value;
		setValue(inputValue);
	};
	return (
		<>
			<Flex
				flexDirection={"column"}
				width={"100%"}
				height={"202px"}
				mt={"34px"}
			>
				<Flex flexDirection={"row"} alignItems={"self-start"}>
					<Image
						src={profilePic}
						pl={"27px"}
						pr={"8px"}
						width={"48px"}
						height={"48px"}
					></Image>
					<Textarea
						value={value}
						onChange={handleInputChange}
						placeholder="Como foi seu dia?"
						width={"80%"}
						maxW={"300px"}
						height={"100px"}
						padding={"8px"}
						border={"none"}
					></Textarea>
				</Flex>
				<Flex
					flexDirection={"row"}
					alignItems={"center"}
					pr={"30px"}
					pt={"8px"}
				>
					<Spacer></Spacer>
					<Text margin={"8px"} color={"#828282"}>
						{value.length}/140
					</Text>
					<Button
						bgColor={"#00ACC1"}
						color={"white"}
						width={"92px"}
						height={"40px"}
						borderRadius={"10px"}
						border={"none"}
						fontSize={"15px"}
					>
						Petwittar
					</Button>
				</Flex>
			</Flex>
			<Box width={"100%"} height={"10px"} backgroundColor={"#e7ecf0"}>
				{""}
			</Box>
			<Box>
				<Flex>
					<Image src={gatomalhadoPix} mt={"16px"} ml={"30px"}></Image>
				</Flex>
			</Box>
		</>
	);
};

export default Home;
