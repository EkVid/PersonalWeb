import { Image, Center } from "@chakra-ui/react";

const Im = () => {
  return (
    <Center pt={70}>
      <Image
        src="/images/t_resume.jpg"
        alt="Resume Tech"
        width={{ base: "90%", md: "70%", lg: "50%" }}
        height={{ base: "auto", md: "auto", lg: "auto" }}
        border="5px solid grey"
      />
    </Center>
  );
};

export default Im;
