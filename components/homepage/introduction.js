import { Center, Text, Box } from "@chakra-ui/react";
import Keyboard from "./keybd";

const Introduction = () => {
  return (
    <div>
      <Center>
        <Box>
          <Text
            fontSize={{ base: "15px", md: "20px", lg: "25px" }}
            spacing={3}
            pt={5}
            fontFamily={"serif"}
          >
            3rd year student at University of Toronto specializing in CS and
            minoring in Economics & Biology
          </Text>
        </Box>
      </Center>
      <br></br>
      <Center>
        <Box>
          <Text
            fontSize={{ base: "15px", md: "20px", lg: "25px" }}
            spacing={3}
            pt={5}
            fontFamily={"serif"}
          >
            Self motivated to learn and explore new concepts and technologies.
          </Text>
        </Box>
      </Center>
      <br></br>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "15px", md: "20px", lg: "25px" }}
            spacing={3}
            pt={5}
            fontFamily={"serif"}
          >
            Working to act as the bridge between natural science and computer
            science students.{" "}
          </Text>
        </Box>
      </Center>
      <br></br>
      <br></br>

      <Center>
        <Keyboard />
      </Center>
    </div>
  );
};
export default Introduction;
