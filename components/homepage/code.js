import { Code, Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Codes = () => {
  return (
    <div>
      <Stack direction={{ base: "column", md: "column", lg: "row" }}>
        <Code
          colorScheme="red"
          children='console.log( "welcome" );'
          fontSize={{ base: "8.5px", md: "10px", lg: "15px" }}
        />
        <Code
          colorScheme="red"
          children="print('welcome')"
          fontSize={{ base: "8.5px", md: "10px", lg: "15px" }}
        />
        <Code
          colorScheme="red"
          children='printf("welcome");'
          fontSize={{ base: "8.5px", md: "10px", lg: "15px" }}
        />
        <Code
          colorScheme="red"
          children='System.out.println("welcome");'
          fontSize={{ base: "8.5px", md: "10px", lg: "15px" }}
        />
      </Stack>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Codes), { ssr: false });
