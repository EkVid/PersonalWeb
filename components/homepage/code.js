import { Code } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

const Codes = () => {
  return (
    <div>
      <Stack direction="row">
        <Code colorScheme="red" children="console.log('welcome');" />
        <Code colorScheme="red" children="print('welcome')" />
        <Code colorScheme="red" children="printf('welcome');" />
        <Code colorScheme="red" children="System.out.println('welcome');" />
      </Stack>
    </div>
  );
};

export default Codes;
