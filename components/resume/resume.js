import { Image, Center } from "@chakra-ui/react";

const Im = () => {
  return (
    <Center pt={70}>
      <Image
        boxSize="800px"
        src="/images/tech.jpg"
        alt="Resume"
        width={700}
        border="5px solid grey"
      />
    </Center>
  );
};

export default Im;
