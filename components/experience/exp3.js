import { Flex, Box, Image, chakra, Link, Text, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ProjectPreview3 = ({ isHero }) => {
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
        <Link href="https://csb.utoronto.ca/faculty/guillaume-filion/"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/bioinfo.png"
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
              <Text fontFamily={"serif"} fontSize={"2xl"}>
                Supervisor: Guillaume Filion
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                Bioinformatician in modern Molecular Biology Laboratory
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Assisted with computer-based work involving organizing and
                analyzing DNA sequences using bioinformatics tools in research
                databases, as well as utilizing Python, R, Excel to enter and
                analyze data, applying data analysis techniques and statistical
                methods to extract meaningful insights from large datasets
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
        <Link href="https://www.utsc.utoronto.ca/labs/andrade/"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/lab.png"
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
              <Text fontFamily={"serif"} fontSize={"2xl"}>
                Supervisor: Maydianne Andrade{" "}
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                Research Assistant in Integrative Behavior & Neuroscience Group
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Responsible for feeding, watering, and monitoring live
                populations of black widow spiders, other closely related
                species, and their insect prey as well as conducting extensive
                literature searches about biosafety and spider biology
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Flex>
  );
};

export default ProjectPreview3;
