import { Toast, useToast, toast, Button } from "@chakra-ui/react";

const Toastss = () => {
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
      4164768350
    </Button>
  );
};

export default Toastss;
