import { Toast, useToast, toast, Button } from "@chakra-ui/react";

const Toastsss = () => {
  const toast = useToast();
  return (
    <Button
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
    </Button>
  );
};

export default Toastsss;
