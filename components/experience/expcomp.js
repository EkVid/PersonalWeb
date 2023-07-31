import { Flex, Box, Image, chakra, Link, Text } from "@chakra-ui/react";

const ProjectPreview = ({ isHero }) => {
  const height = isHero === "true" ? "65vh" : "60vh";

  return (
    <Box
      mx="auto"
      my="20px"
      rounded="lg"
      shadow="md"
      bg="white"
      ml="50px"
      mr="50px"
      mt="2000px"
      _dark={{
        bg: "gray.800",
      }}
    >
      <Link
        href="https://www.youtube.com/watch?v=Y7fxK1sJOFU"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          roundedTop="lg"
          w="full"
          height={height}
          fit="cover"
          src="/images/game.png"
          border={"5px solid grey"}
        />
      </Link>

      <Box p={6}>
        <Box>
          <chakra.span
            fontSize="xs"
            textTransform="uppercase"
            color="brand.600"
            _dark={{
              color: "brand.400",
            }}
          ></chakra.span>
          <Link
            display="block"
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{
              color: "gray.600",
              textDecor: "underline",
            }}
          ></Link>
          <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            <Text fontFamily={"serif"}>
              PYGAME, VSCODE, Python, Problem Solving
            </Text>
            <br></br>
            <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
              Card Flipping Memory Game - A Game for testing memorization skills
            </Text>
            <br></br>
            <Text fontFamily={"serif"} fontSize={"20px"}>
              Developed a Memory Card Flipping Games with different difficulty
              levels, resulting in increased user engagement and retention.
              Actively gathered and analyzed user feedback, resulting in the
              implementation of user-friendly features and improved
              functionality.
            </Text>
          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <chakra.span
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            ></chakra.span>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPreview;
