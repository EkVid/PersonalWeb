import { Flex, Box, Image, chakra, Link, Text, Spacer } from "@chakra-ui/react";

const ProjectPreview6 = ({ isHero }) => {
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
          href="https://www.geotab.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/geotab.jpeg"
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
                Python, Pandas, Numpy, SQL, Javascript, HTML, CSS, Google Big
                Queries
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                Solutions Engineer Intern at Geotab
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Create and manage department analytical reporting, aiding
                informed decision making. Provide technical program management
                support for department-wide projects, helping to streamline
                business processes and increase department-wide productivity.
                Utilized Google Big Queries, SQL and Python to assist with the
                web scripting process.
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
          href="https://www.utsc.utoronto.ca/biosci/nathan-lovejoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={height}
            width={width}
            fit="cover"
            src="/images/evolution.jpeg"
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
                Javascript, HTML, CSS, Web Design
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontWeight={"bold"} fontSize={"30px"}>
                Frnont - End Developer at Evoluntionary Biology Lab
              </Text>
              <br></br>
              <Text fontFamily={"serif"} fontSize={"20px"}>
                Responsible for designing and creating a professional website
                for Professor Nathan Lovejoy under the department of Biological
                Science.
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

export default ProjectPreview6;
