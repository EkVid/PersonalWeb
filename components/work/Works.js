import { Container, Heading, SimpleGrid, Image, Link } from "@chakra-ui/react";

import Layout from "../layouts";
import Section from "../section";
import { WorkGridItem } from "../Grid";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading
        as="h3"
        fontSize={{ base: "30px", lg: "40px" }}
        mt={10}
        mb={10}
        ml={10}
        fontFamily={"serif"}
        fontWeight={"bold"}
      >
        Work Experiences & Projects
      </Heading>

      <Section>
        <Link
          href="https://www.youtube.com/watch?v=Y7fxK1sJOFU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="images/game.png" rounded={"lg"} />
          <br></br>
          <WorkGridItem
            title="Card Flipping Game"
            framework="PYGAME, VSCODE, SQL, CSV (Details available in Github)"
          >
            <br></br>A Card Flipping Games with different difficulty levels,
            resulting in increased user engagement and retention.
          </WorkGridItem>
        </Link>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Link
            href="https://www.utsc.utoronto.ca/programs/csu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="images/csu.png" rounded={"lg"} /> <br></br>
            <WorkGridItem
              title="Webmaster"
              framework="WORDPRESS, NEXT.JS, CHAKRA UI, VSCODE, CHOC UI"
            >
              <br></br>A data-driven Responsible for publicity of CSU for the
              purposes of recruiting members and advertising events held by the
              organization through updating the organization's website.
            </WorkGridItem>
          </Link>
        </Section>
        <Section>
          <Link
            href="https://filionlab.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/bioinfo.png" rounded={"lg"} /> <br></br>
            <WorkGridItem
              title="Bioinformatician "
              framework="Supervisor: Dr. Guillaume Filion"
            >
              <br></br>
              Assisted with computer-based work involving organizing and
              analyzing DNA sequences.
            </WorkGridItem>
          </Link>
        </Section>

        <Section delay={0.1}>
          <Image src="images/food.png" rounded={"lg"} /> <br></br>
          <WorkGridItem
            title="Recipe Recommendation Engine"
            framework="C/C++, VSCODE, Graph Theory"
          >
            <br></br>A data-driven ingredient recommendation engine to help with
            cognitive cooking.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <Link
            href="https://www.utsc.utoronto.ca/labs/andrade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="images/lab.png" rounded={"lg"} />
            <br></br>
            <WorkGridItem
              title="Research Assistant"
              framework={"Supervisor: Dr. Maydianne Andrade"}
            >
              <br></br>Responsible for monitoring live populations of black
              widow spiders, other closely related species
            </WorkGridItem>
          </Link>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
