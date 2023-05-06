import { Center, Divider, Text } from "@chakra-ui/react";
import Avatars from "./avatar";

const Contacttext = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize={{ base: "35px", md: "40px", lg: "56px" }}
          spacing={3}
          fontFamily={"serif"}
          fontWeight={"bold"}
          pt={{ base: "800px", lg: "20px" }}
        >
          Get In Touch
        </Text>
      </Center>
      <Divider />
      <br></br>
      <Center>
        <Text
          fontSize={{ base: "18px", md: "26px", lg: "30px" }}
          spacing={3}
          pt={30}
          fontFamily={"serif"}
          top="-30px"
        >
          <center>
            Feel free to add me on social media or sending me an email
          </center>
        </Text>
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Center>
        <Avatars />
      </Center>
    </div>
  );
};

export default Contacttext;
