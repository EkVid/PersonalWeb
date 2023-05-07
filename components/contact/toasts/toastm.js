import { Toast, useToast, chakra, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Toastsss = () => {
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
      au.yang@mail.utoronto.ca
    </chakra.h1>
  );
};

export default dynamic(() => Promise.resolve(Toastsss), { ssr: false });
