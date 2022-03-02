import {
	Breadcrumb,
	BreadcrumbItem,
	Flex,
	Image,
	Text,
} from "@chakra-ui/react";

const Posts = (props) => {
	const { name, picture, username, tweet, postTime } = props;
	return (
		<>
			<Flex mt={"16px"} borderBottom={"1px solid #e7ecf0"} pl={"30px"}>
				<Image
					src={picture}
					alt={name}
					width={"40px"}
					height={"40px"}
					borderRadius={"100%"}
				></Image>
				<Flex flexDirection={"column"} pl={"16px"}>
					<Flex flexDirection={"row"} height={"20px"}>
						<Text fontWeight={"bold"} fontSize={"15px"} margin={"0"}>
							{name}
						</Text>
						<Text margin={"0"} pl={"4px"} pr={"4px"} textColor={"#828282"}>
							{username} &bull;
						</Text>

						<Text margin={"0"} padding={"0"} textColor={"#828282"}>
							{" "}
							{postTime}
						</Text>
					</Flex>

					<Text fontSize={"15px"} color={"#4F4F4F"}>
						{tweet}
					</Text>
				</Flex>
			</Flex>
		</>
	);
};

export default Posts;
