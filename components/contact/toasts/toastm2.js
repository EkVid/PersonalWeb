import { Toast, useToast, chakra, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Toastssss = () => {
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
      austinjas014@gmail.com
    </chakra.h1>
  );
};

export default dynamic(() => Promise.resolve(Toastssss), { ssr: false });
