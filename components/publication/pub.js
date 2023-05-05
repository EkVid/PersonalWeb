import {
  Card,
  CardBody,
  Text,
  Stack,
  Box,
  Heading,
  StackDivider,
  CardHeader,
  Grid,
  Center,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Progresses from "./progress";

import Link from "next/link";

const Pub = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize="6xl"
          spacing={3}
          pt={600}
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

      <Grid gap={6}>
        {" "}
        <Card>
          <CardHeader>
            <Heading size="lg" pt={10} fontFamily={"serif"}>
              Coronavirus Detection using photonics (surface enhanced Raman
              Scattering and FRET)
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Keywords
                </Heading>
                <Text pt="2" fontSize="sm">
                  COVID-19; coronavirus; ACE2; virus detection; photonics;
                  surface-enhancedRaman scattering; fluorescence resonance
                  energy transfer
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Contributors
                </Heading>
                <Text pt="2" fontSize="sm">
                  Akshat Dharmeshkumar Modi, Austin (Tian) Yang, Akriti Sharma
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  <Link
                    href="https://www.tmrjournals.com/public/articlePDF/20230111/6c18f051d1e13b640e5169111faeef1e.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Full Article Link <ExternalLinkIcon mx="2px" />
                  </Link>
                </Heading>
                <Text pt="2" fontSize="sm"></Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="lg" pt={10} fontFamily={"serif"}>
              Advances in pharmacotherapy for arrythmia (In Progress)
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Keywords
                </Heading>
                <Text pt="2" fontSize="sm">
                  atrial fibrillation; arrhythmia; antiarrhythmic;
                  non-cardiovascular
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Contributors
                </Heading>
                <Text pt="2" fontSize="sm">
                  Akshat Dharmeshkumar Modi, Austin (Tian) Yang
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Full Article Link (In Progress~~)
                </Heading>
                <br></br>
                <Progresses />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Pub;
