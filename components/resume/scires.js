import { Image, Center } from "@chakra-ui/react";

const Scires = () => {
  return (
    <div>
      <Center pt={70}>
        <Image
          boxSize="800px"
          src="/images/sci_1.jpg"
          alt="Resume"
          width={{ base: "90%", md: "70%", lg: "40%" }}
          height={{ base: "auto", md: "auto", lg: "auto" }}
          border="5px solid grey"
        />
      </Center>
      <Center>
        <Image
          boxSize="800px"
          src="/images/sci_2.jpg"
          alt="Resume"
          width={{ base: "90%", md: "70%", lg: "40%" }}
          height={{ base: "auto", md: "auto", lg: "auto" }}
          border="5px solid grey"
        />
      </Center>
    </div>
  );
};

export default Scires;
