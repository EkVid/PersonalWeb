import { Toast, useToast, toast, Button } from "@chakra-ui/react";

const Toasti = () => {
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
      austin_ed7
    </Button>
  );
};

export default Toasti;
