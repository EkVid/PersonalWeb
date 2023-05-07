import { useToast, chakra, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Toasts = () => {
  const toast = useToast();
  return (
    <chakra.h1
      variant={"unstyled"}
      onClick={() =>
        toast({
          title: "Copied to clipboard!",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Vivini#6145
    </chakra.h1>
  );
};

export default dynamic(() => Promise.resolve(Toasts), { ssr: false });
