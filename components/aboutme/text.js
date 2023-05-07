import { Center, Text, Divider, Link, Box } from "@chakra-ui/react";

const Titles = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize={{ base: "35px", md: "40px", lg: "50px" }}
          spacing={3}
          pt={50}
          fontWeight={"bold"}
          fontFamily={"serif"}
        >
          My Story
        </Text>
      </Center>
      <br></br>
      <Center>
        <Text
          fontSize={{ base: "30px", md: "35px", lg: "40px" }}
          spacing={3}
          pt={50}
          //   pl={15}
          fontWeight={"bold"}
          fontFamily={"serif"}
        >
          {" "}
          A little about me:{" "}
        </Text>
      </Center>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={3}
            pt={10}
            fontFamily={"serif"}
          >
            {" "}
            My name is Austin, a second year student in Co-op Computer Science
            and Biochemistry at University of Toronto.
          </Text>
        </Box>
      </Center>

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
            I was born in Shanghai, and moved to Tokyo afterwards. Growing up in
            two culturally rich and diverse cities, I have developed a deep
            appreciation for the nuances of language, tradition, and history.
            And I was lucky to have the opportunity to learn Mandarin, Japanese,
            and English, and are fluent in all three languages.
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
            Interestingly, I would often spend hours tinkering with gadgets and
            exploring the inner workings of machines. My curiosity about how
            things worked only grew with time, and eventually led me to pursue a
            double major in Computer Science and Biochemistry at the University
            of Toronto.
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
          I have had the opportunity to explore my interests in both fields
          through academic coursework, research, and industry experience. In my
          CS studies, I have learned programming languages such as Java and
          Python, and developed a strong foundation in algorithms, data
          structures, and software engineering. In my Biochemistry studies, I
          have gained knowledge about the structure and function of biological
          systems, and have conducted research on topics such as protein folding
          and drug design. As I move forward in my academic and professional
          journey, I am excited to continue exploring the intersections between
          computer science and biochemistry, and to use my skills to link the
          two subjects together.
        </Text>
      </Center>
      <br></br>

      <br></br>
      <br></br>
    </div>
  );
};

export default Titles;
