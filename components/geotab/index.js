import { Center, Text, Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Geotab = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize={{ base: "35px", md: "40px", lg: "50px" }}
          spacing={3}
          pt={70}
          fontWeight={"bold"}
          fontFamily={"serif"}
        >
          Austin (Tian) Yang
        </Text>
      </Center>
      <br></br>
      <Center>
        <a href="/aboutme">
          <Text
            fontSize={{ base: "30px", md: "35px", lg: "40px" }}
            spacing={3}
            pt={50}
            fontWeight={"bold"}
            fontFamily={"serif"}
            _hover={{ textDecoration: "underline" }}
          >
            {" "}
            About me
          </Text>
        </a>
      </Center>
      <br></br>
      <Center>
        <a href="/resumetech">
          <Text
            fontSize={{ base: "30px", md: "35px", lg: "40px" }}
            spacing={3}
            pt={50}
            //   pl={15}
            fontWeight={"bold"}
            fontFamily={"serif"}
            _hover={{ textDecoration: "underline" }}
          >
            {" "}
            Latest Resume
          </Text>
        </a>
      </Center>
      <br></br>
      <br></br>
      <a href="https://www.geotab.com/" target="_blank">
        <Center>
          <Box border="2px solid grey" p={3} borderRadius="md">
            <img
              src="https://www.inhalton.com/wp-content/uploads/2023/05/Geotab.png"
              alt="Geotab Office Picture"
            />
          </Box>
        </Center>
      </a>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={3}
            pt={10}
            paddingLeft={{ base: 0, md: 10, lg: 40 }}
            paddingRight={{ base: 0, md: 10, lg: 40 }}
            fontFamily={"serif"}
          >
            {" "}
            Being a software development intern at Geotab, which is my first
            co-op work term, entails a variety of activities. The projects,
            teamwork, and workplace culture will all be briefly covered in the
            following paragraph.
          </Text>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={0}
            pt={10}
            paddingLeft={{ base: 0, md: 10, lg: 40 }}
            paddingRight={{ base: 0, md: 10, lg: 40 }}
            fontFamily={"serif"}
          >
            {" "}
            Throughout the course of the four months of the work term, I have
            been working on two projects within an Agile-Scrum based team named
            "Team Start". The team's primary goal is to drive as many new or
            returning customers to the corporate's website as we can. As a
            tech-based real estate company, we draw consumers from internet
            traffic and direct them into different funnels based on their
            demands using marketing strategies on the layout of our website. For
            instance, a typical house buyer could wish to research and estimate
            the deal price of their selected properties; therefore, our team's
            goal is to make it simpler for them to find the tool they need on
            our website and register their information for future engagement.
          </Text>
        </Box>
      </Center>

      <Center>
        <Text
          fontSize={{ base: "17px", md: "20px", lg: "23px" }}
          spacing={0}
          pt={10}
          paddingLeft={{ base: 0, md: 10, lg: 40 }}
          paddingRight={{ base: 0, md: 10, lg: 40 }}
          fontFamily={"serif"}
        >
          The redesign of our company's web landing page is the first project I
          have been working on. Collaboration with the project manager, the
          designer, and a solid grasp of front-end web development are all
          necessary for this. To create the website, two other full-time
          employees and I have been working as a three-person team. Later, we
          ran an A/B test on the new and old web pages to compare the number of
          customers two web pages has brought in.
        </Text>
      </Center>
      <Center>
        <Text
          fontSize={{ base: "17px", md: "20px", lg: "23px" }}
          spacing={0}
          pt={10}
          paddingLeft={{ base: 0, md: 10, lg: 40 }}
          paddingRight={{ base: 0, md: 10, lg: 40 }}
          fontFamily={"serif"}
        >
          In addition to the existing experience, I have had some constructive
          conversations with other senior developers as well. They give me
          incredibly valuable advice regarding my careers and plans. Overall, my
          experience at Geotab has far surpassed my expectations.
        </Text>
      </Center>

      <br></br>
      <br></br>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Geotab), { ssr: false });
