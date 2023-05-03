import { Flex, Box, Image, chakra, Link, Text, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ProjectPreview2 = ({ isHero }) => {
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
        <Image
          roundedTop="lg"
          w="full"
          h={height}
          width={width}
          fit="cover"
          src="/images/food.png"
          border={"5px solid grey"}
        />

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
                C, VSCODE, GRAPH THEORY, BST (Details available in Github)
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                Recipe Recommendation Engine
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Developed a data-driven ingredient recommendation engine to help
                with cognitive cooking. Enhanced the program's computational
                creativity to generate innovative cooking recipes through graph
                theory. Evaluated product quality and performances by
                benchmarking with over 150,000 pairs of ingredients.
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
        <Link href="https://www.utsc.utoronto.ca/programs/csu/">
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/csu.png"
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
                WORDPRESS, NEXT.JS, CHAKRA UI, VSCODE, CHOC UI{" "}
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                Webmaster for CSU
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Responsible for publicity of CSU for the purposes of recruiting
                members and advertising events held by the organization through
                updating the organization's website. Coordinate with the CSU
                team to get all advertisements and information on the website.
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

export default ProjectPreview2;
