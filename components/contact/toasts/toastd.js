import { Toast, useToast, toast, Button } from "@chakra-ui/react";

const Toasts = () => {
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
      Vivini#6145
    </Button>
  );
};

export default Toasts;
