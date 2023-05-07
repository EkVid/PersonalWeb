import { Toast, useToast, chakra, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Toastss = () => {
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
      (+1)4164768350
    </chakra.h1>
  );
};

export default dynamic(() => Promise.resolve(Toastss), { ssr: false });
