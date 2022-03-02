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
import Posts from "../../Components/Posts";
import { IoIosMenu } from "react-icons/io";

import profilePic from "../../images/profilePic.png";

const tempData = [
	{
		id: 1,
		name: "Gato da Akatsuki",
		picture:
			"http://pm1.narvii.com/7368/53026bc6aeba0cefc84eb23aa14f2ba0da9345f3r1-2048-2048v2_uhq.jpg",
		username: "@itachifelino",
		tweet:
			"O empenho em analisar a crescente influência da mídia desafia a capacidade de equalização de alternativas às soluções ortodoxas.",
		postTime: "10s",
	},
	{
		id: 2,
		name: "Uzumaki Cusco",
		picture:
			"https://pbs.twimg.com/profile_images/1314600878339481608/MoNvoDCf_400x400.jpg",
		username: "@cuscohokage",
		tweet:
			"É claro que a execução dos pontos do programa garante a contribuição de um grupo importante na determinação das condições financeiras e administrativas exigidas.",
		postTime: "5min",
	},
	{
		id: 3,
		name: "Cacatua dos cria",
		picture:
			"https://i.pinimg.com/564x/fd/77/fa/fd77fa43c60d3af672459e807cc3b7c8.jpg",
		username: "@2real5g",
		tweet: "Passa um dólar",
		postTime: "15min",
	},
	{
		id: 4,
		name: "Glauber, primo do Jorge",
		picture:
			"http://pm1.narvii.com/7270/7b9c1e0591a749f22530d6ef3bd9bf7583be4bdar1-321-321v2_00.jpg",
		username: "@glauber",
		tweet: "Então tranca a porta",
		postTime: "20min",
	},
	{
		id: 5,
		name: "Jorge, primo do Glauber",
		picture: "https://data.whicdn.com/images/302793971/original.jpg",
		username: "@jorge",
		tweet: "Entrarão na minha casa, roubarão tudo",
		postTime: "25 min",
	},
];

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
				{tempData.map((tweet) => (
					<Posts
						name={tweet.name}
						picture={tweet.picture}
						username={tweet.username}
						tweet={tweet.tweet}
						postTime={tweet.postTime}
					></Posts>
				))}
			</Box>
		</>
	);
};

export default Home;
