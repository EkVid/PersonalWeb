import { Flex, Box, Image, chakra, Link, Text, Spacer } from "@chakra-ui/react";

const ProjectPreview5 = ({ isHero }) => {
  const height = isHero === "true" ? "65vh" : "60vh";
  const width = "75vh";

  return (
    <Flex>
      <Box
        mx="auto"
        my="20px"
        rounded="lg"
        shadow="md"
        bg="white"
        ml="50px"
        mr="50px"
        mt="40px"
        left="30px"
        _dark={{
          bg: "gray.800",
        }}
      >
        <Link
          href="https://github.com/sm0ca/cscb07project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/default.jpg"
            border={"5px solid grey"}
          />
        </Link>

        <Box p={6} width={width}>
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
                Software Design, Scrum, Java, Android Studio, Firebase, Design
                Patterns
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                Full Stack Online Mall Shopping App
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Collaborated with a team of 4 with a scrum system to effectively
                manifest an online shopping app with shoppers and owners in a
                mall with over 100 owners and shoppers. Maintained efficient MVP
                Design Patterns using Android Studio and adhered to the 5 SOLID
                Principles.
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
      <Spacer />
      <Box
        mx="auto"
        my="20px"
        rounded="lg"
        shadow="md"
        bg="white"
        ml="50px"
        mr="50px"
        mt="40px"
        left="30px"
        _dark={{
          bg: "gray.800",
        }}
      >
        <Link
          href="https://github.com/sm0ca/cscb07project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/default.jpg"
            border={"5px solid grey"}
          />
        </Link>

        <Box p={6} width={width}>
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
              <Text fontFamily={"serif"}>In Progress</Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                In Progress
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                In Progress
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
    </Flex>
  );
};

export default ProjectPreview5;
