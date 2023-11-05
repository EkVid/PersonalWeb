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
          href="https://www.geotab.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="images/geotab.jpeg" rounded={"lg"} />
          <br></br>
          <WorkGridItem
            title="Solutions Engineer Intern at Geotab"
            framework="Python, Pandas, Numpy, SQL, Google Big Queries"
          >
            <br></br>Update and maintain department and team documentation/sites
            as required, helping to standardize processes. Also provide
            technical program management support for department-wide projects,
            helping to streamline business processes and increase
            department-wide productivity.
          </WorkGridItem>
        </Link>
      </Section>

      <Section delay={0.1}>
        <Link
          href="https://www.utsc.utoronto.ca/biosci/nathan-lovejoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="images/evolution.jpeg" rounded={"lg"} />
          <br></br>
          <WorkGridItem
            title="Frnont - End Developer at Evoluntionary Biology Lab"
            framework="Javascript, HTML, CSS, Web Design"
          >
            <br></br> Responsible for designing and creating a professional
            website for Professor Nathan Lovejoy under the department of
            Biological Science.
          </WorkGridItem>
        </Link>
      </Section>

      <Section delay={0.1}>
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
            resulting in increased user engagement and retention. Actively
            gathered and analyzed user feedback, resulting in the implementation
            of user-friendly features and improved functionality.
          </WorkGridItem>
        </Link>
      </Section>

      <Section delay={0.1}>
        <Link
          href="https://github.com/EkVid/Full-Stack-Online-Mall-Shopping-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="images/mall.png" rounded={"lg"} />
          <br></br>
          <WorkGridItem
            title="Full Stack Online Mall Shopping App"
            framework={
              "Software Design, Scrum, Java, Android Studio, Firebase, Design Patterns"
            }
          >
            <br></br> Collaborated with a team of 4 with a scrum system to
            effectively manifest an online shopping app with shoppers and owners
            in a mall with over 100 owners and shoppers. Maintained efficient
            MVP Design Patterns using Android Studio and adhered to the 5 SOLID
            Principles.
          </WorkGridItem>
        </Link>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Link
            href="https://github.com/EkVid/Mental-Health-related-Data-Engine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="images/data.jpg" rounded={"lg"} /> <br></br>
            <WorkGridItem
              title="Mental Health Related Data Engine"
              framework="Python, VSCODE, SQL, HTML, CSV"
            >
              <br></br> Developed an extensive database containing over 10,000
              data points on anxiety and bipolar disorder indicators across 50+
              countries, enabling in-depth analysis as well as creating a data
              collection mechanism to gather data on anxiety and bipolar
              disorder indicators from 20+ reliable sources, ensuring a
              comprehensive dataset.
            </WorkGridItem>
          </Link>
        </Section>

        <Section delay={0.1}>
          <Link
            href="https://ds3-dev.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="images/DS3.png" rounded={"lg"} />
            <br></br>
            <WorkGridItem
              title="Web Developer for Data Science & Statistics Society (DS3)"
              framework={"Javascript, HTML, CSS, Figma, Web Design"}
            >
              <br></br> Responsible for regularly updating the website as well
              as ensuring a smooth and intuitive user experience. Applied
              user-centric design principles to create a seamless navigation
              experience.
            </WorkGridItem>
          </Link>
        </Section>

        <Section>
          <Link
            href="http://brianharrington.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="images/CS_ED.jpg" rounded={"lg"} /> <br></br>
            <WorkGridItem
              title="CS Research Assistant"
              framework="Python, R, Data Analysis, Literature Review"
            >
              <br></br> Assist with 1000+ literature reviews about how the
              Alternative Grading System affects students' performance, and
              utilize Python & R to manipulate datasets on 1000+ articles as
              well as performing intricate operations on the database with
              utmost precision and effectiveness.
            </WorkGridItem>
          </Link>
        </Section>

        <Section>
          <Link
            href="https://www.utsc.utoronto.ca/programs/csu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="images/csu.png" rounded={"lg"} /> <br></br>
            <WorkGridItem
              title="Webmaster"
              framework="WordPress, Next.JS, Chakra UI, VSCODE, Choc UI"
            >
              <br></br> Responsible for publicity of CSU for the purposes of
              recruiting members and advertising events held by the organization
              through updating the organization's website. Coordinate with the
              CSU team to get all advertisements and information on the website.
            </WorkGridItem>
          </Link>
        </Section>
        <Section delay={0.1}>
          <Link
            href="https://github.com/EkVid/Recipe-Recommendation-Engine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="images/food.png" rounded={"lg"} /> <br></br>
          </Link>
          <WorkGridItem
            title="Recipe Recommendation Engine"
            framework="C/C++, VSCODE, Graph Theory"
          >
            <br></br> Developed a data-driven ingredient recommendation engine
            to help with cognitive cooking. Enhanced the program's computational
            creativity to generate innovative cooking recipes through graph
            theory.
          </WorkGridItem>
        </Section>
        <Section>
          <Link
            href="https://csb.utoronto.ca/faculty/guillaume-filion/"
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
              analyzing DNA sequences using bioinformatics tools in research
              databases, as well as utilizing Python, R, Excel to enter and
              analyze data, applying data analysis techniques and statistical
              methods to extract meaningful insights from large datasets
            </WorkGridItem>
          </Link>
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
              <br></br> Responsible for feeding, watering, and monitoring live
              populations of black widow spiders, other closely related species,
              and their insect prey as well as conducting extensive literature
              searches about biosafety and spider biology.
            </WorkGridItem>
          </Link>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
