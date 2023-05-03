import { Kbd } from "@chakra-ui/react";

const Keyboard = () => {
  return (
    <span>
      <Kbd>control</Kbd> + <Kbd>shift</Kbd> + <Kbd>Q</Kbd> / <Kbd>Alt</Kbd> +{" "}
      <Kbd>F4</Kbd> + <Kbd>Q</Kbd>
    </span>
  );
};

export default Keyboard;
