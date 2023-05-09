import { Center, Divider, Text } from "@chakra-ui/react";
import Avatars from "./avatar";
import dynamic from "next/dynamic";

const Contacttext = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize={{ base: "35px", md: "40px", lg: "56px" }}
          spacing={3}
          fontFamily={"serif"}
          fontWeight={"bold"}
          pt={{ base: "200px", md: "200px", lg: "100px" }}
        >
          Get In Touch
        </Text>
      </Center>

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
      <Center>
        <Avatars />
      </Center>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Contacttext), { ssr: false });
