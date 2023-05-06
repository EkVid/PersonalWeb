import { Text, Center, Divider } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Progresses from "./progress";

import Link from "next/link";

const Pub = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize={{ base: "35px", md: "40px", lg: "56px" }}
          spacing={3}
          pt={{ base: 800, md: 600, lg: 700 }}
          fontWeight={"bold"}
          fontFamily={"serif"}
        >
          Article Publications
        </Text>
      </Center>
      <Divider />
      <br></br>
      <br></br>
      <br></br>
      <br></br>{" "}
      <Text
        fontSize={{ base: "20px", md: "25px", lg: "30px" }}
        fontFamily={"serif"}
      >
        Coronavirus Detection using photonics (surface enhanced Raman Scattering
        and FRET)
      </Text>
      <br></br>
      <Divider />
      <br></br>
      <Text
        fontSize={{ base: "10px", md: "15px", lg: "15px" }}
        fontFamily={"serif"}
        fontWeight={"bold"}
      >
        KEYWORDS{" "}
      </Text>
      <br></br>
      <Text
        fontSize={{ base: "15px", md: "20px", lg: "20px" }}
        fontFamily={"serif"}
      >
        COVID-19; coronavirus; ACE2; virus detection; photonics;
        surface-enhanced Raman scattering; fluorescence resonance energy
        transfer
      </Text>
      <br></br>
      <Divider />
      <br></br>
      <Text
        fontSize={{ base: "10px", md: "15px", lg: "15px" }}
        fontFamily={"serif"}
        fontWeight={"bold"}
      >
        CONTRIBUTORS{" "}
      </Text>
      <br></br>
      <Text
        fontSize={{ base: "15px", md: "20px", lg: "20px" }}
        fontFamily={"serif"}
      >
        Akshat Dharmeshkumar Modi, Austin (Tian) Yang, Akriti Sharma
      </Text>
      <br></br>
      <Divider />
      <br></br>
      <Link
        href="https://www.tmrjournals.com/public/articlePDF/20230111/6c18f051d1e13b640e5169111faeef1e.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text
          fontSize={{ base: "10px", md: "15px", lg: "15pxx" }}
          fontFamily={"serif"}
          fontWeight={"bold"}
        >
          Full Article Link <ExternalLinkIcon mx="2px" />
        </Text>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Text
        fontSize={{ base: "20px", md: "25px", lg: "30px" }}
        fontFamily={"serif"}
      >
        Advances in pharmacotherapy for arrythmia (In Progress)
      </Text>
      <br></br>
      <Divider />
      <br></br>
      <Text
        fontSize={{ base: "10px", md: "15px", lg: "15px" }}
        fontFamily={"serif"}
        fontWeight={"bold"}
      >
        KEYWORDS{" "}
      </Text>
      <br></br>
      <Text
        fontSize={{ base: "15px", md: "20px", lg: "20px" }}
        fontFamily={"serif"}
      >
        atrial fibrillation; arrhythmia; antiarrhythmic; non-cardiovascular
      </Text>
      <br></br>
      <Divider />
      <br></br>
      <Text
        fontSize={{ base: "10px", md: "15px", lg: "15px" }}
        fontFamily={"serif"}
        fontWeight={"bold"}
      >
        CONTRIBUTORS{" "}
      </Text>
      <br></br>
      <Text
        fontSize={{ base: "15px", md: "20px", lg: "20px" }}
        fontFamily={"serif"}
      >
        Akshat Dharmeshkumar Modi, Austin (Tian) Yang
      </Text>
      <br></br>
      <Divider />
      <br></br>
      <Text
        fontSize={{ base: "10px", md: "15px", lg: "15pxx" }}
        fontFamily={"serif"}
        fontWeight={"bold"}
      >
        Full Article Link (In Progress~~)
      </Text>
      <br></br>
      <Progresses />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Pub;
