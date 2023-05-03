import { Center, Text } from "@chakra-ui/react";
import Splash from "./Splash";

const Changes = () => {
  return (
    <Center>
      <Text
        fontSize="4xl"
        spacing={3}
        pt={0}
        fontWeight={"bold"}
        fontFamily={"serif"}
        mt={10}
      >
        <Splash />
      </Text>
    </Center>
  );
};

export default Changes;
