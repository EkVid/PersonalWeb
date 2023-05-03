import { Toast, useToast, toast, Button } from "@chakra-ui/react";

const Toastssss = () => {
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
      austinjas014@gmail.com
    </Button>
  );
};

export default Toastssss;
