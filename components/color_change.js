import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Color_change = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "Light Mode" ? "Dark Mode" : "Change Mode"}
    </Button>
  );
};

export default Color_change;
