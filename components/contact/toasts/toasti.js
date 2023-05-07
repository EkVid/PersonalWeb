import { Toast, useToast, toast, chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Toasti = () => {
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
      austin_ed7
    </chakra.h1>
  );
};

export default dynamic(() => Promise.resolve(Toasti), { ssr: false });
