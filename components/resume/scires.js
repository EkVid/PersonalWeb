import { Image, Center } from "@chakra-ui/react";

const Scires = () => {
  return (
    <Center pt={70}>
      <Image
        boxSize="800px"
        src="/images/sci_1.jpg"
        alt="Resume"
        width={600}
        border="5px solid grey"
      />
      <Image
        boxSize="800px"
        src="/images/sci_2.jpg"
        alt="Resume"
        width={600}
        border="5px solid grey"
      />
    </Center>
  );
};

export default Scires;
