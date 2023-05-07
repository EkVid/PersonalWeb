import { Center, Divider, Text } from "@chakra-ui/react";
import Codes from "./code";
import dynamic from "next/dynamic";

const T = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize={{ base: "35px", md: "40px", lg: "56px" }}
          spacing={3}
          pt={{ base: "150px", lg: "100px" }}
          fontWeight={"bold"}
          fontFamily={"serif"}
        >
          AUSTIN YANG
        </Text>
      </Center>

      <Center>
        <Text spacing={2} pt={10}>
          <Codes />
        </Text>
      </Center>
    </div>
  );
};

export default dynamic(() => Promise.resolve(T), { ssr: false });
