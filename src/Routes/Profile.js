import { Flex, Image, Text } from "@chakra-ui/react";
import { BsCalendar3 } from "react-icons/bs";

const tempData = {
	id: 1,
	name: "Gato da Akatsuki",
	picture:
		"http://pm1.narvii.com/7368/53026bc6aeba0cefc84eb23aa14f2ba0da9345f3r1-2048-2048v2_uhq.jpg",
	username: "@itachifelino",
	bio: "gato ninja",
	tweet:
		"O empenho em analisar a crescente influência da mídia desafia a capacidade de equalização de alternativas às soluções ortodoxas.",
	postTime: "10s",
	joinDate: "May 2022",
	banner:
		"https://media.istockphoto.com/photos/young-cat-hunting-butterfly-picture-id500175633?k=20&m=500175633&s=612x612&w=0&h=ST9Skv8LvxAaGiT2IpP1_TJD54I4zDuByJp6dLgKu24=",
};

const Profile = () => {
	return (
		<>
			<Flex flexDirection={"column"} height={"504px"} pb="50px">
				<Flex
					backgroundImage={tempData.banner}
					width={"100%"}
					height={"221px"}
					backgroundSize={"cover"}
				/>

				<Image
					position="absolute"
					mt={"152px"}
					ml={"30px"}
					borderWidth={"5px"}
					boxSize={"110px"}
					borderRadius="100px"
					src={tempData.picture}
					border={"5px solid #FFFFFF"}
				/>

				<Flex flexDirection={"column"} mt={"87px"} ml="30px">
					<Text fontSize={"24px"} fontWeight="700" lineHeight={"32px"} m="0">
						{tempData.name}{" "}
					</Text>
					<Text
						fontSize={"16px"}
						color="#666666"
						lineHeight={"21px"}
						m="0"
						pt="12px"
					>
						{tempData.username}{" "}
					</Text>
					<Text fontSize={"18px"} lineHeight="25px" m="0" pt="12px">
						{tempData.bio}{" "}
					</Text>
					<Text color="#666666" m="0" pt="12px">
						<BsCalendar3 color="#000" /> Joined {tempData.joinDate}
					</Text>
				</Flex>
			</Flex>
		</>
	);
};

export default Profile;
