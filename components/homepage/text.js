import { Center, Divider, Text } from "@chakra-ui/react";
import Codes from "./code";

const T = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize="6xl"
          spacing={3}
          pt={100}
          fontWeight={"bold"}
          fontFamily={"serif"}
        >
          AUSTIN YANG
        </Text>
      </Center>
      <Divider />
      <Center>
        <Text fontSize="5xl" spacing={2} pt={10}>
          <Codes />
        </Text>
      </Center>
    </div>
  );
};

export default T;
