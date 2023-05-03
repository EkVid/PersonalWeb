import { Center, Text } from "@chakra-ui/react";
import Keyboard from "./keybd";

const Introduction = () => {
  return (
    <div>
      <Center>
        <Text fontSize="2xl" spacing={3} pt={5} fontFamily={"serif"}>
          <center>
            2nd year Co-op CS and Biochemistry Student at University of Toronto.
          </center>
          <br></br>
          <center>
            Self motivated to learn and explore new concepts and technologies.
          </center>
          <br></br>
          Working to act as the bridge between natural science and computer
          science
          <br></br>
          <center>students.</center>
          <br></br>
        </Text>
      </Center>
      <Center>
        <Keyboard />
      </Center>
    </div>
  );
};

export default Introduction;
