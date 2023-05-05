import { Code } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

const Codes = () => {
  return (
    <div>
      <Stack direction="row">
        <Code
          colorScheme="red"
          children="console.log('welcome');"
          fontSize={{ base: "8.5px", md: "10px", lg: "15px" }}
        />
        <Code
          colorScheme="red"
          children="print('welcome')"
          fontSize={{ base: "8.5px", md: "10px", lg: "15px" }}
        />
        <Code
          colorScheme="red"
          children="printf('welcome');"
          fontSize={{ base: "8.5px", md: "10px", lg: "15px" }}
        />
        <Code
          colorScheme="red"
          children="System.out.println('welcome');"
          fontSize={{ base: "8.5px", md: "10px", lg: "15px" }}
        />
      </Stack>
    </div>
  );
};

export default Codes;
