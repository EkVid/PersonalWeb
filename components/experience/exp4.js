import { Flex, Box, Image, chakra, Link, Text, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ProjectPreview4 = ({ isHero }) => {
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
          href="https://github.com/EkVid/Mental-Health-related-Data-Engine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/data.jpg"
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
              <Text fontFamily={"serif"}>Python, VSCODE, SQL, HTML, CSV</Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                Mental Health Related Data Engine
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Developed an extensive database containing over 10,000 data
                points on anxiety and bipolar disorder indicators across 50+
                countries, enabling in-depth analysis as well as creating a data
                collection mechanism to gather data on anxiety and bipolar
                disorder indicators from 20+ reliable sources, ensuring a
                comprehensive dataset.
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
          href="http://brianharrington.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/CS_ED.jpg"
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
                Python, R, Data Analysis, Literature Review
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                CS Research Assistant
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Assist with 1000+ literature reviews about how the Alternative
                Grading System affects students' performance, and utilize Python
                & R to manipulate datasets on 1000+ articles as well as
                performing intricate operations on the database with utmost
                precision and effectiveness.
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

export default ProjectPreview4;
