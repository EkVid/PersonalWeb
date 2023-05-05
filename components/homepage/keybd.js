import { Kbd } from "@chakra-ui/react";

const Keyboard = () => {
  return (
    <span>
      <Kbd fontSize={{ base: "10px", md: "12px", lg: "15px" }}>control</Kbd> +{" "}
      <Kbd fontSize={{ base: "10px", md: "12px", lg: "15px" }}>shift</Kbd> +{" "}
      <Kbd fontSize={{ base: "10px", md: "12px", lg: "15px" }}>Q</Kbd> /{" "}
      <Kbd fontSize={{ base: "10px", md: "12px", lg: "15px" }}>Alt</Kbd> +{" "}
      <Kbd fontSize={{ base: "10px", md: "12px", lg: "15px" }}>F4</Kbd> +{" "}
      <Kbd fontSize={{ base: "10px", md: "12px", lg: "15px" }}>Q</Kbd>
    </span>
  );
};

export default Keyboard;
